import type { NextPage } from 'next';
import Head from 'next/head';
import 'reactflow/dist/style.css';

import Flow from '@/components/Flow';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (

            <div className={styles.container} height="92vh">

  
        <Flow />
      </div>

  );
};

export default Home;
