'use client';

import type { Address } from 'wagmi';
import { useNetwork, useAccount, useSignTypedData } from 'wagmi';
import { splitSignature, hexlify, hexZeroPad } from 'ethers/lib/utils.js';
import { parseUnits } from 'viem';

import { marketAddress, usdcAddress } from '../config/contracts.js';
import {
  useMarketContractRead,
  useMarketContractWrite,
} from '../hooks/use-market-contract.js';
import { useUsdcContractRead } from '../hooks/use-usdc-contract.js';

const deadline = BigInt(1_684_721_912_285);

export const Purchase = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { signTypedDataAsync } = useSignTypedData();
  const { data: nonce } = useUsdcContractRead({
    functionName: 'nonces',
    args: [address!],
    chainId: chain?.id ?? 80_001,
  });

  const { write } = useMarketContractWrite({
    functionName: 'swap',
    chainId: chain?.id ?? 80_001,
  });
  const { data: checkoutTotal } = useMarketContractRead({
    functionName: 'calculateCheckoutTotal',
    args: [parseUnits('1', 18)],
    chainId: chain?.id ?? 80_001,
  });

  return (
    <button
      disabled={typeof address !== 'string' || typeof write !== 'function'}
      onClick={async () => {
        const signedTypedData = await signTypedDataAsync({
          types: {
            EIP712Domain: [
              { name: 'name', type: 'string' },
              { name: 'version', type: 'string' },
              { name: 'verifyingContract', type: 'address' },
              { name: 'salt', type: 'bytes32' },
            ],
            Permit: [
              { name: 'owner', type: 'address' },
              { name: 'spender', type: 'address' },
              { name: 'value', type: 'uint256' },
              { name: 'nonce', type: 'uint256' },
              { name: 'deadline', type: 'uint256' },
            ],
          },
          message: {
            owner: address! as Address,
            spender: marketAddress[
              (chain?.id as keyof typeof marketAddress) ?? 80_001
            ]! as Address,
            value: checkoutTotal!,
            nonce: nonce!,
            deadline,
          },
          primaryType: 'Permit',
          domain: {
            name: 'USD Coin (PoS)',
            version: '1',
            verifyingContract: usdcAddress[
              (chain?.id as keyof typeof usdcAddress) ?? 80_001
            ] as Address,
            salt: hexZeroPad(hexlify(80_001), 32) as Address,
          },
        });
        const { v, r, s } = splitSignature(signedTypedData);
        await write({
          args: [
            address!,
            address!,
            BigInt(1e18),
            deadline,
            v,
            r as Address,
            s as Address,
          ],
        });
      }}
    >
      Purchase NRT
    </button>
  );
};
