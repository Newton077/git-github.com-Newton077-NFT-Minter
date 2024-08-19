'use client';

import { createWeb3Modal } from '@web3modal/wagmi/react';
import { WagmiProvider, cookieToInitialState } from 'wagmi';
import { config, projectId } from '@/app/shared/wagmi-config';

if (!projectId) {
  console.error("Project ID is not defined. Please set NEXT_PUBLIC_CRYPTO_PROJECT_ID in your .env.local file.");
  throw new Error("Project ID is not defined");
}

const initialState = cookieToInitialState(config);

createWeb3Modal({
  wagmiConfig: config,
  projectId: projectId || '',
  enableAnalytics: true,
  enableOnramp: true,
});

export default function WalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      {children}
    </WagmiProvider>
  );
}
