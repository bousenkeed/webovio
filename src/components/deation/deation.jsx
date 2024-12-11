import './deation.css';
import Container from '../container/container';
import Line from '../elements/line/line';
import DeationItem from './deation-item';

function Deation() {
    return (
        <section className='deation'>
            <Container >
                <Line />
                <div className='deation__inner'>
                    <h2 className="deation__main-title">
                        Deation & Evaluation - Best Way to Kick off Your Product Idea
                    </h2>
                    <ul className="deation__list">
                        <DeationItem
                            title1='Product'
                            title2='Design Sprint'
                            subtitle='A five-day workshop that will help you answer crucial 
                            business questions'
                        />
                        <DeationItem
                            title1='Design'
                            title2='Sprint'
                            subtitle='A workshop aimed at shaping your business idea, 
                            answering questions regarding project planning'
                        />
                        <DeationItem
                            title1='UX'
                            title2='Review'
                            subtitle='An evaluation which will help you radically improve your product.'
                        />
                        <DeationItem
                            title1='Code'
                            title2='Review'
                            subtitle='Do you know what one of the key secrets of success 
                            is what makes people successful in business'
                        />
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default Deation;