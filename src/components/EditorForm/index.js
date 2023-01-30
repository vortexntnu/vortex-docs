import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function EditorForm(props) {
  return (
    <div class={styles.rootDiv} >
      <div class="hero shadow--md" style={{'width': '100%', 'margin': '0'}}>
        <div className="container">
        <h1 className="hero__title">Welcome to the Editor!</h1>
        <p className="hero__subtitle">Create a new Page here.</p>

        <div class="margin-top--lg">
          <label for="path" class={styles.formLabel}> File path + Name </label>
          <input type="text" class={clsx(styles.formControl, "shadow--lw")} id="path" list="datalistOptions" placeholder="/DevOps/into.md" />
          <datalist id="datalistOptions">
            <option value="San Francisco" />
            <option value="New York" />
            <option value="Seattle" />
            <option value="Los Angeles" />
            <option value="Chicago" />
          </datalist>
          <small>
            Hint: If you choose a file path that do not exists, a new catagory is created!
          </small>

          <textarea id="textarea" style={{"display": "none"}} value="
            ---
            title: example
            description: page description
            ---

            # Page title
          "></textarea>
        </div>
      
        <div class="margin-top--lg">
          <button class="button button--block button--primary button--lg shadow--lw" onClick={props.function}>
            Create New Page!
          </button>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default EditorForm;