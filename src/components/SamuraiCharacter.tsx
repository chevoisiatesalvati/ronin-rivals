'use client';

import { motion } from 'framer-motion';
import samurai1 from '@/assets/images/samurai/samurai-1.png';
import samurai2 from '@/assets/images/samurai/samurai-2.png';

interface SamuraiCharacterProps {
  level: bigint;
  strength: bigint;
  defense: bigint;
  speed: bigint;
  health: bigint;
  className?: string;
}

export default function SamuraiCharacter({
  level,
  strength,
  defense,
  speed,
  health,
  className = ''
}: SamuraiCharacterProps) {
  // Select image based on level
  const getSamuraiImage = () => {
    const levelNum = Number(level);
    
    if (levelNum >= 2) return samurai2;
    return samurai1;
  };

  const selectedImage = getSamuraiImage();
  
  // Determine size based on health
  const sizeMultiplier = Math.min(1 + (Number(health) - 10) / 20, 1.3);

  return (
    <div
      className={`relative ${className}`}
      style={{ transform: `scale(${sizeMultiplier})` }}
    >
      {/* Floating animation container */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/20 to-transparent rounded-full blur-xl" />
        
        {/* Main samurai image container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <img
            src={selectedImage.src}
            alt={`Level ${level} Samurai`}
            className="w-full h-full object-contain rounded-full shadow-2xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
          />
        </div>
        
        {/* Level indicator */}
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border border-white shadow-lg z-20">
          {level.toString()}
        </div>
      </motion.div>
    </div>
  );
} 