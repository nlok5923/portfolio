import React from "react";
import "./Achievement.scss";
import * as recognition from "../../content/recognition.json";
import Talk from "../../components/Talk/Index";
import * as conversation from "../../content/conversation.json";

const Achievement = () => {
  const leftComponent = (data) => (
    <div className="data__container">
      <div className="position__info">
        <div className="position__info__data">
          <h1 className="heading">
            <strong> {data.name} </strong>
          </h1>
          <p className="desc">
            <i> {data.date} </i>
          </p>
          <ul>
            {data.Desc.map((bullet) => (
              <li>{bullet.point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="div"></div>
    </div>
  );

  const rightComponent = (data) => (
    <div className="data__container">
      <div className="div"></div>
      <div className="position__info">
        <div className="position__info__data">
          <h1 className="heading">
            <strong> {data.name} </strong>
          </h1>
          <p className="desc">
            <i> {data.date} </i>
          </p>
          <ul>
            {data.Desc.map((bullet) => (
              <li>{bullet.point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const containerComponentRight = (recogInfo) => {
    return (
      <div>
        {recogInfo.align === "right" ? rightComponent(recogInfo) : null}
      </div>
    );
  };

  const containerComponentLeft = (recogInfo) => {
    return (
      <div>{recogInfo.align === "left" ? leftComponent(recogInfo) : null}</div>
    );
  };

  return (
    <div>
      <Talk message={conversation.converation[0].recog} />
      <div className="timeline__container">
        <h1 className="achiever"> Nitanshu Lokhande</h1>
        <div className="timeline__holder">
          <div className="timeline__left__component">
            {recognition.recognitions.map((data, index) => {
              return containerComponentLeft(data);
            })}
          </div>
          <div className="mid__division"></div>
          <div className="timeline__right__component">
            {recognition.recognitions.map((data, index) => {
              return containerComponentRight(data);
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
