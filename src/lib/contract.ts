import { formatEther } from 'viem';
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { useAccount } from 'wagmi';
import { Samurai, Battle, ActiveBattle } from '@/types/game';
import { CONTRACT_ADDRESS } from './config';

// Import the generated ABI from Hardhat compilation
import RoninRivalsArtifact from '../../artifacts/contracts/RoninRivals.sol/RoninRivals.json';

const CONTRACT_ABI = RoninRivalsArtifact.abi;

// Hook for contract interactions
export const useContract = () => {
  const { address } = useAccount();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const createSamurai = async (name: string) => {
    if (!address) throw new Error('Wallet not connected');

    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createSamurai',
      args: [name],
    });
  };

  const upgradeStat = async (stat: number) => {
    if (!address) throw new Error('Wallet not connected');

    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'upgradeStat',
      args: [stat],
    });
  };

  const challengeBattle = (opponent: `0x${string}`, betAmount: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const result = writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'challengeBattle',
        args: [opponent],
        value: betAmount,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  const acceptBattle = (battleId: bigint, betAmount: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    try {
      const result = writeContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'acceptBattle',
        args: [battleId],
        value: betAmount,
      });
      return result;
    } catch (error) {
      throw error;
    }
  };

  const executeTurn = async (battleId: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'executeTurn',
      args: [battleId],
    });
  };

  const fundContract = async (amount: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'fundContract',
      value: amount,
    });
  };

  return {
    createSamurai,
    upgradeStat,
    challengeBattle,
    acceptBattle,
    executeTurn,
    fundContract,
    isPending,
    isConfirming,
    isSuccess,
    error,
    hash,
  };
};

// Hook for reading contract data
export const useContractRead = (transactionHash?: `0x${string}`) => {
  const { address } = useAccount();

  const { data: samurai } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getSamurai',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
      refetchInterval: transactionHash ? 1000 : false, // Refetch every 1 second when transaction is pending
      refetchIntervalInBackground: false,
    },
  }) as { data: Samurai | undefined };

  const { data: battleIdCounter } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'battleIdCounter',
    query: {
      enabled: true,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  }) as { data: bigint | undefined };

  const { data: minimumBet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'MINIMUM_BET',
    query: {
      enabled: true,
    },
  }) as { data: bigint | undefined };

  const { data: maximumBet } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'MAXIMUM_BET',
    query: {
      enabled: true,
    },
  }) as { data: bigint | undefined };

  const { data: currentBattle } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args:
      battleIdCounter && battleIdCounter > 0n
        ? [battleIdCounter - 1n]
        : undefined,
    query: {
      enabled: !!battleIdCounter && battleIdCounter > 0n,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  }) as { data: Battle | undefined };

  const { data: contractBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balance',
    query: {
      enabled: true,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  }) as { data: bigint | undefined };

  const { data: owner } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getOwner',
    query: {
      enabled: true,
    },
  }) as { data: `0x${string}` | undefined };

  return {
    samurai,
    battleIdCounter,
    currentBattle,
    minimumBet: minimumBet ? formatEther(minimumBet) : '0',
    maximumBet: maximumBet ? formatEther(maximumBet) : '0',
    contractBalance: contractBalance ? formatEther(contractBalance) : '0',
    owner,
  };
};

// Helper function to get all active battles for a player
export const useActiveBattles = (transactionHash?: `0x${string}`) => {
  const { address } = useAccount();
  const { battleIdCounter } = useContractRead(transactionHash);
  
  // Create an array of battle IDs to fetch - use a fixed maximum to avoid conditional hooks
  const maxBattles = 10; // Reasonable maximum for active battles
  const battleIds: bigint[] = [];
  
  if (battleIdCounter && battleIdCounter > 0n) {
    const startIndex = Math.max(0, Number(battleIdCounter) - maxBattles);
    for (let i = startIndex; i < Number(battleIdCounter); i++) {
      battleIds.push(BigInt(i));
    }
  }

  // Always create the same number of hooks to maintain consistent order
  const battle0 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[0] !== undefined ? [battleIds[0]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 0 && battleIds[0] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle1 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[1] !== undefined ? [battleIds[1]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 1 && battleIds[1] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle2 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[2] !== undefined ? [battleIds[2]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 2 && battleIds[2] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle3 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[3] !== undefined ? [battleIds[3]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 3 && battleIds[3] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle4 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[4] !== undefined ? [battleIds[4]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 4 && battleIds[4] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle5 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[5] !== undefined ? [battleIds[5]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 5 && battleIds[5] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle6 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[6] !== undefined ? [battleIds[6]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 6 && battleIds[6] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle7 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[7] !== undefined ? [battleIds[7]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 7 && battleIds[7] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle8 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[8] !== undefined ? [battleIds[8]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 8 && battleIds[8] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle9 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[9] !== undefined ? [battleIds[9]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 9 && battleIds[9] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  // Combine all battle queries
  const battleQueries = [battle0, battle1, battle2, battle3, battle4, battle5, battle6, battle7, battle8, battle9];

  // Filter active battles where the current player is involved
  const activeBattles = battleQueries
    .map((query, index) => ({
      battleId: battleIds[index],
      battle: query.data as Battle | undefined,
      isLoading: query.isLoading,
      error: query.error,
    }))
    .filter(({ battleId, battle }) => 
      battleId !== undefined &&
      battle && 
      address && 
      (battle.challenger.toLowerCase() === address.toLowerCase() || 
       battle.opponent.toLowerCase() === address.toLowerCase()) &&
      (battle.isActive || !battle.isAccepted) // Include both active battles and pending challenges
    );

  return {
    activeBattles,
    isLoading: battleQueries.some(query => query.isLoading),
    error: battleQueries.find(query => query.error)?.error,
  };
};

// Helper function to get all past battles for a player
export const usePastBattles = (transactionHash?: `0x${string}`) => {
  const { address } = useAccount();
  const { battleIdCounter } = useContractRead(transactionHash);
  
  // Create an array of battle IDs to fetch - use a fixed maximum to avoid conditional hooks
  const maxBattles = 20; // Reasonable maximum for past battles
  const battleIds: bigint[] = [];
  
  if (battleIdCounter && battleIdCounter > 0n) {
    const startIndex = Math.max(0, Number(battleIdCounter) - maxBattles);
    for (let i = startIndex; i < Number(battleIdCounter); i++) {
      battleIds.push(BigInt(i));
    }
  }

  // Always create the same number of hooks to maintain consistent order
  const battle0 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[0] !== undefined ? [battleIds[0]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 0 && battleIds[0] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle1 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[1] !== undefined ? [battleIds[1]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 1 && battleIds[1] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle2 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[2] !== undefined ? [battleIds[2]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 2 && battleIds[2] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle3 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[3] !== undefined ? [battleIds[3]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 3 && battleIds[3] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle4 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[4] !== undefined ? [battleIds[4]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 4 && battleIds[4] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle5 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[5] !== undefined ? [battleIds[5]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 5 && battleIds[5] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle6 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[6] !== undefined ? [battleIds[6]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 6 && battleIds[6] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle7 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[7] !== undefined ? [battleIds[7]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 7 && battleIds[7] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle8 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[8] !== undefined ? [battleIds[8]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 8 && battleIds[8] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle9 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[9] !== undefined ? [battleIds[9]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 9 && battleIds[9] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle10 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[10] !== undefined ? [battleIds[10]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 10 && battleIds[10] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle11 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[11] !== undefined ? [battleIds[11]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 11 && battleIds[11] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle12 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[12] !== undefined ? [battleIds[12]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 12 && battleIds[12] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle13 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[13] !== undefined ? [battleIds[13]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 13 && battleIds[13] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle14 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[14] !== undefined ? [battleIds[14]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 14 && battleIds[14] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle15 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[15] !== undefined ? [battleIds[15]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 15 && battleIds[15] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle16 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[16] !== undefined ? [battleIds[16]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 16 && battleIds[16] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle17 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[17] !== undefined ? [battleIds[17]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 17 && battleIds[17] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle18 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[18] !== undefined ? [battleIds[18]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 18 && battleIds[18] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  const battle19 = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getBattle',
    args: battleIds[19] !== undefined ? [battleIds[19]] : undefined,
    query: {
      enabled: !!address && battleIds.length > 19 && battleIds[19] !== undefined,
      refetchInterval: transactionHash ? 1000 : false,
      refetchIntervalInBackground: false,
    },
  });

  // Combine all battle queries
  const battleQueries = [battle0, battle1, battle2, battle3, battle4, battle5, battle6, battle7, battle8, battle9, 
                        battle10, battle11, battle12, battle13, battle14, battle15, battle16, battle17, battle18, battle19];

  // Filter past battles where the current player is involved and battle is completed
  const pastBattles = battleQueries
    .map((query, index) => ({
      battleId: battleIds[index],
      battle: query.data as Battle | undefined,
      isLoading: query.isLoading,
      error: query.error,
    }))
    .filter(({ battleId, battle }) => 
      battleId !== undefined &&
      battle && 
      address && 
      (battle.challenger.toLowerCase() === address.toLowerCase() || 
       battle.opponent.toLowerCase() === address.toLowerCase()) &&
      !battle.isActive && battle.isAccepted // Only completed battles
    );

  return {
    pastBattles,
    isLoading: battleQueries.some(query => query.isLoading),
    error: battleQueries.find(query => query.error)?.error,
  };
};
