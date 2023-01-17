import React ,{useState} from 'react'

function navbar() {
  const [speakerState, setSpeakerState] = useState("muted");
  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer") as HTMLVideoElement;

    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

 
    return (
    <div>
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>Fullstack Web Devloper who speciallized </span> <br />
                <span className="header__hero--heading-gradient">
                in {" "}
                </span>
                <br />
                <span>FrontEnd development.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${"speaker__toggle"} ${
                    speakerState === "unmuted"
                      ? `${"speaker__toggle--anim"}`
                      : ``
                  }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                    {/* <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    /> */}
                  </svg>
                </div>
              </div>
            </div>
            <div className="header__footer--right">
              <a
                href="https://github.com/girumgizachew1"
                rel="noopener"
                target="_blank"
              >
                👾 GH
              </a>
              <a
                href="https://twitter.com/girumgizachew"
                rel="noopener"
                target="_blank"
              >
                🐦 TW
              </a>
              <a
                href="https://www.linkedin.com/in/girum-gizachew-9324b820b/"
                rel="noopener"
                target="_blank"
              >
                💼 LD
              </a>
              <a
                href="https://www.instagram.com/girumgizacheew"
                rel="noopener"
                target="_blank"
              >
                {" "}
                📸 IN
              </a>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default navbar