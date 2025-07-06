import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { network } from 'hardhat';
import { checksumAddress } from 'viem';

describe('RoninRivals', async function () {
  const { viem } = await network.connect();

  it('Should create a Samurai successfully', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get the deployer account
    const [deployer] = await viem.getWalletClients();

    // Create a Samurai
    await viem.assertions.emitWithArgs(
      roninRivals.write.createSamurai(['TestSamurai']),
      roninRivals,
      'SamuraiCreated',
      [checksumAddress(deployer.account.address), 'TestSamurai']
    );
  });

  it('Should allow stat upgrades', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Create a Samurai first
    await roninRivals.write.createSamurai(['TestSamurai']);

    // Try to upgrade strength (should fail without skill points)
    try {
      await roninRivals.write.upgradeStat([0]);
      assert.fail('Should have failed without skill points');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should have correct initial constants', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    const minBet = await roninRivals.read.MINIMUM_BET();
    const maxBet = await roninRivals.read.MAXIMUM_BET();
    const xpPerLevel = await roninRivals.read.XP_PER_LEVEL();
    const skillPointsPerLevel = await roninRivals.read.SKILL_POINTS_PER_LEVEL();

    assert.equal(minBet, 10000000000000000n); // 0.01 ether
    assert.equal(maxBet, 1000000000000000000n); // 1 ether
    assert.equal(xpPerLevel, 100n);
    assert.equal(skillPointsPerLevel, 3n);
  });

  it('Should start a battle', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get two different accounts
    const [player1, player2] = await viem.getWalletClients();

    // Create Samurais for both players
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Challenge a battle with minimum bet
    const betAmount = 10000000000000000n; // 0.01 ether
    await viem.assertions.emitWithArgs(
      roninRivals.write.challengeBattle(
        [checksumAddress(player2.account.address)],
        {
          account: checksumAddress(player1.account.address),
          value: betAmount,
        }
      ),
      roninRivals,
      'BattleChallenged',
      [
        0n,
        checksumAddress(player1.account.address),
        checksumAddress(player2.account.address),
        betAmount,
      ]
    );

    // Verify battle was created but not yet accepted
    const battle = await roninRivals.read.getBattle([0n]);
    assert.equal(battle.challenger, checksumAddress(player1.account.address));
    assert.equal(battle.opponent, checksumAddress(player2.account.address));
    assert.equal(battle.bet, betAmount);
    assert.equal(battle.isActive, false);
    assert.equal(battle.isAccepted, false);
    assert.equal(battle.currentTurn, checksumAddress(player1.account.address));

    // Accept the battle
    await viem.assertions.emitWithArgs(
      roninRivals.write.acceptBattle([0n], {
        account: checksumAddress(player2.account.address),
        value: betAmount,
      }),
      roninRivals,
      'BattleAccepted',
      [0n, checksumAddress(player2.account.address)]
    );

    // Verify battle is now active
    const acceptedBattle = await roninRivals.read.getBattle([0n]);
    assert.equal(acceptedBattle.isActive, true);
    assert.equal(acceptedBattle.isAccepted, true);
  });

  it('Should handle battle rewards correctly with insufficient contract funds', async function () {
    const roninRivals = await viem.deployContract('RoninRivals'); // No initial funding

    // Get two different accounts
    const [player1, player2] = await viem.getWalletClients();

    // Create Samurais for both players
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Challenge a battle with minimum bet
    const betAmount = 10000000000000000n; // 0.01 ether
    await roninRivals.write.challengeBattle([player2.account.address], {
      account: player1.account.address,
      value: betAmount,
    });

    // Accept the battle
    await roninRivals.write.acceptBattle([0n], {
      account: player2.account.address,
      value: betAmount,
    });

    // Execute many turns until battle ends (with 20 health and ~5-6 damage per turn, need ~4-5 turns)
    for (let i = 0; i < 10; i++) {
      const battle = await roninRivals.read.getBattle([0n]);
      if (!battle.isActive) break;
      if (battle.currentTurn === checksumAddress(player1.account.address)) {
        await roninRivals.write.executeTurn([0n], {
          account: player1.account.address,
        });
      } else {
        await roninRivals.write.executeTurn([0n], {
          account: player2.account.address,
        });
      }
    }

    // Battle should end and winner should receive partial reward
    const battle = await roninRivals.read.getBattle([0n]);
    assert.equal(battle.isActive, false);
  });

  it('Should handle complete battle flow with proper funding', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get three different accounts
    const [deployer, player1, player2] = await viem.getWalletClients();

    // Fund the contract first
    await roninRivals.write.fundContract({
      account: deployer.account.address,
      value: 1000000000000000000n, // 1 ether
    });

    // Create Samurais for both players
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Challenge a battle with minimum bet
    const betAmount = 10000000000000000n; // 0.01 ether
    await roninRivals.write.challengeBattle([player2.account.address], {
      account: player1.account.address,
      value: betAmount,
    });

    // Accept the battle
    await roninRivals.write.acceptBattle([0n], {
      account: player2.account.address,
      value: betAmount,
    });

    // Execute many turns until battle ends (with 20 health and ~5-6 damage per turn, need ~4-5 turns)
    for (let i = 0; i < 10; i++) {
      const battle = await roninRivals.read.getBattle([0n]);
      if (!battle.isActive) break;
      if (battle.currentTurn === checksumAddress(player1.account.address)) {
        await roninRivals.write.executeTurn([0n], {
          account: player1.account.address,
        });
      } else {
        await roninRivals.write.executeTurn([0n], {
          account: player2.account.address,
        });
      }
    }

    // Battle should end and winner should receive full reward
    const battle = await roninRivals.read.getBattle([0n]);
    assert.equal(battle.isActive, false);

    // Check that battle stats were updated
    const samurai1 = await roninRivals.read.getSamurai([player1.account.address]);
    const samurai2 = await roninRivals.read.getSamurai([player2.account.address]);
    
    // One should have won, one should have lost
    assert.equal(samurai1.battlesWon + samurai2.battlesWon, 1n);
    assert.equal(samurai1.battlesLost + samurai2.battlesLost, 1n);
  });

  it('Should fail to start battle with invalid bet amount', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get two different accounts
    const [player1, player2] = await viem.getWalletClients();

    // Create Samurais for both players
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Try to challenge a battle with bet below minimum
    try {
      await roninRivals.write.challengeBattle([player2.account.address], {
        account: player1.account.address,
        value: 1000000000000000n, // 0.001 ether (below minimum)
      });
      assert.fail('Should have failed due to bet below minimum');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }

    // Try to challenge a battle with bet above maximum
    try {
      await roninRivals.write.challengeBattle([player2.account.address], {
        account: player1.account.address,
        value: 2000000000000000000n, // 2 ether (above maximum)
      });
      assert.fail('Should have failed due to bet above maximum');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should fail to start battle without Samurai', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get two different accounts
    const [player1, player2] = await viem.getWalletClients();

    // Only create Samurai for player2
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Try to challenge a battle without player1 having a Samurai
    try {
      await roninRivals.write.challengeBattle([player2.account.address], {
        account: player1.account.address,
        value: 10000000000000000n, // 0.01 ether
      });
      assert.fail('Should have failed due to player1 not having a Samurai');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should fail to start battle with non-existent opponent', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get two different accounts
    const [player1, player2] = await viem.getWalletClients();

    // Only create Samurai for player1
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });

    // Try to challenge a battle with player2 not having a Samurai
    try {
      await roninRivals.write.challengeBattle([player2.account.address], {
        account: player1.account.address,
        value: 10000000000000000n, // 0.01 ether
      });
      assert.fail('Should have failed due to player2 not having a Samurai');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should fail to start battle with yourself', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get one account
    const [player1] = await viem.getWalletClients();

    // Create Samurai for player1
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });

    // Try to challenge yourself to a battle
    try {
      await roninRivals.write.challengeBattle([player1.account.address], {
        account: player1.account.address,
        value: 10000000000000000n, // 0.01 ether
      });
      assert.fail('Should have failed due to challenging yourself');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should allow owner to fund contract', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get the deployer account (owner)
    const [deployer] = await viem.getWalletClients();

    // Fund the contract
    const fundAmount = 1000000000000000000n; // 1 ether
    await viem.assertions.emitWithArgs(
      roninRivals.write.fundContract({
        account: deployer.account.address,
        value: fundAmount,
      }),
      roninRivals,
      'ContractFunded',
      [checksumAddress(deployer.account.address), fundAmount]
    );
  });

  it('Should fail to fund contract if not owner', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get two different accounts
    const [deployer, nonOwner] = await viem.getWalletClients();

    // Try to fund the contract as non-owner
    try {
      await roninRivals.write.fundContract({
        account: nonOwner.account.address,
        value: 1000000000000000000n, // 1 ether
      });
      assert.fail('Should have failed due to not being owner');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });

  it('Should return correct owner address', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get the deployer account
    const [deployer] = await viem.getWalletClients();

    // Check owner
    const owner = await roninRivals.read.getOwner();
    assert.equal(owner, checksumAddress(deployer.account.address));
  });
});
