import { useContext } from "react";
import SliderContext from "../context/SliderProvider";

const useSliders = () => {

    return useContext(SliderContext)
}

export default useSliders