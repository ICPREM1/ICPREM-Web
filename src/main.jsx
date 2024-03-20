import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
