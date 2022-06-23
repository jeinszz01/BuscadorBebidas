import { Row, Col, Button, Image } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import img from '../img/favoritos.svg'
import useBebidas from '../hooks/useBebidas'
import BebidaFavorita from './BebidaFavorita'

const Favoritos = () => {

    const irFavoritos = () => {

    }
    const { favoritosSelect } = useBebidas()

    return (
        <>
            {/* <Row className='justify-content-end mt-2'>
                <Col md={3}>
                    <Button variant='danger' className='w-100' type='submit' onClick={irFavoritos()} >Ir a Favoritos <Image src={img} alt={'imagena'} /> </Button>
                </Col>
            </Row> */}
            
            <Accordion className='mt-2 mb-2' >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Ver Favoritos <Image src={img} alt={'imagena'} /> </Accordion.Header>
                    <Accordion.Body>
                        <Row className="mt-2">
                        {favoritosSelect.map(favorito => (
                            <BebidaFavorita
                                key={favorito.idDrink}
                                favorito={favorito}
                            />
                        ))}
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </>
    )
}

export default Favoritos