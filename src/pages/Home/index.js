import { React, useEffect, useRef, useState } from "react"
import Talk from '../../components/Talk/Index'
import * as conversation from "../../content/conversation.json"
import "./Home.scss"
import Navbutton from "../../components/Navbar/Index"

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="info__container">
                    <div className="primary__info">
                        <h1 className="primary__info__name__initials"> NL </h1>
                        <h1 className="primary__info__name__full">Nitanshu Lokhande</h1>
                        <h1 className="primary__info__tagline"> Web dev, Open source enthusiast</h1>
                    </div>
                    <div className="secondary__info">
                    <hr />
                        <p className="secondary__info__text">So guys here you have a look on top 4 projects which my master worked upon over on it to get more info about them :)</p>
                    </div>
                    <div className="social">
                        <hr />
                        <div className="social__links">
                            <img src="images/fb.png" className="facebook" />
                            <img src="images/twitter.png" className="twitter" />
                            <img src="images/insta.png" className="instagram" />
                            <img src="images/linkedin.png" className="Linkedin" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav">
                    <Navbutton active={"home"} />
                </div>
        </div>
    )
}

export default Home;