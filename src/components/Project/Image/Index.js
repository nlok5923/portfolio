import "./Image.scss"

const ImageComponent = (props) => {

    const {link, image} = props;

    return (
        <div className="image__container">
            <div className="image__container__image">
                <img src={image} className="image" alt="project" />
            </div>
            <div className="image__container__link">
                <img src="images/github.png" alt="project" />
                <img src="images/link.png" alt="project" />
            </div>
        </div>
    );
}

export default ImageComponent;