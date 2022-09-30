import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

// import { getGifs } from '../helpers/getGifs';





export const GifGrid = ({category}) => {






    const {images, isLoading} = useFetchGifs(category);


    /* getGifs(category) */; /* Nunca debo ejecutar una funcion en una functional component porque cada vez q halla un cambio esta reprosesa la llamada al api, va a estar utilizando un espacio en memoria cuando el componente se vuelva a renderizar. una vez que recibimos la categoria solo se debe ejecutar una sola vez esa funcion al margen que este se actualize,esto se logra con el hook useEfect. */


    return (
        <>

            <h3>{ category }</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
                {/* se usa className para las clases en jsx */}
            <div className="card-grid">
            { 
                images.map( (image) =>(
                    <GifItem 
                        key = { image.id}
                        // todas las propiedades que vienen en image se esparcen en el componente y se mandan a travez de prop
                        {...image}
                    />
                ))
            }           

                
            </div>
            
        </>
    )
}

 export default GifGrid
