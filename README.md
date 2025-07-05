# Ronin Rivals

A turn-based Samurai battle game built with Next.js, Hardhat 3, and the Ronin Waypoint SDK.

## Project Structure

The project has been organized into modular components for better maintainability:

```
src/
├── app/
│   └── page.tsx                 # Main page component
├── components/
│   ├── WalletConnect.tsx        # Wallet connection and header
│   ├── SamuraiCard.tsx          # Samurai character management
│   ├── BattleArena.tsx          # Battle system interface
│   └── MessageDisplay.tsx       # Reusable message component
├── lib/
│   ├── waypoint.ts              # Ronin Waypoint integration
│   └── contract.ts              # Smart contract interactions
└── types/
    └── game.ts                  # Shared TypeScript interfaces
```

## Components Overview

### WalletConnect.tsx

- Handles wallet connection/disconnection
- Displays connected address and balance
- Shows connection status and messages
- Renders the main header when connected

### SamuraiCard.tsx

- Manages Samurai character creation
- Displays character stats and information
- Handles stat upgrades using skill points
- Shows battle history (wins/losses)

### BattleArena.tsx

- Interface for starting new battles
- Manages active battle state
- Handles turn execution
- Displays battle progress and health

### MessageDisplay.tsx

- Reusable component for displaying user messages
- Handles success/error notifications
- Consistent styling across the app

## Key Features

- **Modular Architecture**: Each component has a single responsibility
- **Type Safety**: Shared TypeScript interfaces in `types/game.ts`
- **State Management**: Props-based communication between components
- **Error Handling**: Consistent error handling across all components
- **Responsive Design**: Mobile-friendly layout with Tailwind CSS

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Deploy the smart contract:

   ```bash
   npx hardhat ignition deploy ignition/modules/RoninRivals.ts
   ```

3. Update the contract address in `src/app/page.tsx`

4. Start the development server:
   ```bash
   npm run dev
   ```

## Component Communication

The main page (`page.tsx`) acts as a coordinator:

- Manages global state (connected address, messages)
- Passes props to child components
- Handles callbacks from child components

Each component is self-contained and communicates through props and callbacks, making the codebase more maintainable and testable.

## Smart Contract Integration

The `lib/contract.ts` file provides a clean interface for all smart contract interactions:

- Read operations using viem's public client
- Write operations using Ronin Waypoint provider
- Proper error handling and type safety

## Ronin Waypoint Integration

The `lib/waypoint.ts` file handles:

- Wallet connection via Ronin Waypoint
- Transaction signing and sending
- Balance queries
- Connection state management
