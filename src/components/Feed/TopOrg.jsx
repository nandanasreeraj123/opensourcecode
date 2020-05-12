import React, { Component } from 'react';
import styles from '../../css/feed.module.css';


class FeedOrg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showitems: false,
    };
  }

  dropDown = () => {
    this.setState((prevState) => ({
      showitems: !prevState.showitems,
    }));
  };

  render() {
    const { showItems } = this.state;
    return (
      <div className={styles.smallbox}>
        <div className={styles['Language-Head']}>
          <div className={styles['disp-flex']}>
            <div className={styles['lang-space']}>
              <p>Top Organisations</p>
            </div>
            <div onClick={this.dropDown}> {/* eslint-disable-line */}
              <img src="SVG/dropdown-icon.svg" alt="dropdown" />
            </div>
          </div>
        </div>
        <div style={{ display: showItems ? 'block' : 'none' }}>
          <div className={styles.Languages}>
            <div className={styles['disp-flex']}>
              <div className={styles['Languages-num']}>
                <p>1.</p>
              </div>
              <div className={styles['Languages-mozilla']}>
                <div>
                  <p>Javascript</p>
                </div>
                <div className={styles['small-follow']}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles['disp-flex']}>
              <div className={styles['Languages-num']}>
                <p>2.</p>
              </div>
              <div className={styles['Languages-google']}>
                <div>
                  <p>CSS</p>
                </div>
                <div className={styles['small-follow']}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles['disp-flex']}>
              <div className={styles['Languages-num']}>
                <p>3.</p>
              </div>
              <div className={styles['Languages-facebook']}>
                <div>
                  <p>Node</p>
                </div>
                <div className={styles['small-follow']}><p>Follow</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeedOrg;
