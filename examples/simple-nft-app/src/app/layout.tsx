import './globals.css';
import { Inter } from 'next/font/google';

import { App } from '../ui/app.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Simple NFT App',
  description:
    'An example app demonstrating how to integrate with Nori via web3.',
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <App>
        <body className={inter.className}>{children}</body>
      </App>
    </html>
  );
};

export default RootLayout;
