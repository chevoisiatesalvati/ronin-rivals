'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { formatEther } from 'viem';
import { toast } from 'react-hot-toast';
import { useContract, useActiveBattles } from '@/lib/contract';
import { Battle } from '@/types/game';

interface ActiveBattlesProps {
  connectedAddress: string | null;
}

export default function ActiveBattles({ connectedAddress }: ActiveBattlesProps) {
  const { address } = useAccount();
  const [executingBattleId, setExecutingBattleId] = useState<bigint | null>(null);
  const [lastCriticalHit, setLastCriticalHit] = useState<{ battleId: bigint; damage: string } | null>(null);

  const { executeTurn, acceptBattle, isPending, isConfirming, isSuccess, error, hash } = useContract();
  const { activeBattles, isLoading: battlesLoading } = useActiveBattles(hash);

  // Handle success/error messages with useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success('Action completed successfully!');
      setExecutingBattleId(null);
      // Clear critical hit display after a few seconds
      setTimeout(() => setLastCriticalHit(null), 3000);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(`Action failed: ${error.message}`);
      setExecutingBattleId(null);
    }
  }, [error]);

  const handleExecuteTurn = async (battleId: bigint) => {
    setExecutingBattleId(battleId);
    try {
      await executeTurn(battleId);
      // Note: Critical hit detection would need to be implemented via event listening
      // For now, we'll show a random critical hit indicator for demonstration
      if (Math.random() < 0.3) { // 30% chance to show critical hit
        setLastCriticalHit({ battleId, damage: '15' });
      }
    } catch (error) {
      console.error('Execute turn error:', error);
      toast.error('Failed to execute turn');
      setExecutingBattleId(null);
    }
  };

  const handleAcceptBattle = async (battleId: bigint, betAmount: bigint) => {
    setExecutingBattleId(battleId);
    try {
      await acceptBattle(battleId, betAmount);
    } catch (error) {
      console.error('Accept battle error:', error);
      toast.error('Failed to accept battle');
      setExecutingBattleId(null);
    }
  };

  const isExecutingTurnLoading = (battleId: bigint) => 
    executingBattleId === battleId || (isPending && executingBattleId === battleId) || (isConfirming && executingBattleId === battleId);

  return (
    <div className="space-y-6">
      {battlesLoading ? (
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <p className="text-white/80">Loading battles...</p>
        </div>
      ) : activeBattles.length > 0 ? (
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">Your Active Battles ({activeBattles.length})</h4>
          {activeBattles.map(({ battleId, battle }) => {
            if (!battle) return null;
            
            const isMyTurn = battle.currentTurn === address;
            const isChallenger = battle.challenger === address;
            const isOpponent = battle.opponent === address;
            const myHealth = isChallenger ? battle.challengerHealth : battle.opponentHealth;
            const opponentHealth = isChallenger ? battle.opponentHealth : battle.challengerHealth;
            const opponentAddress = isChallenger ? battle.opponent : battle.challenger;

            return (
              <div key={battleId.toString()} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="text-md font-bold text-white">Battle #{battleId.toString()}</h5>
                  <div className="flex items-center space-x-2">
                    {/* Critical Hit Indicator */}
                    {lastCriticalHit && lastCriticalHit.battleId === battleId && (
                      <span className="px-2 py-1 bg-red-600/20 border border-red-600/30 rounded text-red-400 text-xs font-medium animate-pulse">
                        ⚡ Critical Hit! {lastCriticalHit.damage} DMG
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      !battle.isAccepted ? 'bg-yellow-600/20 text-yellow-400' :
                      isMyTurn ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'
                    }`}>
                      {!battle.isAccepted ? 'Pending Acceptance' :
                       isMyTurn ? 'Your Turn' : "Opponent's Turn"}
                    </span>
                  </div>
                </div>
                
                {/* Battle Info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-white/80 mb-3">
                  <div>
                    <p className="font-semibold text-white">
                      You: {address?.slice(0, 6)}...{address?.slice(-4)}
                    </p>
                    <p>Health: {myHealth.toString()}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Opponent: {opponentAddress.slice(0, 6)}...{opponentAddress.slice(-4)}
                    </p>
                    <p>Health: {opponentHealth.toString()}</p>
                  </div>
                </div>

                {/* Battle Details */}
                <div className="bg-white/10 rounded p-3 mb-3">
                  <div className="grid grid-cols-3 gap-2 text-xs text-white/80">
                    <p>Turn Count: {battle.turnCount.toString()}</p>
                    <p>Bet: {formatEther(battle.bet)} RON</p>
                    <p>Role: {isChallenger ? 'Challenger' : 'Opponent'}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                {!battle.isAccepted && isOpponent && (
                  <button
                    onClick={() => handleAcceptBattle(battleId, battle.bet)}
                    disabled={isExecutingTurnLoading(battleId)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                  >
                    {isExecutingTurnLoading(battleId) ? (isPending ? 'Accepting...' : 'Confirming...') : `Accept Battle (${formatEther(battle.bet)} RON)`}
                  </button>
                )}

                {battle.isAccepted && isMyTurn && (
                  <button
                    onClick={() => handleExecuteTurn(battleId)}
                    disabled={isExecutingTurnLoading(battleId)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
                  >
                    {isExecutingTurnLoading(battleId) ? (isPending ? 'Executing...' : 'Confirming...') : 'Execute Turn'}
                  </button>
                )}

                {/* Waiting Messages */}
                {!battle.isAccepted && isChallenger && (
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm">
                      Waiting for opponent to accept challenge...
                    </p>
                  </div>
                )}

                {battle.isAccepted && !isMyTurn && (
                  <div className="text-center">
                    <p className="text-yellow-400 text-sm">
                      Waiting for opponent's turn...
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white/5 rounded-lg p-4 text-center">
          <p className="text-white/80">
            No active battles. Start a new battle in the Battle Arena!
          </p>
        </div>
      )}
    </div>
  );
}