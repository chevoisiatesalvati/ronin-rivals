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
  challenger: `0x${string}`;
  opponent: `0x${string}`;
  bet: bigint;
  challengerHealth: bigint;
  opponentHealth: bigint;
  isActive: boolean;
  isAccepted: boolean;
  currentTurn: `0x${string}`;
  turnCount: bigint;
}

export interface ActiveBattle {
  battleId: bigint;
  battle: Battle;
  isLoading?: boolean;
  error?: Error;
}
