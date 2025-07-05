'use client';

import { useState, useEffect } from 'react';
import { useContract, useContractRead } from '@/lib/contract';
import { Battle } from '@/types/game';
import toast from 'react-hot-toast';

interface BattleArenaProps {
  connectedAddress: string | null;
}

export default function BattleArena({ connectedAddress }: BattleArenaProps) {
  const [opponentAddress, setOpponentAddress] = useState('');
  const [betAmount, setBetAmount] = useState('0.01');

  const { startBattle, executeTurn, isPending, isSuccess, error } =
    useContract();
  const { currentBattle, battleIdCounter } = useContractRead();

  // Handle success/error messages with useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success('Transaction successful!');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(`Transaction failed: ${error.message}`);
    }
  }, [error]);

  const handleStartBattle = async () => {
    if (!opponentAddress.trim()) {
      toast.error('Please enter opponent address');
      return;
    }

    try {
      await startBattle(opponentAddress as `0x${string}`);
      setOpponentAddress('');
      setBetAmount('0.01');
    } catch (error) {
      toast.error('Failed to start battle');
      console.error(error);
    }
  };

  const handleExecuteTurn = async () => {
    if (!battleIdCounter || battleIdCounter === 0n) {
      toast.error('No active battle');
      return;
    }

    try {
      await executeTurn(battleIdCounter - 1n);
    } catch (error) {
      toast.error('Failed to execute turn');
      console.error(error);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">⚔️ Battle Arena</h2>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-2">
            Start New Battle
          </h4>
          <input
            type="text"
            value={opponentAddress}
            onChange={(e) => setOpponentAddress(e.target.value)}
            placeholder="Opponent address (0x...)"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 mb-3"
          />
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            placeholder="Bet amount (RON)"
            step="0.01"
            min="0.01"
            max="1"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20 mb-3"
          />
          <button
            onClick={handleStartBattle}
            disabled={isPending || !opponentAddress.trim()}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
          >
            {isPending ? 'Starting Battle...' : 'Start Battle'}
          </button>
        </div>

        {currentBattle && (
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Active Battle</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>Player 1 Health: {currentBattle.player1Health.toString()}</p>
              <p>Player 2 Health: {currentBattle.player2Health.toString()}</p>
              <p>
                Current Turn:{' '}
                {currentBattle.currentTurn === connectedAddress
                  ? 'Your turn'
                  : "Opponent's turn"}
              </p>
              <p>Turn Count: {currentBattle.turnCount.toString()}</p>
            </div>
            {currentBattle.currentTurn === connectedAddress && (
              <button
                onClick={handleExecuteTurn}
                disabled={isPending}
                className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
              >
                {isPending ? 'Executing...' : 'Execute Turn'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
