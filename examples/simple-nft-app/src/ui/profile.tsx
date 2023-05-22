'use client';

import { useAccount, useConnect, useEnsName } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export const Profile = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({
    address: typeof address === 'string' ? address : '0x',
  });
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  if (isConnected) return <div>Connected to {ensName ?? address}</div>;
  return <button onClick={() => connect()}>Connect Wallet</button>;
};
