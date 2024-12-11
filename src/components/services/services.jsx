import './services.css';
import Link from '../elements/link/link';
import Container from '../container/container';
import avatarImg from '../../assets/images/avatar.jpg'
import Line from '../elements/line/line';

function Services() {
    return (
        <section className='services'>
            <Container>
                <div className="servises__inner">

                    <div className='services__left'>
                        <span className='services__subtitle'>What we do for you</span>
                        <h2 className='services__title'>
                            Strategy. Design  Content. Technology Development
                        </h2>
                        <p className='services__text'>
                            There's no secret sauce, no wizard behind the curtain.
                            What makes Aerolab tick is an interdisciplinary team with a
                            framework that fosters candid collaboration.
                        </p>
                        <Link text='More know About us' />
                    </div>

                    <div className='services__rigth'>
                        <p className='services__description'>
                            With More than 10 Years of 
                            Knowledge and Expertise we 
                            Design and Code Websites and 
                            Apps, We Build Brands and Help 
                            Them Succeed
                        </p>
                        <div className='services__person-container'>
                            <div className="services__avatar">
                                <img src={avatarImg} alt="" />
                            </div>
                            <div className="services__person-info">
                                <span className='services__name'>Genevieve Rodriquez</span>
                                <span className='services__profession'>Founder & CEO, Webovio</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Line />
            </Container>
        </section>
    )
}

export default Services;