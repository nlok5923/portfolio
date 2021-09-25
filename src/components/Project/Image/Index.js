import "./Image.scss";

const ImageComponent = (props) => {
  const { image, github__link, star__link, link } = props;
  console.log(props);

  return (
    <div className="image__container">
      <div className="image__container__image">
        <img src={image} className="image" alt="project" />
      </div>
      <div className="image__container__link">
        <a href={github__link} target="_blank" rel="noreferrer">
          <img className="icon" src="images/github.png" alt="project" />
        </a>
        <a href={link} target="_blank" rel="noreferrer">
          <img className="icon" src="images/link.png" alt="project" />
        </a>
        <a href={star__link} target="_blank" rel="noreferrer">
          <img className="icon" src="images/star.png" alt="project" />
        </a>
      </div>
    </div>
  );
};

export default ImageComponent;
