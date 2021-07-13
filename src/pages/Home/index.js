import { React } from "react"
import Talk from '../../components/Talk/Index'
import * as conversation from "../../content/conversation.json"
import "./Home.scss"

const Home = () => {
    return (
        <div>
             <Talk message={conversation.converation[0].home} />

            <div className="container">
                <div className="info__container">
                    <div className="primary__info">
                        <h1 className="primary__info__name__initials"> NL </h1>
                        <h1 className="primary__info__name__full">Nitanshu Lokhande</h1>
                        <h1 className="primary__info__tagline"> Web dev, Open source enthusiast</h1>
                    </div>
                    <div className="secondary__info">
                    <hr />
                        <p className="secondary__info__text">
                            I am Nitanshu lokhande a person with scientific entrepreneurial mindset which beliefs in innovation and life long learning :) 
                        </p>
                    </div>
                    <div className="social">
                        <hr />
                        <div className="social__links">
                            <img src="images/fb.png" className="facebook" alt="social" />
                            <img src="images/twitter.png" className="twitter" alt="social" />
                            <img src="images/insta.png" className="instagram" alt="social" />
                            <img src="images/linkedin.png" className="Linkedin" alt="social" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;