export interface Samurai {
  name: string;
  level: bigint;
  experience: bigint;
  skillPoints: bigint;
  strength: bigint;
  defense: bigint;
  speed: bigint;
  health: bigint;
  battlesWon: bigint;
  battlesLost: bigint;
  exists: boolean;
}

export interface Battle {
  player1: `0x${string}`;
  player2: `0x${string}`;
  bet: bigint;
  player1Health: bigint;
  player2Health: bigint;
  isActive: boolean;
  currentTurn: `0x${string}`;
  turnCount: bigint;
}
