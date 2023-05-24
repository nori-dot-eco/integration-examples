'use client';

import { formatUnits } from 'viem';
import { useAccount } from 'wagmi';

import { useUsdcContractRead } from '../hooks/use-usdc-contract.js';

export const UsdcInfo = () => {
  const { address } = useAccount();
  const { data } = useUsdcContractRead({
    functionName: 'balanceOf',
    ...(typeof address === 'string' && { args: [address] }),
  });

  return (
    <div>
      USDC Balance:
      {data === undefined
        ? ' Please Connect your wallet first.'
        : ` ${formatUnits(data, 6)}`}
    </div>
  );
};
