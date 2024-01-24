import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from 'prop-types';


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );


  return (
    <>
        <h3>{category}</h3>

        {
            isLoading && ( <h2>Cargando...</h2> )                 //and lógico
        }

        <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem
                key   = { image.id }
                title = { image.title }
                url   = { image.url }
                //{...image}                                      //Esparcir todas las propiedades que vengan
              />
            ))
          }
        </div>
    </>
  )
}


GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}