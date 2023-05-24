'use client';

import { formatUnits } from 'viem';

import { useRemovalContractRead } from '../hooks/use-removal-contract.js';

export const MarketInfo = () => {
  const { data } = useRemovalContractRead({ functionName: 'getMarketBalance' });

  return (
    <>
      NRTs available in Nori's market:
      {data === undefined
        ? ' Please Connect your wallet first.'
        : ` ${Number(formatUnits(data, 18)).toLocaleString()}`}
    </>
  );
};
