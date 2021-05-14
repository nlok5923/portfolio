import "./Image.scss"

const ImageComponent = (props) => {

    const {image} = props;

    return (
        <div className="image__container">
            <div className="image__container__image">
                <img src={image} className="image" alt="project" />
            </div>
            <div className="image__container__link">
                <img className="icon" src="images/github.png" alt="project" />
                <img className="icon" src="images/link.png" alt="project" />
                <img className="icon" src="images/star.png" alt="project" />
            </div>
        </div>
    );
}

export default ImageComponent;