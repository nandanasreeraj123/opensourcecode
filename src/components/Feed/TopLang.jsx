import React, { Component } from "react";
import styles from "../../css/feed.module.css";

class FeedLang extends Component {
  state = {
    showitems: false,
  };
  dropDown = () => {
    this.setState((prevState) => ({
      showitems: !prevState.showitems,
    }));
  };

  render() {
    return (
      <div className={styles["smallbox"]}>
        <div className={styles["Language-Head"]}>
          <div className={styles["disp-flex"]}>
            <div className={styles["lang-space"]}>
              <p>Top Languages</p>
            </div>
            <div onClick={this.dropDown}>
              <img src="SVG/dropdown-icon.svg" alt="dropdown"></img>
            </div>
          </div>
        </div>
        <div style={{ display: this.state.showitems ? "block" : "none" }}>
          <div className={styles["Languages"]}>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>1.</p>
              </div>
              <div className={styles["Languages-js"]}>
                <div>
                <p >Javascript</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>2.</p>
              </div>
              <div className={styles["Languages-css"]}>
                <div>
                <p >CSS</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
            <div className={styles["disp-flex"]}>
              <div className={styles["Languages-num"]}>
                <p>3.</p>
              </div>
              <div  className={styles["Languages-node"]}>
                <div>
                <p>Node</p></div>
                <div className={styles["small-follow"]}><p>Follow</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeedLang;
