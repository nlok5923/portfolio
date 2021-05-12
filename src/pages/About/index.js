import { React, useEffect, useState } from "react"
import "./About.scss"
// import Flying from "../../components/Flying/index"
// import Talk from "../../components/Talk/Index"
import * as conversation from "../../content/conversation.json";

const About = () => {

    // const [load, setLoad] = useState(false);
    // useEffect(()=>{
    //     setInterval(()=>{
    //         setLoad(true);
    //     },10)
    // },[]);

    return(
        <div className="about">
            <div className="about__container">
                <div className="coding__handles">
                <a
                href="https://www.facebook.com/nitanshu.lokhande.9/"
                class="fa fa-facebook"
                >
                </a>
                 <a href="https://www.instagram.com/nit_lok/" class="fa fa-instagram">
                </a>
                <a 
                href="https://www.linkedin.com/in/nitanshu-lokhande-5b60691a0/"
                class="fa fa-linkedin"
                >
                </a>
                </div>
                <img className="about__container__img" src="images/nitanshu.jpg" />
                <div className="about__container__info" >
                    <h1>Hi 👋 this is Nitanshu Lokhande</h1>
                    <div className="info__para">
                        <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                </div>
                <div className="social__handles">
                <a
                href="https://www.facebook.com/nitanshu.lokhande.9/"
                className="fa fa-facebook"
                >
                </a>
                 <a href="https://www.instagram.com/nit_lok/" className="fa fa-instagram">
                </a>
                <a 
                href="https://www.linkedin.com/in/nitanshu-lokhande-5b60691a0/"
                className ="fa fa-linkedin"
                >
                </a>
                </div>
            </div>
            {/* {!load ? <Flying />: */}
            {/* <div className="talk__align">
                <Talk message = {conversation.converation[1].message} />
            </div>  */}
            {/* } */}
        </div>
    );
}

export default About;