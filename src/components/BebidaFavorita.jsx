import { Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const BebidaFavorita = ({favorito}) => {
    
    const { handleModalClick, handleBebidaIdClick } = useBebidas()

    return (
        
        <Col md={4} lg={2}> 
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={favorito.strDrinkThumb}
                    alt={`Imagen de ${favorito.strDrink}`}
                />
                
                <Card.Body>
                    <Card.Title>{favorito.strDrink}</Card.Title>

                    <Button
                        className='w-100 text-uppercase mt-2'
                        variant='warning'
                        onClick={ () => {
                            handleModalClick()
                            handleBebidaIdClick(favorito.idDrink)
                            /* Se puede tener varias funciones aqui */
                        }}
                    >Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default BebidaFavorita