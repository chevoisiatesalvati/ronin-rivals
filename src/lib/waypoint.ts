import { WaypointProvider } from '@sky-mavis/waypoint';
import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
  type Abi,
} from 'viem';
import { saigon } from 'viem/chains';

// Initialize Ronin Waypoint Provider
export const waypointProvider = WaypointProvider.create({
  // Replace with your actual client ID from Ronin Waypoint
  clientId:
    process.env.NEXT_PUBLIC_RONIN_WAYPOINT_CLIENT_ID ||
    '9b577a44-ce2f-44b2-a59d-dfcadfd1a93b',
  chainId: 2021, // Saigon testnet
  popupCloseDelay: 4000,
});

// Create viem clients for blockchain interactions
const publicClient = createPublicClient({
  chain: saigon,
  transport: http(),
});

const walletClient = createWalletClient({
  chain: saigon,
  transport: custom(waypointProvider),
});

// Wallet connection utilities
export const connectWallet = async () => {
  try {
    const result = await waypointProvider.connect();
    return result.address;
  } catch (error) {
    console.error('Failed to connect wallet:', error);
    throw error;
  }
};

export const disconnectWallet = () => {
  waypointProvider.disconnect();
};

export const getConnectedAddress = async (): Promise<string | null> => {
  try {
    const accounts = await walletClient.getAddresses();
    return accounts.length > 0 ? accounts[0] : null;
  } catch (error) {
    console.error('Failed to get connected address:', error);
    return null;
  }
};

export const getBalance = async (address: `0x${string}`): Promise<string> => {
  try {
    const balance = await publicClient.getBalance({ address });
    return balance.toString();
  } catch (error) {
    console.error('Failed to get balance:', error);
    throw error;
  }
};

// Sign message utility
export const signMessage = async (message: string): Promise<string> => {
  try {
    const accounts = await walletClient.getAddresses();
    if (!accounts.length) {
      throw new Error('No accounts connected');
    }

    const signature = await walletClient.signMessage({
      message,
      account: accounts[0],
    });

    return signature;
  } catch (error) {
    console.error('Failed to sign message:', error);
    throw error;
  }
};

// Write contract utility for smart contract interactions
export const writeContract = async (
  address: `0x${string}`,
  abi: Abi,
  functionName: string,
  args: unknown[] = []
): Promise<string> => {
  try {
    const accounts = await walletClient.getAddresses();
    if (!accounts.length) {
      throw new Error('No accounts connected');
    }

    const hash = await walletClient.writeContract({
      address,
      abi,
      functionName,
      args,
      account: accounts[0],
    });

    return hash;
  } catch (error) {
    console.error('Failed to write contract:', error);
    throw error;
  }
};

// Read contract utility for smart contract interactions
export const readContract = async (
  address: `0x${string}`,
  abi: Abi,
  functionName: string,
  args: unknown[] = []
): Promise<unknown> => {
  try {
    const result = await publicClient.readContract({
      address,
      abi,
      functionName,
      args,
    });

    return result;
  } catch (error) {
    console.error('Failed to read contract:', error);
    throw error;
  }
};
