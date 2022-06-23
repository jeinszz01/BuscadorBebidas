import { Button, Container, Row, Col, Image } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import { SliderProvider } from './context/SliderProvider'
import BebidaSelect from './components/BebidaSelect'
import Slider from './components/Slider'
import Favoritos from './components/Favoritos'

function App() {
  

    return (

        <CategoriasProvider>
            <BebidasProvider>
                <SliderProvider>
                <header className="py-5">
                    <h1>Buscador de Bebidas</h1>
                </header>
                
                <Container>
                    
                    <Favoritos />
                    
                    {/* <Slider /> */}

                    <Formulario />

                    <ListadoBebidas />

                    <BebidaSelect />
                </Container>
                </SliderProvider>
            </BebidasProvider>
        </CategoriasProvider>

    )
}

export default App
