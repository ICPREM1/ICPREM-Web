import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
const Bitfinity = {
  id: 355113,
  name: 'Bitfinity EVM',
  iconUrl: 'https://docs.bitfinity.network/img/logo_dark.svg',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Bitfinity', symbol: 'BFT', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet.bitfinity.network'] },
  },
  blockExplorers: {
    default: { name: 'blockscout.com', url: 'https://explorer.bitfinity.network/' },
  },
  contracts: {
    multicall3: {
      address: '0x8209Ce8F61Ee19ef5CF47fB4f982944b312C9bC8',
      blockCreated: 459313,
    },
  },
};
const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [Bitfinity],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        <App />
        </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
)
