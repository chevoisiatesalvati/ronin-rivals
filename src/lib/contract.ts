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
import RoninRivalsArtifact from '../../artifacts/contracts/Game.sol/RoninRivals.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CONTRACT_ABI = RoninRivalsArtifact.abi as any;

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

  const startBattle = async (opponent: `0x${string}`) => {
    if (!address) throw new Error('Wallet not connected');

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'startBattle',
      args: [opponent],
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

  return {
    createSamurai,
    upgradeStat,
    startBattle,
    executeTurn,
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

  return {
    samurai,
    battleIdCounter,
    currentBattle,
    minimumBet: minimumBet ? formatEther(minimumBet) : '0',
    maximumBet: maximumBet ? formatEther(maximumBet) : '0',
  };
};
