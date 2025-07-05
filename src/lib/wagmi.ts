'use client';

import { createConfig, http } from 'wagmi';
import { ronin, saigon } from 'wagmi/chains';

// Create localhost chain configuration
const localhost = {
  id: 31337,
  name: 'Hardhat Local',
  network: 'localhost',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] },
  },
} as const;

// Create wagmi config
export const config = createConfig({
  chains: [localhost, ronin, saigon],
  transports: {
    [localhost.id]: http(),
    [ronin.id]: http(),
    [saigon.id]: http(),
  },
});

export { ronin, saigon };
