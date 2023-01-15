import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import EditorForm from '@site/src/components/EditorForm';

import styles from './index.module.css';
import Stackedit from 'stackedit-js';

export default function Home() {
  return (
    <BrowserOnly>
      {() => {
        let save;
        const stackedit = new Stackedit();

        function openStackEdit() {
          // Open the iframe
          stackedit.openFile({
            name: 'Filename', // with an optional filename
            content: {
              text: `<!--\n\tFirst bracket is frontmatter and contain metadata about the file.\n\tThe page's content start at "Page title".\n-->\n\n---\n\ttitle: page name\n\tdescription: page description\n---\n\n# Page title\n`,
            }
          });
        }

        // Listen to StackEdit events and apply the changes to the save variable, basiclly auto save.
        stackedit.on('fileChange', (file) => {
          save = file.content.text;
        });

        // When the editor is closed
        stackedit.on('close', () => {
          console.log(save);
        });

        return (
          <Layout
            title={`Editor`}
            description="Edit vortex docs!">
            <main class={styles.editBanner}>
              <EditorForm function={openStackEdit} />
            </main>
          </Layout>
        );
      }}
    </BrowserOnly>
       
  );
}
