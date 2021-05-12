import './Tool.scss'

const Tools = () => {
    return (
        <div>
            <div className="tools__page">
                <div className="tool__container">
                    <div className='tool__shelf'>
                        <div className="tool__shelf__label">
                            Stack
                        </div>
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/react.svg" className="tool__shelf__icon" />
                     </div>
                    <div className='tool__shelf'>
                    <div className="tool__shelf__label">
                            Tools
                        </div>
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/visual-studio-code.svg" className="tool__shelf__icon" />
                    </div>
                    <div className='tool__shelf'>
                    <div className="tool__shelf__label">
                            Workflow
                        </div>
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" />
                        <img src="tech-icons/hyper.svg" className="tool__shelf__icon" />
                    </div>
                </div>
                <div className="soothing">
                        <img src="images/about.jpg" alt="yay!!" className="sooth" />
                    </div>
            </div>
        </div>
    );
}

export default Tools;