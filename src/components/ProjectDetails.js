import { Carousel } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const data = useData();
    console.log(data);
    //    const allData = useProjects();
    //    console.log(allData);
    const project = data.find(data => data.id === projectId);
    //    console.log(project);
    // const [project] = useState(projectId)

    // const { name, img, img1, img2, img3, technology, liveLink } = project;

    return (
        <div className='container'>
            <div>
                <Carousel className='carousel-area'>
                    <Carousel.Item interval={1000} className="full-carousel">
                        <img
                            className="d-block "
                            src={project.img1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} className="full-carousel">
                        <img
                            className="d-block "
                            src={project.img2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="full-carousel">
                        <img
                            className="d-block"
                            src={project.img}
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='carousel-text'>
                <h5>{project.name}</h5>
                <p><b>Technology Used:{project.technology}</b></p>
                <p>
                    <ul>
                        <li>{project.detail1}</li>
                        <li>{project.detail2}</li>
                        <li>{project.detail3}</li>
                        <li>{project.detail4}</li>
                    </ul>
                </p>
                <div className='button-area'>
                    <hr />
                    <button>
                        <a href={project.liveLink} target="_blank" >Live Preview</a>
                    </button>
                    <button>
                        <a href={project.cilent} target="_blank" >Github-Client</a>
                    </button>
                    <button>
                        <a href={project.server} target="_blank" >Github-Server</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;