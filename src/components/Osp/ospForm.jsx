import React from "react";

import styles from "../../css/osp.module.css";

export default function FormOsp() {
  return (
    <div>
      <div className={styles.bigBox}>
        <div className={styles.flexing}>
          <div className={styles.qns}>
            <div style={{ color: "blue" }}>
              <p>Title</p>
            </div>
            <input
              className={styles.input}
              placeholder="Title of the project"
              style={{ borderBottomColor: "blue" }}
            />
            <div style={{ color: "#00CACA" }}>
              <p>Description</p>
            </div>
            <input
              className={styles.input}
              placeholder="About your project"
              
              style={{ borderBottomColor: "#00CACA" }}
            />
            <div style={{ color: "#0BA293" }}>
            <div className={styles.flex}>
                <div>
                  <p>Skills</p>
                </div>
                <div>
                <img src="SVG/plus.svg" alt="plus" />
                </div>
              </div>
            </div>
            
            <input
              className={styles.input}
              id="myInput"
              placeholder="Enter the skills"
              style={{ borderBottomColor: "#0BA293" }}
            />
            
            <div className={styles.flexingskills}>
              <div className={styles.skill} style={{ borderColor: "red" }}>
                <p>Node</p>
              </div>
              <div className={styles.skill} style={{ borderColor: "#00CACA" }}>
                <p>React</p>
              </div>
            </div>
          </div>
          <div className={styles.qns}>
            <div style={{ color: "black" }}>
              <div className={styles.flex}>
                <div>
                  <p>Github</p>
                </div>
                <div>
                  <img src="SVG/git.svg" alt="git" />
                </div>
              </div>
            </div>
            <input
              className={styles.input}
              placeholder="www.github.com/username"
              style={{ borderBottomColor: "black" }}
            />
            <div style={{ color: "#9F0BDD" }}>
            <div className={styles.flex}>
                <div>
                  <p>Hosting URL</p>
                </div>
                <div>
                  <img src="SVG/url.svg" alt="git" />
                </div>
              </div>
            </div>
            <input
              className={styles.input}
              placeholder="Hosting URL of the project"
              style={{ borderBottomColor: "#9F0BDD" }}
            />
            <p>Upload Your Project Here</p>
            <img src="SVG/Group 142.svg" alt="upload" className={styles.upload} />
          </div>
        </div>
      </div>
    </div>
  );
}
