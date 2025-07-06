'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { useContract, useContractRead } from '@/lib/contract';
import { Battle } from '@/types/game';
import toast from 'react-hot-toast';

interface BattleArenaProps {
  connectedAddress: string | null;
}

// Known Samurai addresses for testing (you can expand this list)
const KNOWN_SAMURAIS = [
  { address: '0x5bbE4A4dCAA49Ce4580FF070EDF1Ad3fEb6b7883', name: 'Test Samurai 1' },
  { address: '0x8BabBCf0E975D8e982dA443e36b78293F8019E79', name: 'Test Samurai 2' },
  // Add more known addresses here
];

export default function BattleArena({ connectedAddress }: BattleArenaProps) {
  const { address } = useAccount();
  const [opponentAddress, setOpponentAddress] = useState('');
  const [betAmount, setBetAmount] = useState('0.01');
  const [isStartingBattle, setIsStartingBattle] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSamurais, setFilteredSamurais] = useState(KNOWN_SAMURAIS);
  const [selectedSamurai, setSelectedSamurai] = useState<{ address: string; name: string } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { startBattle, executeTurn, isPending, isConfirming, isSuccess, error, hash } =
    useContract();
  const { currentBattle, battleIdCounter, minimumBet, maximumBet } =
    useContractRead(hash);

  // Handle success/error messages with useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success('Transaction successful!');
      setIsStartingBattle(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(`Transaction failed: ${error.message}`);
      setIsStartingBattle(false);
    }
  }, [error]);

  // Filter Samurais based on input
  useEffect(() => {
    if (opponentAddress.trim() === '') {
      setFilteredSamurais(KNOWN_SAMURAIS);
      setShowDropdown(false);
    } else {
      const filtered = KNOWN_SAMURAIS.filter(samurai =>
        samurai.name.toLowerCase().includes(opponentAddress.toLowerCase()) ||
        samurai.address.toLowerCase().includes(opponentAddress.toLowerCase())
      );
      setFilteredSamurais(filtered);
      setShowDropdown(filtered.length > 0);
    }
  }, [opponentAddress]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSamuraiSelect = (samurai: { address: string; name: string }) => {
    setOpponentAddress(samurai.address);
    setSelectedSamurai(samurai);
    setShowDropdown(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOpponentAddress(value);
    setSelectedSamurai(null);
  };

  const handleStartBattle = async () => {
    
    if (!address) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!opponentAddress.trim()) {
      toast.error('Please enter opponent address');
      return;
    }

    if (!opponentAddress.startsWith('0x') || opponentAddress.length !== 42) {
      toast.error('Please enter a valid wallet address (0x...)');
      return;
    }

    const betAmountWei = parseEther(betAmount);
    const minBet = parseEther(minimumBet || '0.01');
    const maxBet = parseEther(maximumBet || '1');


    if (betAmountWei < minBet || betAmountWei > maxBet) {
      toast.error(
        `Bet amount must be between ${minimumBet} and ${maximumBet} RON`
      );
      return;
    }

    setIsStartingBattle(true);
    toast.loading('Starting battle...');

    try {
      startBattle(opponentAddress as `0x${string}`, betAmountWei);
      setOpponentAddress('');
      setBetAmount('0.01');
      setSelectedSamurai(null);
    } catch (error) {
      console.error('Start battle error:', error);
      toast.error('Failed to start battle');
      setIsStartingBattle(false);
    }
  };

  const handleExecuteTurn = async () => {
    if (!currentBattle || !battleIdCounter) {
      toast.error('No active battle found');
      return;
    }

    const currentBattleId = battleIdCounter - 1n;

    try {
      await executeTurn(currentBattleId);
    } catch (error) {
      console.error('Execute turn error:', error);
      toast.error('Failed to execute turn');
    }
  };

  const isMyTurn = currentBattle && currentBattle.currentTurn === address;
  const isPlayer1 = currentBattle && currentBattle.player1 === address;
  const isPlayer2 = currentBattle && currentBattle.player2 === address;

  // Use isConfirming for the loading state (transaction being mined)
  const isLoading = isPending || isConfirming;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">⚔️ Battle Arena</h2>

      <div className="space-y-6">
        {/* Start New Battle Section */}
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-lg font-bold text-white mb-2">
            Start New Battle
          </h4>
          <div className="space-y-3">
            <div className="relative" ref={dropdownRef}>
              <label className="block text-white text-sm font-medium mb-1">
                Opponent Address
              </label>
              <input
                type="text"
                value={opponentAddress}
                onChange={handleInputChange}
                onFocus={() => setShowDropdown(true)}
                placeholder="Type to search Samurais or enter address..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20"
              />
              
              {/* Dropdown */}
              {showDropdown && filteredSamurais.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-600 rounded-lg max-h-48 overflow-y-auto shadow-lg">
                  {filteredSamurais.map((samurai) => (
                    <button
                      key={samurai.address}
                      onClick={() => handleSamuraiSelect(samurai)}
                      className="w-full px-3 py-2 text-left text-white hover:bg-gray-700 transition-colors flex justify-between items-center border-b border-gray-700 last:border-b-0"
                    >
                      <span className="font-medium">{samurai.name}</span>
                      <span className="text-gray-400 text-xs">
                        {samurai.address.slice(0, 6)}...{samurai.address.slice(-4)}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              
              {/* Selected Samurai Display */}
              {selectedSamurai && (
                <div className="mt-2 p-2 bg-green-600/20 border border-green-600/30 rounded text-green-400 text-sm">
                  Selected: {selectedSamurai.name} ({selectedSamurai.address.slice(0, 6)}...{selectedSamurai.address.slice(-4)})
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Bet Amount (RON)
              </label>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                min={minimumBet || 0.01}
                max={maximumBet || 1}
                step="0.01"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20"
              />
              <p className="text-white/60 text-xs mt-1">
                Min: {minimumBet} RON | Max: {maximumBet} RON
              </p>
            </div>
            <button
              onClick={handleStartBattle}
              disabled={
                isLoading || !opponentAddress.trim()
              }
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
            >
              {isLoading
                ? 'Starting Battle...'
                : 'Start Battle'}
            </button>
          </div>
        </div>

        {/* Active Battle Section */}
        {currentBattle && currentBattle.isActive && (
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Active Battle</h4>
            <div className="space-y-4">
              {/* Battle Info */}
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80">
                <div>
                  <p className="font-semibold">
                    Player 1: {currentBattle.player1.slice(0, 6)}...
                    {currentBattle.player1.slice(-4)}
                  </p>
                  <p>Health: {currentBattle.player1Health.toString()}</p>
                </div>
                <div>
                  <p className="font-semibold">
                    Player 2: {currentBattle.player2.slice(0, 6)}...
                    {currentBattle.player2.slice(-4)}
                  </p>
                  <p>Health: {currentBattle.player2Health.toString()}</p>
                </div>
              </div>

              {/* Turn Info */}
              <div className="bg-white/10 rounded p-3">
                <p className="text-white font-semibold">
                  Current Turn:{' '}
                  {currentBattle.currentTurn === address
                    ? 'Your turn'
                    : "Opponent's turn"}
                </p>
                <p className="text-white/80">
                  Turn Count: {currentBattle.turnCount.toString()}
                </p>
                <p className="text-white/80">
                  Bet Amount: {formatEther(currentBattle.bet)} RON
                </p>
              </div>

              {/* Action Button */}
              {isMyTurn && (
                <button
                  onClick={handleExecuteTurn}
                  disabled={isLoading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Executing...' : 'Execute Turn'}
                </button>
              )}

              {/* Battle Status */}
              {!isMyTurn && (
                <div className="text-center">
                  <p className="text-yellow-400">
                    Waiting for opponent's turn...
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* No Active Battle */}
        {(!currentBattle || !currentBattle.isActive) && (
          <div className="bg-white/5 rounded-lg p-4 text-center">
            <p className="text-white/80">
              No active battle. Start a new battle to begin!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
