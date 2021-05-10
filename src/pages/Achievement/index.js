import React from "react"
import { Chrono } from "react-chrono";
import "./Achievement.scss"

const Achievement = () => {

  const containerComponent = (side) => {
    if(side==="yes") {
      return(
        <div className='data__container'>
        <div className="div"></div>
        <div className="position__info">
          testing position
        </div>
      </div>


        );
    } else {
      return(

<div className='data__container'>
<div className="position__info">
  testing position
</div>
<div className="div"></div>
</div>
        );
    }
  }

  return (
    <div className="timeline__container">
      <div className="timeline__holder">
        <div className="timeline__left__component">
        {containerComponent("no")}
        </div>
        <div className="mid__division">
        </div>
        <div className="timeline__right__component">
          {containerComponent("yes")}
        </div>
      </div>
    </div>
  )
}

export default Achievement; 