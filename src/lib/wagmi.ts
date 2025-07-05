'use client';

import { createConfig, http } from 'wagmi';
import { ronin, saigon } from 'wagmi/chains';

// Create wagmi config
export const config = createConfig({
  chains: [ronin, saigon],
  transports: {
    [ronin.id]: http(),
    [saigon.id]: http(),
  },
});

export { ronin, saigon };
