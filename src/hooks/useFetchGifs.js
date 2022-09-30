import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const[isLoading, setIsLoading] = useState(true)// para crear un tiempo de carga

    const getImages = async() =>{
        const newImages = await getGifs( category )
        setImages(newImages)
        setIsLoading(false)
    } 

    useEffect( () => {
        getImages()
    }, [] )

    return {
        images: images,
        isLoading
    }
}

