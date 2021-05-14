import { React, useEffect, useRef, useState } from "react"
import './Talk.scss'

const Talk = (props) => {
    const [message, setMessage] = useState("");
    useEffect(() => {
        var i = 0;
        var txt =  props.message;
        var speed = 50;
        console.log(txt);
        var displayMessage = "";
        const typeWriter = () => {
            if (i < txt.length) {
                displayMessage+= txt.charAt(i);
                setMessage(displayMessage);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    },[]);

    return (
        <div>
           <div className="speak__container">
               <div className="talk__container">
                   <p className="bubble speech">{message}</p>
                   <img src="images/astro.jpg" className="speak__container__img" alt="nitanshu photo" />
                </div>
           </div>
        </div>
    )
};

export default Talk;