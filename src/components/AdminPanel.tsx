'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { useContract, useContractRead } from '@/lib/contract';
import toast from 'react-hot-toast';

export default function AdminPanel() {
  const { address } = useAccount();
  const [fundAmount, setFundAmount] = useState('0.1');

  const { fundContract, isPending, isSuccess, error } = useContract();
  const { contractBalance, owner } = useContractRead();

  // Handle success/error messages with useEffect
  useEffect(() => {
    if (isSuccess) {
      toast.success('Contract funded successfully!');
      setFundAmount('0.1');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(`Transaction failed: ${error.message}`);
    }
  }, [error]);

  const handleFundContract = async () => {
    if (!address) {
      toast.error('Please connect your wallet first');
      return;
    }

    const amount = parseFloat(fundAmount);
    if (amount <= 0) {
      toast.error('Please enter a valid amount');
      return;
    }

    try {
      await fundContract(parseEther(fundAmount));
    } catch (error) {
      console.error('Fund contract error:', error);
      toast.error('Failed to fund contract');
    }
  };

  // Check if current user is the contract owner
  const isOwner = owner && address && owner.toLowerCase() === address.toLowerCase();

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-4">🔧 Admin Panel</h2>

      {!isOwner ? (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
          <p className="text-red-300 text-center">
            Access denied. Only the contract owner can access this panel.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Contract Balance */}
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Contract Balance</h4>
            <p className="text-2xl font-bold text-green-400">
              {contractBalance} RON
            </p>
            <p className="text-white/60 text-sm mt-1">
              Available for battle rewards
            </p>
          </div>

          {/* Fund Contract */}
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="text-lg font-bold text-white mb-2">Fund Contract</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  Amount (RON)
                </label>
                <input
                  type="number"
                  value={fundAmount}
                  onChange={(e) => setFundAmount(e.target.value)}
                  min="0.01"
                  step="0.01"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/20"
                />
              </div>
              <button
                onClick={handleFundContract}
                disabled={isPending || parseFloat(fundAmount) <= 0}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              >
                {isPending ? 'Funding...' : 'Fund Contract'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}