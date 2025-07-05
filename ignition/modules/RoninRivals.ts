import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

export default buildModule('RoninRivalsModule', (m) => {
  const roninRivals = m.contract('RoninRivals');

  return { roninRivals };
});
