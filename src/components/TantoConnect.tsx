'use client';

import React, { useState, useEffect } from 'react';
import { TantoConnectButton } from '@sky-mavis/tanto-widget';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import toast from 'react-hot-toast';

export default function TantoConnect() {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });
  const { disconnect } = useDisconnect();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDisconnect = () => {
    disconnect();
    toast.success('Wallet disconnected');
  };

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            ⚔️ Ronin Rivals ⚔️
          </h1>
          <p className="text-white/80 mb-8">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            ⚔️ Ronin Rivals ⚔️
          </h1>
          <p className="text-white/80 mb-8">
            Connect your wallet to begin your Samurai journey
          </p>
          <TantoConnectButton
            onConnect={() => toast.success('Wallet connected successfully!')}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">⚔️ Ronin Rivals ⚔️</h1>
        <div className="text-right">
          <p className="text-white/80 text-sm">
            Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
          </p>
          <p className="text-white/80 text-sm">
            Balance: {balance ? (Number(balance.value) / 1e18).toFixed(4) : '0'}{' '}
            RON
          </p>
          <button
            onClick={handleDisconnect}
            className="text-red-300 hover:text-red-100 text-sm"
          >
            Disconnect
          </button>
        </div>
      </div>
    </div>
  );
}
