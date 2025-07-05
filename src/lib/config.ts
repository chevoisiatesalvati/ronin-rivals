// Contract configuration
import deployedAddresses from '../../ignition/deployments/chain-2021/deployed_addresses.json';

// Priority order: Environment variable > Deployed address > Fallback
export const CONTRACT_ADDRESS =
  (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as `0x${string}`) ||
  (deployedAddresses['RoninRivalsModule#RoninRivals'] as `0x${string}`);

if (!CONTRACT_ADDRESS) {
  throw new Error('Contract address not found');
}

// Network configuration
export const NETWORK_CONFIG = {
  chainId: 2021, // Saigon testnet
  name: 'Saigon Testnet',
};
