import type { UseContractReadConfig, UseContractWriteConfig } from 'wagmi';
import { useContractRead, useContractWrite } from 'wagmi';
import type { ReadContractResult } from 'wagmi/actions';

import { marketABI, marketAddress } from '../config/contracts';

export const useMarketContract = <
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof marketABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof marketABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractRead<typeof marketABI, TFunctionName>> => {
  return useContractRead({
    abi: marketABI,
    address: marketAddress,
    ...config,
  } as UseContractReadConfig<typeof marketABI, TFunctionName, TSelectData>) as ReturnType<
    typeof useContractRead<typeof marketABI, TFunctionName>
  >;
};

export const useMarketContractWrite = <TFunctionName extends string>(
  config: Omit<
    UseContractWriteConfig<typeof marketABI, TFunctionName>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractWrite<typeof marketABI, TFunctionName>> => {
  return useContractWrite({
    abi: marketABI,
    address: marketAddress,
    ...config,
  } as UseContractWriteConfig<typeof marketABI, TFunctionName>) as ReturnType<
    typeof useContractWrite<typeof marketABI, TFunctionName>
  >;
};
