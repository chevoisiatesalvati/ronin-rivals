import { formatEther } from 'viem';
import {
  useWriteContract,
  useReadContract,
  useWaitForTransactionReceipt,
} from 'wagmi';
import { useAccount } from 'wagmi';
import { Samurai, Battle } from '@/types/game';
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

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createSamurai',
      args: [name],
    });
  };

  const upgradeStat = async (stat: number) => {
    if (!address) throw new Error('Wallet not connected');

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'upgradeStat',
      args: [stat],
    });
  };

  const startBattle = async (opponent: `0x${string}`, betAmount: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'startBattle',
      args: [opponent],
      value: betAmount,
    });
  };

  const executeTurn = async (battleId: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'executeTurn',
      args: [battleId],
    });
  };

  const fundContract = async (amount: bigint) => {
    if (!address) throw new Error('Wallet not connected');

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'fundContract',
      value: amount,
    });
  };

  return {
    createSamurai,
    upgradeStat,
    startBattle,
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
export const useContractRead = () => {
  const { address } = useAccount();

  const { data: samurai } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getSamurai',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  }) as { data: Samurai | undefined };

  const { data: battleIdCounter } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'battleIdCounter',
    query: {
      enabled: true,
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
    },
  }) as { data: Battle | undefined };

  const { data: contractBalance } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'balance',
    query: {
      enabled: true,
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
