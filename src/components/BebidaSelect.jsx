import { Modal, Image, Button, Alert } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import Spinner from './Spinner'

const BebidaSelect = () => {

    const { modal, handleModalClick, receta, cargando, favoritosClick, favoritosSelect } = useBebidas()
    
    const mostrarIngredientes = () => {
        let ingredientes = []

        for(let i = 1; i < 16; i++) {
            if(receta[`strIngredient${i}`]) { // forma de acceder a la propiedad de un objeto [], similar a receta.string
                 // Todos los q tengan algo en receta.strIngredient12 se agregaran a ingredientes por el push
                ingredientes.push(  // push modifica la variable original, no recomendable usar en un state
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }  
        }
        return ingredientes
    }

    const agregadoFavoritos = () => {
        alert('Agregado a Favoritos')
    }


    // Esta es un Modal el cual se muestra como una página por encima de la actual.
    return (
            <>
            {cargando ? <Spinner/> : (
                
                <Modal show={modal} onHide={ () => {handleModalClick() }}>
                    <Image
                        src={receta.strDrinkThumb}
                        alt={`imagen de la receta ${receta.strDrink}`}
                    />
                    <Modal.Header>
                        <Modal.Title>{receta.strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='p-3'>
                            <h2>Instrucciones</h2>
                            {receta.strInstructions}
                            <h2>Ingredientes y Cantidad</h2>
                            {mostrarIngredientes()}
                        </div>
                        <Button
                            className='w-100 text-uppercase mt-2'
                            variant='danger'
                            onClick={ () => {
                                favoritosClick(receta)
                                agregadoFavoritos()
                            }}
                        >Agregar a Favoritos</Button>
                    </Modal.Body>
                
                </Modal>
             )}
            </>
        
    )
}

export default BebidaSelect