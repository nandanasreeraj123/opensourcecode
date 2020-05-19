import React from 'react';
import styles from '../css/org.module.css';

export default function TopOrganisation() {
  return (
    <div>
      <div className={styles.flex}>
        <div>
          <div className={styles.heading}>
            <p>Top 100 Organisations</p>
          </div>
          <img src="SVG/orgline.svg" alt="orgline" />
          <div className={styles['p-org']}>
            <p>Choose minimum 5 Organisation</p>
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
                placeholder="Search for Organisation"
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
          <img src="SVG/Group 122.svg" alt="imageside" />
        </div>
      </div>
      <div className={styles['flex-below']}>
        <div className={styles.orgs} style={{ backgroundColor: '#B9007B' }}>
          <img src="SVG/google round.svg" alt="google" />
          <p className={styles['box-head']}>Google</p>
          <div className={styles.follow} style={{ color: '#B9007B' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'rgb(0, 119, 255)' }}>
          <img src="SVG/linkedin round.svg" alt="google" />
          <p className={styles['box-head']}>LinkedIn</p>
          <div className={styles.follow} style={{ color: 'rgb(0, 119, 255)' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'black' }}>
          <img src="SVG/git round.svg" alt="google" />
          <p className={styles['box-head']}>Github</p>
          <div className={styles.follow} style={{ color: 'black' }}>
            <p>Follow</p>
          </div>
        </div>
        <div className={styles.orgs} style={{ backgroundColor: 'orange' }}>
          <img src="SVG/Group 123.svg" alt="google" />
          <p className={styles['box-head']}>GirlScript</p>
          <div className={styles.follow} style={{ color: 'orange' }}>
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
