import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1 className='title'>The Vortex meme gallery</h1>
          <p>(i'm sorry i just had to put something here)</p>
          <div className={styles.memeContainer} >
            <img className={styles.meme} src={require('@site/static/img/memes/1.png').default} />
            <img className={styles.meme} src={require('@site/static/img/memes/2.png').default} />
            <img className={styles.meme} src={require('@site/static/img/memes/3.png').default} />
          </div>
        </div>
      </div>
    </section>
  );
}
