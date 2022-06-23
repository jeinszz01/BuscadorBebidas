import { useState, useEffect, createContext } from "react"
import axios from "axios"

const SliderContext = createContext()

const SliderProvider = ({children}) => {

    const [sliders, setSliders] = useState([])

    // Consultamos la api y obtenemos las categorías para enlistarlas en nuestro input
    
    
    useEffect(() => {
        const obtenerMilk = async () => {
            try {
                const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=milk'
                const { data } = await axios(url)
                setSliders(data.drinks)
    
            } catch (error) {
                console.log(error)
            }
        }
        obtenerMilk()
    }, [])
    

    return (
        <SliderContext.Provider
            value={{
                sliders
            }}
        >
            {children}
        </SliderContext.Provider>
    )
}



export {
    SliderProvider
}

export default SliderContext