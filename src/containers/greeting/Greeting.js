import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import { TypeAnimation } from "react-type-animation";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {
  illustration,
  greeting,
  socialMediaLinks
} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
               <>
                  {greeting.title}
                  <br />
                  <span className="my-name">{greeting.username}</span>
                  <span className="wave-emoji">{emoji("👋")}</span>
                </>
              </h1>
              <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>

                <TypeAnimation
                  sequence={[
                    "☕ Java Developer",
                    2000,
                    "🚀 Backend Enthusiast",
                    2000,
                    "🌱 Spring Boot Learner",
                    2000,
                    "💼 Open to Opportunities",
                    2000
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                  className="typing-text"
                />
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
             <div className="button-greeting-div">
  <Button text="📧 Contact" href="#contact" />

  {greeting.resumeLink && (
    <a
      href={greeting.resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="download-link-button"
    >
      <Button text="📄 Resume" />
    </a>
  )}

  <a
    href={socialMediaLinks.github}
    target="_blank"
    rel="noopener noreferrer"
    className="download-link-button"
  >
    <Button text="💻 GitHub" />
  </a>
</div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <img
                src={require("../../assets/images/profile.png")}
                alt="Ashutosh Mallik"
                className="profile-image"
              />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
