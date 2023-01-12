import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import EditorForm from '@site/src/components/EditorForm';

import styles from './index.module.css';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--success', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Welcome to the Editor!</h1>
        <p className="hero__subtitle">Create a new Page here.</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Create new Page
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Editor`}
      description="Edit vortex docs!">
      <main>
        <EditorForm />
      </main>
    </Layout>    
  );
}
