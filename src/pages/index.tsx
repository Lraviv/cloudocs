import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchBar from '@theme/SearchBar';

import Heading from '@theme/Heading';

// import { Box, Heading, Text, Button } from '@chakra-ui/react';

import styles from './index.module.css';
import { Flex } from '@chakra-ui/react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <></>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="My custom banner example">
      <main>
        {/* banner here */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img
            src="/img/cloudio-banner.png"
            alt="Cloudio Banner"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '45%',
              transform: 'translateY(-35%)',
              color: 'white',
              textAlign: 'left',
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              maxWidth: '50%',
            }}>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '1rem' }}>ClouDOCS</h1>
            <p style={{ fontSize: '1.4rem' }}>The Official Documentation Of Cloud's Services</p>
          </div>
            
        </div>
        {/* search here */}
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '60%' }}>
                <SearchBar />
              </div>
        </div>
        {/* תוכן נוסף */}
        <div style={{ padding: '2rem' }}>
          <p>כאן יהיה התוכן של האתר שלך.</p>
        </div>
      </main>
    </Layout>
  );
}
