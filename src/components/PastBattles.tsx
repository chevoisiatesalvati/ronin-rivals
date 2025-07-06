import { useAccount } from 'wagmi';
import { formatEther } from 'viem';
import { usePastBattles } from '@/lib/contract';
import { Battle } from '@/types/game';

interface PastBattlesProps {
  connectedAddress: `0x${string}`;
}

export default function PastBattles({ connectedAddress }: PastBattlesProps) {
  const { address } = useAccount();
  const { pastBattles, isLoading } = usePastBattles();

  if (isLoading) {
    return (
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Past Battles</h3>
        <div className="text-center text-white/60">Loading past battles...</div>
      </div>
    );
  }

  if (!pastBattles || pastBattles.length === 0) {
    return (
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-bold text-white mb-4">Past Battles</h3>
        <div className="text-center text-white/60">
          No past battles found. Start challenging other players to build your battle history!
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 rounded-lg p-6">
      <h3 className="text-lg font-bold text-white mb-4">Past Battles</h3>
      <div className="space-y-3">
        {pastBattles.map(({ battleId, battle }: { battleId: bigint; battle: Battle | undefined }) => {
          if (!battle) return null;
          
          const isChallenger = battle.challenger === address;
          const isOpponent = battle.opponent === address;
          const challengerHealth = battle.challengerHealth;
          const opponentHealth = battle.opponentHealth;
          
          // Determine winner and loser
          const challengerWon = challengerHealth > 0;
          const opponentWon = opponentHealth > 0;
          
          // Determine if current player won
          const playerWon = (isChallenger && challengerWon) || (isOpponent && opponentWon);
          const playerLost = (isChallenger && opponentWon) || (isOpponent && challengerWon);
          
          // Calculate winnings (both players paid the bet, so winner gets 2x bet)
          const winnings = battle.bet * 2n;
          
          return (
            <div key={battleId.toString()} className="bg-white/10 rounded-lg p-4 border border-white/20">
              <div className="flex justify-between items-start mb-3">
                <h5 className="text-md font-bold text-white">Battle #{battleId.toString()}</h5>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    playerWon ? 'bg-green-600/20 text-green-400 border border-green-600/30' :
                    playerLost ? 'bg-red-600/20 text-red-400 border border-red-600/30' :
                    'bg-gray-600/20 text-gray-400 border border-gray-600/30'
                  }`}>
                    {playerWon ? 'WIN' : playerLost ? 'LOSS' : 'DRAW'}
                  </span>
                  {playerWon && (
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 border border-yellow-600/30 rounded text-xs font-medium">
                      +{formatEther(winnings)} RON
                    </span>
                  )}
                </div>
              </div>
              
              {/* Battle Participants */}
              <div className="grid grid-cols-2 gap-4 text-sm text-white/80 mb-3">
                <div>
                  <p className="font-semibold text-white">
                    Challenger: {battle.challenger.slice(0, 6)}...{battle.challenger.slice(-4)}
                  </p>
                  <p>Final Health: {challengerHealth.toString()}</p>
                  <p className={challengerWon ? 'text-green-400 font-medium' : 'text-red-400 font-medium'}>
                    {challengerWon ? 'Winner' : 'Loser'}
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-white">
                    Opponent: {battle.opponent.slice(0, 6)}...{battle.opponent.slice(-4)}
                  </p>
                  <p>Final Health: {opponentHealth.toString()}</p>
                  <p className={opponentWon ? 'text-green-400 font-medium' : 'text-red-400 font-medium'}>
                    {opponentWon ? 'Winner' : 'Loser'}
                  </p>
                </div>
              </div>

              {/* Battle Details */}
              <div className="bg-white/10 rounded p-3">
                <div className="grid grid-cols-3 gap-2 text-xs text-white/80">
                  <p>Turn Count: {battle.turnCount.toString()}</p>
                  <p>Bet Amount: {formatEther(battle.bet)} RON</p>
                  <p>Your Role: {isChallenger ? 'Challenger' : 'Opponent'}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 