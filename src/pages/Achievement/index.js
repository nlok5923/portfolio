import React from "react"
import { Chrono } from "react-chrono";
import "./Achievement.scss"

const Achievement = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div style={{ width: "500px", height: "400px", backgroundColor:"green" }}>
      <Chrono items={items} />
    </div>
  )
}

export default Achievement; 