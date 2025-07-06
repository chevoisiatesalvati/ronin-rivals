'use client';

import { useState } from 'react';
import BattleArena from './BattleArena';
import ActiveBattles from './ActiveBattles';
import PastBattles from './PastBattles';

export default function BattleTabs({ connectedAddress }: { connectedAddress: `0x${string}` }) {
  const [activeTab, setActiveTab] = useState('arena');

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">⚔️ Battle System</h2>
      
      <div className="space-y-4">
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-white/10 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('arena')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'arena'
                ? 'bg-red-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            🏟️ Battle Arena
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'active'
                ? 'bg-red-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            ⚔️ Active Battles
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'past'
                ? 'bg-red-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            📜 Battle History
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'arena' && <BattleArena connectedAddress={connectedAddress} />}
          {activeTab === 'active' && <ActiveBattles connectedAddress={connectedAddress} />}
          {activeTab === 'past' && <PastBattles connectedAddress={connectedAddress} />}
        </div>
      </div>
    </div>
  );
} 