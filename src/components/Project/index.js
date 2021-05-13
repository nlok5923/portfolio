import "./Project.scss"
import ImageCard from "./Image/Index"
import StackButton from "./stack/index"

const Project = (props) => {
    const { name, link, desc, image, stack, id } = props;
    
    return(
        <div>
            <div className="project__container" id={id}>
                <div className="project__info">
                    <div className="project__info__name">
                        <h1>{name}</h1>
                    </div>
                    <div className="project__info__desc">
                        <p>{desc}</p>
                    </div>
                    <div className="project__info__image">
                        <ImageCard link={link} image={image} />
                    </div>
                    <div className="project__info__stack">
                        {stack.map((data, index)=> {
                           return(<StackButton tech={data} />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;