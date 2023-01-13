import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import EditorForm from '@site/src/components/EditorForm';

import styles from './index.module.css';
import Stackedit from 'stackedit-js';

const txt = document.getElementById('textarea');
const stackedit = new Stackedit();

function openStackEdit() {
  // Open the iframe
  stackedit.openFile({
    name: 'Filename', // with an optional filename
    content: {
      text: txt.value // and the Markdown content.
    }
  });
}

// Listen to StackEdit events and apply the changes to the textarea.
stackedit.on('fileChange', (file) => {
  txt.value = file.content.text;
});

stackedit.on('close', (file) => {
  alert(file.content.text);
});

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Editor`}
      description="Edit vortex docs!">
      <main class={styles.editBanner}>
        <EditorForm function={openStackEdit} />
      </main>
    </Layout>    
  );
}
