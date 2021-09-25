import "./Project.scss";
import ImageCard from "./Image/Index";
import StackButton from "./stack/index";

const Project = (props) => {
  console.log(props)
  const { name, link, bullets, image, stack, id, github__link, star__link } = props;

  return (
    <div>
      <div className="project__container" id={id}>
        <div className="project__info">
          <div className="project__info__name">
            <h1>{name}</h1>
          </div>
          <div className="project__info__desc">
            {bullets.map((data, index) => (
              <li key={index}>{data.bullet}</li>
            ))}
          </div>
          <div className="project__info__image">
            <ImageCard link={link} image={image} github__link={github__link} star__link={star__link} />
          </div>
          <div className="project__info__stack">
            {stack.map((data, index) => {
              return <StackButton tech={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
