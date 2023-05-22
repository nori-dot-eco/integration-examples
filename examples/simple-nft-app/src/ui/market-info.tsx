'use client';

import { formatUnits } from 'viem';

import { useRemovalContract } from '../hooks/use-removal-contract';

export const MarketInfo = () => {
  const { data } = useRemovalContract({ functionName: 'getMarketBalance' });

  return (
    <>
      NRTs available in Nori's market:
      {data === undefined
        ? ' Please Connect your wallet first.'
        : ` ${Number(formatUnits(data, 18)).toLocaleString()}`}
    </>
  );
};
