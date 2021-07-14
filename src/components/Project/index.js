import "./Project.scss";
import ImageCard from "./Image/Index";
import StackButton from "./stack/index";

const Project = (props) => {
  const { name, link, bullets, image, stack, id } = props;

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
            <ImageCard link={link} image={image} />
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
