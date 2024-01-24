import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);             //state es inicialmente arreglo vacío
    const [isLoading, setIsLoading] = useState( true );


    //Setea el state con el arreglo de imágenes que viene de la petición
    const getImages = async() => {
      const newImages = await getGifs( category );
      setImages(newImages);
      setIsLoading( false );        //porque ya se cargaron
  }

    useEffect(() => {
        getImages( category );
  }, [])

    return {
        images: images,
        isLoading: isLoading,
    }                               //ojo: es un objeto {}
}
