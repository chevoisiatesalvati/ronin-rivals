'use client';

import { useState, useEffect } from 'react';
import { useContract, useContractRead } from '@/lib/contract';
import toast from 'react-hot-toast';

export default function SamuraiCard() {
  const [samuraiName, setSamuraiName] = useState('');

  const { createSamurai, upgradeStat, isPending, isConfirming, isSuccess, error, hash } =
    useContract();
  const { samurai } = useContractRead(hash);

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

  const handleCreateSamurai = async () => {
    if (!samuraiName.trim()) {
      toast.error('Please enter a Samurai name');
      return;
    }

    try {
      await createSamurai(samuraiName);
      setSamuraiName('');
    } catch (error) {
      toast.error('Failed to create Samurai');
      console.error(error);
    }
  };

  const handleUpgradeStat = async (stat: number) => {
    try {
      await upgradeStat(stat);
    } catch (error) {
      toast.error('Failed to upgrade stat');
      console.error(error);
    }
  };

  // Use isConfirming for the loading state (transaction being mined)
  const isLoading = isPending || isConfirming;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">🗡️ Your Samurai</h2>

      {!samurai?.exists ? (
        <div className="space-y-4">
          <p className="text-white/80">
            Create your Samurai to begin your journey
          </p>
          <input
            type="text"
            value={samuraiName}
            onChange={(e) => setSamuraiName(e.target.value)}
            placeholder="Enter Samurai name"
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20"
          />
          <button
            onClick={handleCreateSamurai}
            disabled={isLoading || !samuraiName.trim()}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Creating...' : 'Create Samurai'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="text-xl font-bold text-white mb-2">
              {samurai.name}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-white/80">
              <p>Level: {samurai.level.toString()}</p>
              <p>Experience: {samurai.experience.toString()}</p>
              <p>Skill Points: {samurai.skillPoints.toString()}</p>
              <p>Battles Won: {samurai.battlesWon.toString()}</p>
              <p>Battles Lost: {samurai.battlesLost.toString()}</p>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Stats</h4>
            <div className="space-y-2">
            <div className="flex justify-between items-center">
                <span className="text-white/80">
                  Health: {samurai.health.toString()}
                </span>
                <button
                  onClick={() => handleUpgradeStat(3)}
                  disabled={isLoading || samurai.skillPoints === 0n}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                >
                  +10
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">
                  Strength: {samurai.strength.toString()}
                </span>
                <button
                  onClick={() => handleUpgradeStat(0)}
                  disabled={isLoading || samurai.skillPoints === 0n}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                >
                  +1
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">
                  Defense: {samurai.defense.toString()}
                </span>
                <button
                  onClick={() => handleUpgradeStat(1)}
                  disabled={isLoading || samurai.skillPoints === 0n}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                >
                  +1
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">
                  Speed: {samurai.speed.toString()}
                </span>
                <button
                  onClick={() => handleUpgradeStat(2)}
                  disabled={isLoading || samurai.skillPoints === 0n}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                >
                  +1
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
