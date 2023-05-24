import type { UseContractReadConfig, UseContractWriteConfig } from 'wagmi';
import { useContractWrite, useContractRead } from 'wagmi';
import type { ReadContractResult } from 'wagmi/actions';

import { usdcABI, usdcAddress } from '../config/contracts.js';

export const useUsdcContractRead = <
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof usdcABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof usdcABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractRead<typeof usdcABI, TFunctionName>> => {
  return useContractRead({
    abi: usdcABI,
    address: usdcAddress,
    ...config,
  } as UseContractReadConfig<typeof usdcABI, TFunctionName, TSelectData>) as ReturnType<
    typeof useContractRead<typeof usdcABI, TFunctionName>
  >;
};

export const useUsdcContractWrite = <TFunctionName extends string>(
  config: Omit<
    UseContractWriteConfig<typeof usdcABI, TFunctionName>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractWrite<typeof usdcABI, TFunctionName>> => {
  return useContractWrite({
    abi: usdcABI,
    address: usdcAddress,
    ...config,
  } as UseContractWriteConfig<typeof usdcABI, TFunctionName>) as ReturnType<
    typeof useContractWrite<typeof usdcABI, TFunctionName>
  >;
};
