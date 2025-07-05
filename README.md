# Ronin Rivals

A turn-based Samurai battle game built with Next.js, Hardhat 3, and the Ronin Tanto Widget.

## Project Structure

The project has been organized into modular components for better maintainability:

```
src/
├── app/
│   └── page.tsx                 # Main page component
├── components/
│   ├── TantoConnect.tsx         # Wallet connection using Tanto Widget
│   ├── SamuraiCard.tsx          # Samurai character management
│   ├── BattleArena.tsx          # Battle system interface
│   └── ClientProviders.tsx      # Wagmi and Tanto providers
├── lib/
│   ├── config.ts                # Contract and network configuration
│   ├── contract.ts              # Smart contract interactions
│   ├── wagmi.ts                 # Wagmi configuration
│   └── waypoint.ts              # Ronin Waypoint integration (legacy)
└── types/
    └── game.ts                  # Shared TypeScript interfaces
```

## Components Overview

### TantoConnect.tsx

- Handles wallet connection/disconnection using Tanto Widget
- Displays connected address and balance
- Shows connection status with toast notifications
- Renders the main header when connected

### SamuraiCard.tsx

- Manages Samurai character creation
- Displays character stats and information
- Handles stat upgrades using skill points
- Shows battle history (wins/losses)
- Uses toast notifications for user feedback

### BattleArena.tsx

- Interface for starting new battles
- Manages active battle state
- Handles turn execution
- Displays battle progress and health
- Uses toast notifications for user feedback

### ClientProviders.tsx

- Provides Wagmi, React Query, and Tanto providers
- Includes toast notifications with react-hot-toast
- Handles client-side rendering to avoid hydration issues

## Key Features

- **Modular Architecture**: Each component has a single responsibility
- **Type Safety**: Shared TypeScript interfaces in `types/game.ts`
- **Modern Wallet Integration**: Uses Tanto Widget for seamless wallet connection
- **Toast Notifications**: User-friendly feedback with react-hot-toast
- **Error Handling**: Consistent error handling across all components
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS
- **Hardhat 3**: Latest Hardhat version with Ignition deployment system

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up your private key for deployment:

   ```bash
   npx hardhat keystore set SAIGON_PRIVATE_KEY
   ```

3. Deploy the smart contract to Saigon testnet:

   ```bash
   npx hardhat ignition deploy ignition/modules/RoninRivals.ts --network saigon
   ```

4. Update the contract address in `src/lib/config.ts` with the deployed address

5. Start the development server:
   ```bash
   npm run dev
   ```

## Smart Contract Integration

The `lib/contract.ts` file provides a clean interface for all smart contract interactions:

- Uses Wagmi hooks for contract interactions
- Read operations using `useReadContract`
- Write operations using `useWriteContract`
- Proper error handling and type safety

## Wallet Integration

The project uses the Ronin Tanto Widget for wallet connection:

- Seamless integration with Ronin wallets
- Automatic network detection and switching
- Built-in transaction signing and sending
- Balance queries and connection state management

## Toast Notifications

The app uses `react-hot-toast` for user feedback:

- Success notifications for successful transactions
- Error notifications for failed operations
- Loading states for pending transactions
- Consistent styling across the application

## Configuration

The `lib/config.ts` file contains:

- Contract address configuration
- Network settings
- Other app-wide constants

## Deployment

The project uses Hardhat 3 with Ignition for deployment:

- Declarative deployment system
- Automatic transaction management
- Support for multiple networks
- Secure private key management with keystore
