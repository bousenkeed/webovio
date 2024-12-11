import './clients.css'
import { clientsImagesArr } from '../../assets/data/data'
import Container from '../container/container';

function Clients() {
    return (
        <section className='clients'>
            <Container>
                <div className="clients__container">
                    {
                        clientsImagesArr.map((client) => {
                            return <div key={client.id} className='clients__img'>
                                <img src={client.src} alt={client.name} />
                            </div>
                        })
                    }
                </div>
            </Container>
        </section >
    )
}

export default Clients;