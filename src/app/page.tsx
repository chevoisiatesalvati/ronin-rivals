'use client';

import { useAccount } from 'wagmi';
import TantoConnect from '@/components/TantoConnect';
import SamuraiCard from '@/components/SamuraiCard';
import BattleTabs from '@/components/BattleTabs';

export default function Home() {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return <TantoConnect />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-4">
      <div className="max-w-6xl mx-auto">
        <TantoConnect />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SamuraiCard />
          <BattleTabs connectedAddress={address as `0x${string}`} />
        </div>
      </div>
    </div>
  );
}
