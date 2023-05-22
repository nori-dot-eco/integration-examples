'use client';

import type { UseContractReadConfig } from 'wagmi';
import type { ReadContractResult } from 'wagmi/actions';
import { useContractRead } from 'wagmi';

import { removalABI, removalAddress } from '../config/contracts';

export const useRemovalContract = <
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof removalABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof removalABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractRead<typeof removalABI, TFunctionName>> => {
  return useContractRead({
    abi: removalABI,
    address: removalAddress,
    ...config,
  } as UseContractReadConfig<typeof removalABI, TFunctionName, TSelectData>) as ReturnType<
    typeof useContractRead<typeof removalABI, TFunctionName>
  >;
};
