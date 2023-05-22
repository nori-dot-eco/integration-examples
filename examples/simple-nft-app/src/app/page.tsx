/* eslint-disable dot-notation -- conflict with tsconfig */
import { Profile } from '../ui/profile';
import { Mint } from '../ui/mint';
import { MarketInfo } from '../ui/market-info';
import { UsdcInfo } from '../ui/usdc-info';
import { Purchase } from '../ui/purchase';

import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles['main']}>
      <div className={styles['description']}>
        <div>
          <h2>
            <p>Simple NFT App</p>
          </h2>
        </div>
        <div>
          <Profile />
        </div>
      </div>

      <div className={styles['grid']}>
        <Purchase />
        <Mint />
      </div>
      <div className={styles['description']}>
        <p>
          <MarketInfo />
        </p>
        <p>
          <UsdcInfo />
        </p>
      </div>
    </main>
  );
};

export default Home;
