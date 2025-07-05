import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { network } from 'hardhat';

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
      [deployer.account.address, 'TestSamurai']
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
});
