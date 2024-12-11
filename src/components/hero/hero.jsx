import './hero.css'
import Container from '../container/container';
import Link from '../elements/link/link';

function Hero() {
    return (
        <div className='hero'>
            <Container>
                <div className='hero__inner'>
                    <span className="hero__subtitle">A place where</span>
                    <h1 className="hero__title">A creative agency for redemptive brands</h1>
                    <p className="hero__text">Anteelo is a leading strategic design firm that builds powerful digital solutions for startups and enterprises.</p>
                    <Link text='Get in touch'/>
                </div>
            </Container>
        </div>
    )
}

export default Hero;