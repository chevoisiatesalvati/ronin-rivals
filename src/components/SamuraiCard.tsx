'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContract, useContractRead } from '@/lib/contract';
import toast from 'react-hot-toast';

export default function SamuraiCard() {
  const [samuraiName, setSamuraiName] = useState('');
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [previousLevel, setPreviousLevel] = useState<bigint | null>(null);
  const [confettiParticles, setConfettiParticles] = useState<Array<{
    id: string;
    x: number;
    delay: number;
    duration: number;
    rotation: number;
  }>>([]);

  const { createSamurai, upgradeStat, isPending, isConfirming, isSuccess, error, hash } =
    useContract();
  const { samurai } = useContractRead(hash);

  // Check for level up
  useEffect(() => {
    if (samurai && previousLevel !== null && samurai.level > previousLevel) {
      setShowLevelUp(true);
      triggerConfetti();
      toast.success(`🎉 Level Up! Your Samurai is now level ${samurai.level.toString()}!`);
      
      // Hide the animation after 3 seconds
      setTimeout(() => {
        setShowLevelUp(false);
        setConfettiParticles([]);
      }, 3000);
    }
    if (samurai) {
      setPreviousLevel(samurai.level);
    }
  }, [samurai?.level, previousLevel]);

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

  const triggerConfetti = () => {
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        id: `confetti-${Date.now()}-${i}`,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
      });
    }
    setConfettiParticles(particles);
  };

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
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 relative overflow-hidden">
      {/* Confetti Container */}
      <AnimatePresence>
        {confettiParticles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x + '%',
              y: -10,
              rotate: particle.rotation,
              opacity: 0,
            }}
            animate={{
              x: particle.x + '%',
              y: 100, // Final position off-screen
              rotate: particle.rotation + 360,
              opacity: 0,
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              ease: 'linear',
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          />
        ))}
      </AnimatePresence>
      
      {/* Level Up Overlay */}
      {showLevelUp && (
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm z-20 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <div className="text-2xl font-bold text-white mb-2 animate-pulse">LEVEL UP!</div>
            <div className="text-lg text-white/80">Your Samurai is now level {samurai?.level.toString()}!</div>
          </div>
        </div>
      )}

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
            <div className="grid grid-cols-2 gap-2 text-sm text-white/80 mb-3">
              <p>Level: {samurai.level.toString()}</p>
              <p>Skill Points: {samurai.skillPoints.toString()}</p>
              <p>Battles Won: {samurai.battlesWon.toString()}</p>
              <p>Battles Lost: {samurai.battlesLost.toString()}</p>
            </div>
            
            {/* Experience Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-white/80">
                <span>Experience: {samurai.experience.toString()}</span>
                <span>{samurai.experience.toString()}/100 XP to next level</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-red-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((Number(samurai.experience) / 100) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Stats</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/80">
                  Strength: {samurai.strength.toString()}
                </span>
                <button
                  onClick={() => handleUpgradeStat(0)}
                  disabled={isLoading || samurai.skillPoints === 0n}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm disabled:opacity-50"
                >
                  +2
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
