import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);             //state es inicialmente arreglo vacío
    const [isLoading, setIsLoading] = useState( true );

    const getImages =async () => {
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading( false );  //porque ya se cargaron
  }

    useEffect(() => {
        getImages( category );
  }, [])

    return {
        images: images,
        isLoading: isLoading,
    }
}
