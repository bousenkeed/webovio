import './amazing.css';
import Container from '../container/container';
import Link from '../elements/link/link';

function Amazing() {
    return (
        <section className="amazing">
            <Container>
                <div className="amazing__container">
                    <h2 className="amazing__title">
                        Let's make something amazing together.
                    </h2>
                    <Link text={`LET'S GET STARTED`} />
                </div>
            </Container>
        </section>
    )
}

export default Amazing;