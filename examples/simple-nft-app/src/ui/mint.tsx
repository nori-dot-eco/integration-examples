'use client';

import { useAccount } from 'wagmi';

export const Mint = () => {
  const { isConnected } = useAccount();

  return (
    <button disabled={true || !isConnected}>Mint Composed NFT (WIP)</button>
  );
};
