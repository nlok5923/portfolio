import './Tool.scss'
import Talk from "../../components/Talk/Index"
import * as conversation from "../../content/conversation.json"

const Tools = () => {
    return (
        <div>
            <Talk message={conversation.converation[0].message} />
            <div className="tools__page">
                <div className="tool__container">
                    <div className='tool__shelf'>
                        <div className="tool__shelf__label">
                            Stack
                        </div>
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" alt="tech" />
                     </div>
                    <div className='tool__shelf'>
                    <div className="tool__shelf__label">
                            Tools
                        </div>
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" alt="tech" />
                    </div>
                    <div className='tool__shelf'>
                    <div className="tool__shelf__label">
                            Workflow
                        </div>
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" alt="tech" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" alt="tech" />
                    </div>
                </div>
                <div className="soothing">
                        <img src="images/astro.svg" className="sooth float-ease" alt="tech" />
                    </div>
            </div>
        </div>
    );
}

export default Tools;