import React from 'react';
import styles from '../css/lang.module.css';

export default function TopLanguage() {
  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <p>Top 50 Languages</p>
          </div>
          <img src="SVG/orgline.svg" alt="orgline" />
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Languages</p>
          </div>
          <div className={styles['search-bar']}>
            <div className={styles['left-col']}>
              <img
                src="/SVG/search-icon.svg"
                alt="search"
                style={{ width: '20px', margin: '5px 5px auto 15px' }}
              />
              <input
                type="search"
                name="Search"
                id=""
                placeholder="Search for Languages"
                style={{
                  border: 'none',
                  color: 'white',
                  backgroundColor: 'black',
                  fontSize: '1rem',
                  fontWeight: '300',
                  width: '17rem',
                  marginLeft: '1.3rem',
                  outline: 'none',
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <img src="SVG/Group 111.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['flex-below']}>
        <div className={styles.orgs} style={{ backgroundColor: '#00CACA' }}>

          <p className={styles['box-head']}>C++</p>
          <div className={styles.follow} style={{ color: '#00cACA' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'blue' }}>

          <p className={styles['box-head']}>Java</p>
          <div className={styles.follow} style={{ color: 'blue' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'rgb(255, 217, 0)' }}>

          <p className={styles['box-head']}>Node</p>
          <div className={styles.follow} style={{ color: 'rgb(255, 217, 0)' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'red' }}>

          <p className={styles['box-head']}>React</p>
          <div className={styles.follow} style={{ color: 'red' }}>
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className={styles.next}>
        <p>Next</p>
      </div>
    </div>
  );
}
