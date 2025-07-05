# Ronin Rivals Deployment Guide

## Prerequisites

1. **Environment Setup**: Copy `env.example` to `.env` and fill in your values:

   ```bash
   cp env.example .env
   ```

2. **Required Environment Variables**:
   - `SAIGON_RPC_URL`: Saigon testnet RPC URL
   - `SAIGON_PRIVATE_KEY`: Your private key for deployment
   - `NEXT_PUBLIC_RONIN_WAYPOINT_CLIENT_ID`: Your Ronin Waypoint client ID

## Deployment Steps

### 1. Compile Contracts

```bash
npm run compile
```

### 2. Test Contracts (Optional)

```bash
npm run test
```

### 3. Deploy to Local Network (for testing)

```bash
npm run deploy
```

### 4. Deploy to Saigon Testnet

```bash
npm run deploy:saigon
```

## After Deployment

1. **Update Contract Address**: After successful deployment, update the contract address in `src/lib/contract.ts`:

   ```typescript
   setContractAddress('YOUR_DEPLOYED_CONTRACT_ADDRESS' as `0x${string}`);
   ```

2. **Get Ronin Waypoint Client ID**:

   - Apply for access at [Ronin Waypoint](https://waypoint.skymavis.com/)
   - Update `NEXT_PUBLIC_RONIN_WAYPOINT_CLIENT_ID` in your `.env` file

3. **Test the Application**:
   ```bash
   npm run dev
   ```

## Network Configuration

The project is configured for:

- **Saigon Testnet**: Chain ID 2021
- **Ronin Waypoint**: For wallet integration

## Troubleshooting

- **Compilation Errors**: Ensure Solidity version is compatible
- **Deployment Errors**: Check your private key and RPC URL
- **Frontend Errors**: Verify contract address is correctly set
