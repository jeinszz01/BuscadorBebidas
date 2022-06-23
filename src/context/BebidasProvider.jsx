import { useState, useEffect, createContext } from "react"
import axios from "axios"

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [ bebidas, setBebidas ] = useState([])
    const [ modal , setModal ] = useState(false)     // Modal para ver y ocultar cuando se le llame.....
    const [ bebidaId, setBebidaId ] = useState(null)    // state para obtener el id y hacer la consulta a la API
    const [ receta, setReceta ] = useState({})
    const [ cargando, setCargando ] = useState(false)
    const [ favoritosSelect, setFavoritosSelect ] = useState([])

    useEffect(() => {
        setCargando(true)
        const obtenerReceta = async () => {
            if (!bebidaId) return //si bebidaId esta vacion o esta como null ya no ejecutara las sigt lineas.

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
                const { data } = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    }, [bebidaId])
    
    //Primero se hace esta consultada
    const consultarBebida = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)

        } catch (error) {
            console.log(error)
        }
    }

    // Cambiamos el estado del modal
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    const favoritosClick = fav => {
        setFavoritosSelect([...favoritosSelect, fav])
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando,
                favoritosSelect,
                favoritosClick
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}



export {
    BebidasProvider
}

export default BebidasContext