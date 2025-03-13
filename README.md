# Gasless Gossip Mobile

A StarkNet-powered messaging app that lets you chat and send tokens without gas fees.

## Features

- Message friends and groups with end-to-end encryption
- Send tokens within conversations
- Gasless transactions via StarkNet Layer 2
- React to messages, share media, and more

## Quick Start

### Prerequisites

- Node.js 16+
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your device or emulator

### Setup

1. Clone the repository
```bash
git clone https://github.com/yourusername/gasless-gossip-mobile.git
cd gasless-gossip-mobile
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npx expo start
```

4. Scan the QR code with Expo Go app or run on simulator

## Environment Setup

Create a `.env` file:
```
API_URL=https://api.gaslessgossip.com
STARKNET_NETWORK=goerli
```

## Tech Stack

- React Native with Expo
- TypeScript
- Expo Router for navigation
- Redux Toolkit for state management
- StarkNet.js for blockchain interactions
- Socket.io Client for real-time messaging

## Project Structure

```
src/
├── app/           # Expo Router screens
├── components/    # Reusable UI components
├── services/      # API and blockchain services
├── store/         # Redux state management
├── hooks/         # Custom React hooks
└── utils/         # Helper functions
```


## License

MIT