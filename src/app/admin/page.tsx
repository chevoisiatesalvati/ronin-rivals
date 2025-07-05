'use client';

import { useAccount } from 'wagmi';
import TantoConnect from '@/components/TantoConnect';
import AdminPanel from '@/components/AdminPanel';
import Link from 'next/link';

export default function AdminPage() {
  const { address, isConnected } = useAccount();

  if (!isConnected) {
    return <TantoConnect />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <TantoConnect />
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
          >
            ← Back to Game
          </Link>
        </div>

        <AdminPanel />
      </div>
    </div>
  );
} 