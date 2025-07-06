'use client';

import { useState } from 'react';
import BattleArena from './BattleArena';
import ActiveBattles from './ActiveBattles';

interface BattleTabsProps {
  connectedAddress: string | null;
}

type TabType = 'arena' | 'battles';

export default function BattleTabs({ connectedAddress }: BattleTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('arena');

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">⚔️ Battle System</h2>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-white/5 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('arena')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === 'arena'
              ? 'bg-red-600 text-white'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          🏟️ Battle Arena
        </button>
        <button
          onClick={() => setActiveTab('battles')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
            activeTab === 'battles'
              ? 'bg-red-600 text-white'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          ⚔️ Active Battles
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'arena' ? (
          <BattleArena connectedAddress={connectedAddress} />
        ) : (
          <ActiveBattles connectedAddress={connectedAddress} />
        )}
      </div>
    </div>
  );
} 