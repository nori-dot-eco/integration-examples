'use client';

import { formatUnits } from 'viem';
import { useNetwork } from 'wagmi';

import { useRemovalContractRead } from '../hooks/use-removal-contract.js';

export const MarketInfo = () => {
  const { chain } = useNetwork();
  const { data } = useRemovalContractRead({
    functionName: 'getMarketBalance',
    chainId: chain?.id ?? 80_001,
  });

  return (
    <>
      NRTs available in Nori's market:
      {data === undefined
        ? ' Please Connect your wallet first.'
        : ` ${Number(formatUnits(data, 18)).toLocaleString()}`}
    </>
  );
};
