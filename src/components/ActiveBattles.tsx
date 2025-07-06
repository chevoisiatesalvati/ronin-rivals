'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { formatEther } from 'viem';
import { toast } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { useContract, useActiveBattles } from '@/lib/contract';
import { Battle } from '@/types/game';

interface ActiveBattlesProps {
  connectedAddress: string | null;
}

export default function ActiveBattles({ connectedAddress }: ActiveBattlesProps) {
  const { address } = useAccount();
  const [executingBattleId, setExecutingBattleId] = useState<bigint | null>(null);
  const [damageAnimations, setDamageAnimations] = useState<Array<{
    id: string;
    battleId: bigint;
    damage: string;
    position: { x: number; y: number };
  }>>([]);

  const { executeTurn, acceptBattle, isPending, isConfirming, isSuccess, error, hash } = useContract();
  const { activeBattles, isLoading: battlesLoading } = useActiveBattles(hash);

  // Handle success/error messages with useEffect
  useEffect(() => {
    if (isSuccess) {
      setExecutingBattleId(null);
      
      // Add a more dramatic damage animation for visual feedback
      const randomDamage = Math.floor(Math.random() * 15) + 8; // 8-23 damage (more impactful)
      const randomX = Math.random() * 300 + 100; // Better positioning range
      const randomY = Math.random() * 150 + 50; // Better vertical positioning
      
      const newAnimation = {
        id: `damage-${Date.now()}-${Math.random()}`,
        battleId: executingBattleId || 0n,
        damage: randomDamage.toString(),
        position: { x: randomX, y: randomY }
      };
      
      setDamageAnimations(prev => [...prev, newAnimation]);
      
      // Remove damage animation after animation completes
      setTimeout(() => {
        setDamageAnimations(prev => prev.filter(anim => anim.id !== newAnimation.id));
      }, 2000);
    }
  }, [isSuccess, executingBattleId]);

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
              <div key={battleId.toString()} className="bg-white/5 rounded-lg p-4 border border-white/10 relative overflow-hidden">
                {/* Damage Animation Overlay */}
                <AnimatePresence>
                  {damageAnimations
                    .filter(anim => anim.battleId === battleId)
                    .map((anim, index) => (
                      <motion.div
                        key={anim.id}
                        initial={{ 
                          opacity: 0, 
                          y: 0, 
                          scale: 0.3,
                          x: anim.position.x,
                          filter: 'blur(0px)',
                        }}
                        animate={{ 
                          opacity: [0, 1, 1, 0], 
                          y: [-20, -80, -120], 
                          scale: [0.3, 1.5, 1.2, 0.8],
                          x: anim.position.x,
                          filter: 'blur(0px)',
                        }}
                        exit={{ 
                          opacity: 0, 
                          y: -120, 
                          scale: 0.5 
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
                          times: [0, 0.2, 0.8, 1] // Control timing of opacity
                        }}
                        className="absolute pointer-events-none z-10"
                        style={{
                          left: 0,
                          top: anim.position.y,
                        }}
                      >
                        <span className="text-red-500 font-black text-4xl drop-shadow-lg select-none">
                          -{anim.damage}
                        </span>
                        {/* Damage impact effect */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="absolute inset-0 bg-red-500/20 rounded-full blur-sm"
                          style={{ transform: 'scale(2)' }}
                        />
                      </motion.div>
                    ))}
                </AnimatePresence>

                <div className="flex justify-between items-start mb-3">
                  <h5 className="text-md font-bold text-white">Battle #{battleId.toString()}</h5>
                  <div className="flex items-center space-x-2">
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
                    {isExecutingTurnLoading(battleId) ? (isPending ? 'Executing...' : 'Attacking...') : 'Attack'}
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