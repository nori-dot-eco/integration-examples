import type { UseContractReadConfig, UseContractWriteConfig } from 'wagmi';
import { useContractWrite, useContractRead } from 'wagmi';
import type { ReadContractResult } from 'wagmi/actions';

import { certificateABI, certificateAddress } from '../config/contracts.js';

export const useCertificateContractRead = <
  TFunctionName extends string,
  TSelectData = ReadContractResult<typeof certificateABI, TFunctionName>
>(
  config: Omit<
    UseContractReadConfig<typeof certificateABI, TFunctionName, TSelectData>,
    'abi' | 'address'
  >
): ReturnType<typeof useContractRead<typeof certificateABI, TFunctionName>> => {
  return useContractRead({
    abi: certificateABI,
    address: certificateAddress,
    ...config,
  } as UseContractReadConfig<typeof certificateABI, TFunctionName, TSelectData>) as ReturnType<
    typeof useContractRead<typeof certificateABI, TFunctionName>
  >;
};

export const useCertificateContractWrite = <TFunctionName extends string>(
  config: Omit<
    UseContractWriteConfig<typeof certificateABI, TFunctionName>,
    'abi' | 'address'
  >
): ReturnType<
  typeof useContractWrite<typeof certificateABI, TFunctionName>
> => {
  return useContractWrite({
    abi: certificateABI,
    address: certificateAddress,
    ...config,
  } as UseContractWriteConfig<typeof certificateABI, TFunctionName>) as ReturnType<
    typeof useContractWrite<typeof certificateABI, TFunctionName>
  >;
};
