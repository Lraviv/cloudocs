import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchBar from '@theme/SearchBar';

// import { Box, Heading, Text, Button } from '@chakra-ui/react';

import styles from './index.module.css';

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
      title={`${siteConfig.title}`}
      description="My custom banner example">
      <main>
        {/* banner here */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
          <img
            src="/img/banner2.png"
            alt="Cloudio Banner"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignSelf: 'left',
              flexDirection: 'row',
               top: '20%',
              maxWidth: '100%',
              transform: 'translateY(-35%)',
              
            }}>
            <img
              src="/img/cloudio-running.png"
              alt="Cloudio running"
              className={styles.shakeOnHover}
              style={{
                width: '400px',
                height: 'auto',
                display: 'block',
                marginLeft: '50px',
                marginRight: '50px',
              }}
            />
            <div style={{ 
              flexDirection: 'column',
              alignItems: 'flex-start',
              display: 'flex',
              color: 'white', //'#81C89E',
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
              justifyContent: 'flex-start',
            }}>
              <h1 style={{ fontSize: '4.5rem', marginTop: '2rem' ,marginBottom: '1rem' }}>ClouDOCS</h1>
              <p style={{ fontSize: '1.4rem' }}>The Official Documentation Of Cloud's Services</p>
              <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg "
                    to="/docs/intro"
                  >
                    Get Started 📖
                  </Link>
              </div>
            </div>
          </div>
            
        <HomepageFeatures />
        </div>
        
      </main>
    </Layout>
  );
}
