'use client';

import { formatUnits } from 'viem';
import { useAccount, useNetwork } from 'wagmi';

import { useUsdcContractRead } from '../hooks/use-usdc-contract.js';

export const UsdcInfo = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data } = useUsdcContractRead({
    functionName: 'balanceOf',
    chainId: chain?.id ?? 80_001,
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
