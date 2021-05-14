import React, { Component } from "react"
import "./Achievement.scss"
import * as recognition from "../../content/recognition.json"
import NavButton from "../../components/Navbar/Index"
import Talk from "../../components/Talk/Index"
import * as conversation from "../../content/conversation.json"

const Achievement = () => {

  const leftComponent =  (data) =>
    <div className='data__container'>
    <div className="position__info">
      <div className="position__info__data">
      <h1 className="heading"> {data.name}</h1>
      <p className="desc">
        {data.Desc}
      </p>
      </div>
    </div>
   <div className="div"></div>
   </div>;

const rightComponent = (data) =>  <div className='data__container'>
<div className="div"></div>
<div className="position__info">
      <div className="position__info__data">
      <h1 className="heading">{data.name}</h1>
      <p className="desc">
        {data.Desc}
      </p>
      </div>
    </div>
</div>;

  const containerComponentRight = (recogInfo) => {
      return(
        <div>
        {(recogInfo.align === "right") ? rightComponent(recogInfo): null}
       </div>
      );
  }

  const containerComponentLeft = (recogInfo) => {
    return(
      <div>
      {(recogInfo.align === "left") ? leftComponent(recogInfo): null}
     </div>
    );
  }

  return (
    <div>
      <Talk message = {conversation.converation[0].message} />
    <div className="timeline__container">
      <div className="timeline__holder">
        <div className="timeline__left__component">
          {recognition.recognitions.map((data, index) => {
               return containerComponentLeft(data);
          })}
        </div>
        <div className="mid__division">
        </div>
        <div className="timeline__right__component">
        {recognition.recognitions.map((data, index) => {
               return containerComponentRight(data);
          })}
        </div>
      </div>
      {/* <div>
        <NavButton active={"achieve"} />
      </div> */}
    </div>
    </div>
  )
}

export default Achievement; 