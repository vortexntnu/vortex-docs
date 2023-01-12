import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import EditorForm from '@site/src/components/EditorForm';

import styles from './index.module.css';

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
