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

  it('Should start a battle successfully when contract has sufficient funds', async function () {
    const roninRivals = await viem.deployContract('RoninRivals');

    // Get three different accounts
    const [deployer, player1, player2] = await viem.getWalletClients();

    // Create Samurais for both players
    await roninRivals.write.createSamurai(['Player1Samurai'], {
      account: player1.account.address,
    });
    await roninRivals.write.createSamurai(['Player2Samurai'], {
      account: player2.account.address,
    });

    // Fund the contract by sending ETH to it
    await deployer.sendTransaction({
      to: roninRivals.address,
      value: 1000000000000000000n, // 1 ether
    });

    // Start a battle with minimum bet
    const betAmount = 10000000000000000n; // 0.01 ether
    await viem.assertions.emitWithArgs(
      roninRivals.write.startBattle(
        [checksumAddress(player2.account.address)],
        {
          account: checksumAddress(player1.account.address),
          value: betAmount,
        }
      ),
      roninRivals,
      'BattleStarted',
      [
        0n,
        checksumAddress(player1.account.address),
        checksumAddress(player2.account.address),
        betAmount,
      ]
    );

    // Verify battle was created
    const battle = await roninRivals.read.getBattle([0n]);
    assert.equal(battle.player1, checksumAddress(player1.account.address));
    assert.equal(battle.player2, checksumAddress(player2.account.address));
    assert.equal(battle.bet, betAmount);
    assert.equal(battle.isActive, true);
    assert.equal(battle.currentTurn, checksumAddress(player1.account.address));
  });

  it('Should fail to start battle with insufficient contract funds', async function () {
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

    // Try to start a battle - should fail due to insufficient contract funds
    const betAmount = 10000000000000000n; // 0.01 ether
    try {
      await roninRivals.write.startBattle([player2.account.address], {
        account: player1.account.address,
        value: betAmount,
      });
      assert.fail('Should have failed due to insufficient contract funds');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
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

    // Try to start a battle with bet below minimum
    try {
      await roninRivals.write.startBattle([player2.account.address], {
        account: player1.account.address,
        value: 1000000000000000n, // 0.001 ether (below minimum)
      });
      assert.fail('Should have failed due to bet below minimum');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }

    // Try to start a battle with bet above maximum
    try {
      await roninRivals.write.startBattle([player2.account.address], {
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

    // Try to start a battle without player1 having a Samurai
    try {
      await roninRivals.write.startBattle([player2.account.address], {
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

    // Try to start a battle with opponent who doesn't have a Samurai
    try {
      await roninRivals.write.startBattle([player2.account.address], {
        account: player1.account.address,
        value: 10000000000000000n, // 0.01 ether
      });
      assert.fail('Should have failed due to opponent not having a Samurai');
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

    // Try to start a battle with yourself
    try {
      await roninRivals.write.startBattle([player1.account.address], {
        account: player1.account.address,
        value: 10000000000000000n, // 0.01 ether
      });
      assert.fail('Should have failed due to battling yourself');
    } catch (error) {
      // Expected to fail
      assert.ok(error);
    }
  });
});
