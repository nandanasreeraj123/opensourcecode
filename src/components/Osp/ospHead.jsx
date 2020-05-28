import React from 'react';
import styles from '../../css/osp.module.css';

export default function HeadOsp() {
  return (
    <div>
        <div className={styles["flexing"]}>
      <div className={styles['osp-heading']}>
        <h1>ADD AN OPEN SOURCE PROJECT</h1>
        <img src = "SVG/underline (1).svg" alt="underline"></img>
        <div className={styles["osp-desc"]}>
        <p>Search and contribute to some of the Best Open source projects</p>
      </div></div>
      <div>
          <img src="SVG/Group 137.svg" alt="gp"></img>
      </div>
      </div>
    </div>
  );
}