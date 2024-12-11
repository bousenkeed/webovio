import './project.css';
import Container from '../container/container';
import FeatureProject from './feature-project/feature-project';
import FeatureImage from './feature-project/feature-image/feature-image';
import FeatureText from './feature-project/feature-text/feature-text';
import { projects } from '../../assets/data/data';

function Project() {
    return (
        <section className="project">
            <Container>
                <div className='project__title-flex'>
                    <h2 className='project__title'>
                        We Have Some Awesomr Project.
                    </h2>
                    <p className='project__subtitle'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                </div>
            </Container>
            <div className='project__projects'>
                    {
                        projects.map((project, index) => {
                            return <FeatureProject key={index} reverse={project.reverse}>
                                <FeatureImage
                                    mainImage={project.mainImage}
                                    avatar={project.avatar}
                                    text={project.text}
                                    name={project.name}
                                    profession={project.profession}
                                    reverse={project.reverse}
                                />
                                <FeatureText 
                                    title={project.title}
                                    paragraph1={project.paragraph1}
                                    paragraph2={project.paragraph2}
                                />
                            </FeatureProject>
                        })
                    }
            </div>
        </section>
    )
}

export default Project;