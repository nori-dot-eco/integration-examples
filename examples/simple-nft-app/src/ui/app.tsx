'use client';

import { WagmiConfig } from 'wagmi';
import React from 'react';

import { config } from '../config/config.js';

export const App = ({ children }: { children: React.ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
