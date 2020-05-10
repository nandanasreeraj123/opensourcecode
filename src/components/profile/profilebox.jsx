import React from "react";
// import styles from "../../css/profile.module.css";

export default function BoxProfile() {
  return (
    <div>
      <div className="usernamebox">
        <div className="imgabsolute">
          <img src="SVG/young-man.svg"></img>
        </div>
        <div className="top-right">
          <div className="langsec">
            <img src="SVG/Github.svg"></img>
            <div className="top-right-in">
              <img src="SVG/Linkedin.svg"></img>
            </div>
          </div>
        </div>
        <div className="top-right-name">
          <p>@aryasoni98</p>
        </div>
        <div className="top-right-line">
          <img src="SVG/underline (1).svg"></img>
        </div>
        <div class="boxcontent">
          <p className="usersname">User</p>
          <p className="usercontent">Something about the user</p>
          <p className="usercontent">User information given by user</p>
          <div class="langsec">
            <div>
              <p className="userskills">Skills</p>
            </div>

            <div className="langButtonJS">
              <p>Javascript</p>
            </div>
            <div className="langButtonCSS">
              <p>CSS</p>
            </div>
          </div>
          <div class="langsec">
            <div className="smallbox">
              <div className="langsec">
                <div className="follow">
                  <img src="SVG/people 1.svg"></img>
                </div>
                <div className="count">
                  <p>1</p>
                </div>
              </div>
              <div className="smallboxwriting-follow">
                <p>Follow</p>
              </div>
            </div>
            <div className="smallbox">
              <div className="langsec">
                <div className="heart">
                  <img src="SVG/heart.svg"></img>
                </div>
                <div className="count">
                  <p>5</p>
                </div>
              </div>
              <div className="smallboxwriting">
                <p>Likes</p>
              </div>
            </div>
            <div className="smallbox">
              <div className="langsec">
                <div className="heart">
                  <img src="SVG/interface 1.svg"></img>
                </div>
                <div className="count">
                  <p>5</p>
                </div>
              </div>
              <div className="smallboxwriting">
                <p>Save</p>
              </div>
            </div>
            <div className="smallbox">
              <div className="langsec">
                <div className="heart">
                  <img src="SVG/multimedia 1.svg"></img>
                </div>
                <div className="count">
                  <p>1</p>
                </div>
              </div>
              <div className="smallboxwriting-osp">
                <p>OSP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="usernamebox">
        <div className="imgabsolute-lower">
          <img src="SVG/Rectangle 217.svg"></img>
        </div>
        <div className="imgabsolute-lowerheart">
          <img src="SVG/heart (1).svg"></img>
          <p>213</p>
        </div>
        <div className="top-right-below">
          <div className="langsec">
            <div className="smallbox-below">
              <div className="langsec">
                <div>
                  <img src="SVG/Icon awesome-exclamation-circle.svg"></img>
                </div>
                <div>
                  <p>Issues:13</p>
                </div>
              </div>
            </div>
            <div>
              <div className="smallbox-below">
                <div className="langsec">
                  <div>
                    <img src="SVG/pr.svg"></img>
                  </div>
                  <div>
                    <p>PR:1233</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-below">
          <div className="usersname">
            <p>Open Source Code</p>
          </div>
          <div className="date">
            <p>By Organisation | 08 May 2020</p>
            <p className="contentuser">
              There should be some content her. So I am filling this with random
              content inorder to fill this space. Feel free to add on.We can add
              more and more content here so that we can see what this is gonna
              look like on the real website page
            </p>
          </div>
          <div class="langsec">
            <div className="langButtonJS">
              <p>Javascript</p>
            </div>
            <div className="langButtonCSS-below">
              <p>CSS</p>
            </div>
          </div>
        </div>
        <div className="savebutton">
          <p>Save</p>
        </div>
      </div>
      <style jsx global>
        {`
          .usernamebox {
            max-width: 90%;

            border-radius: 20px;
            padding-top: 20px;
            padding-right: 20px;
            padding-left: 20px;
            padding-bottom: 10px;
            margin-left: 100px;
            margin-right: 100px;
            box-shadow: 0 0 5px #888888;
            padding-bottom: 40px;
            margin-top: 200px;
          }

          .padding-below {
            margin-left: 170px;
            margin-right: 220px;
          }
          .imgabsolute-lower {
            // margin-left:4px;
            margin-top: 25px;
            position: absolute;
          }
          .imgabsolute-lowerheart {
            margin-left:50px;
            margin-top: 180px;
            position: absolute;
          }
          .follow {
            margin-top: 7px;
          }
          .heart {
            margin-top: 11px;
          }
          .smallbox {
            font-weight: 600;
            border-radius: 20px;
            padding-top: 20px;
            padding-right: 20px;
            padding-left: 20px;
            margin-top: 50px;
            box-shadow: 0 0 5px #888888;
            padding-bottom: 5px;
            width: 110px;

            margin-right: 40px;
          }
          .smallbox-below {
            font-weight: 600;
            border-radius: 20px;
            padding-top: 5px;
            padding-right: 8px;
            padding-left: 8px;
            padding-bottom: 3px;
            box-shadow: 0 0 5px #888888;
            padding-bottom: 5px;
            height: 30px;

            margin-right: 10px;
          }
          .smallboxwriting {
            margin-left: 15px;
            margin-top: 13px;
          }
          .smallboxwriting-follow {
            margin-left: 10px;
            margin-top: 1px;
          }
          .smallboxwriting-osp {
            margin-left: 15px;
            margin-top: 1px;
          }
          .top-right {
            position: absolute;
            margin-left: 1100px;
          }
          .top-right-below {
            position: absolute;
            margin-left: 1050px;
          }
          .top-right-in {
            margin-left: 20px;
          }
          .usersname {
            font-size: 35px;
            font-weight: 550;
            margin-bottom: 10px;
          }
          .usercontent {
            color: #757a7a;
          }
          .userskills {
            font-size: 25px;
            font-weight: 450;
            margin-top: 10px;
          }
          .boxcontent {
            margin-left: 350px;
            margin-top: 30px;
          }
          .langsec {
            display: flex;
          }
          .langButtonJS {
            margin-left: 20px;
            margin-right: 20px;
            width: fit-content;
            padding: 3px 10px 3px 10px;
            font-size: 15px;
            font-weight: 400;
            border-radius: 8px;
            font-weight: 450;
            border: none;
            height: 35px;
            //
            border-style: solid;
            border-color: red;
            margin-top: 10px;
          }
          .top-right-name {
            margin-left: 1110px;
            position: absolute;
            margin-top: 60px;
          }
          .top-right-line {
            margin-left: 1100px;
            position: absolute;
            margin-top: 80px;
          }
          .savebutton {
            position: absolute;
            margin-left: 1150px;

            width: fit-content;
            padding-top: 5px;
            padding-left: 20px;
            padding-right: 20px;
            font-size: 15px;
            font-weight: 400;
            border-radius: 20px;
            cursor: pointer;
            border: none;
            height: 35px;
            color: white;
            background-color: black;
          }
          .date {
            font-weight: 600;
          }
          .contentuser {
            margin-top: 20px;
          }
          .count {
            font-size: 27px;
            margin-top: 5px;
            margin-left: 15px;
          }
          .langButtonCSS {
            margin-top: 10px;
            width: fit-content;
            padding: 3px 10px 3px 10px;
            font-size: 15px;
            font-weight: 400;
            border-radius: 8px;
            font-weight: 450;
            border: none;
            height: 35px;
            //
            border-style: solid;
            border-color: Yellow;
          }
          .langButtonCSS-below {
            margin-top: 10px;
            width: fit-content;
            padding: 3px 10px 3px 10px;
            font-size: 15px;
            font-weight: 400;
            border-radius: 8px;
            font-weight: 450;
            border: none;
            height: 35px;
            margin-left: 20px;
            border-style: solid;
            border-color: Yellow;
          }
          .imgabsolute {
            position: absolute;
            margin-top: -250px;
            margin-left: -150px;
          }
        `}
      </style>
    </div>
  );
}
