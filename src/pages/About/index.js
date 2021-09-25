import { React } from "react";
import "./About.scss";
import Talk from "../../components/Talk/Index";
import * as conversation from "../../content/conversation.json";
import * as aboutme from "../../content/about.json";

const About = () => {
  const socialHandles = ["fa fa-facebook", "fa fa-instagram", "fa fa-linkedin"];
  const codingHandles = ["codechef", "codeforces", "github"];

  return (
    <div>
      <Talk message={conversation.converation[0].about} />
      <div className="about">
        <div className="about__container">
          <div className="coding__handles">
            {aboutme.about[2].coding__links.map((data, index) => {
              let name = "images/" + codingHandles[index] + ".svg";
              return (
                <a href={data} key={index}>
                  <img
                    src={name}
                    className="handle__size"
                    alt="coding handle"
                  />
                </a>
              );
            })}
          </div>
          <img
            className="about__container__img"
            src="images/nitanshu.jpg"
            alt="me"
          />
          <div className="about__container__info">
            <h1>{aboutme.about[0].heading}</h1>
            <div className="info__para">
              <p>{aboutme.about[0].para}</p>
            </div>
          </div>
          <div className="social__handles">
            {aboutme.about[1].social__links.map((data, index) => {
              return (
                <a href={data} key={index} className={socialHandles[index]}>
                  &emsp;
                </a>
              );
            })}
          </div>
        </div>
        <a
          href="https://drive.google.com/file/d/1WRmbGkbAl-rY6q84tj14SE6p4KoFxMqT/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="resume__button">
            <strong> Resume 📥 </strong>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
