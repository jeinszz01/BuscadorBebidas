import { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import useSliders from '../hooks/useSlider'
import Ruleta from './Ruleta'
import img from '../img/favoritos.svg'


const Slider = () => {

    const { sliders } = useSliders()

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    // setIndex(selectedIndex)
    // }        <Carousel activeIndex={index} onSelect={handleSelect}>
    

    //console.log(sliders[0])
    
    

    return (
        <>
        {/* <div>{sliders.map(slider => (
             <h1>xd</h1>
         ))}</div> */}
        <Ruleta
            key={sliders.idDrink}
            sliders={sliders}
        />

        </>
    )
}

export default Slider