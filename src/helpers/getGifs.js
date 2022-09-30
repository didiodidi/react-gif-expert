export const getGifs = async (category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=xP86THMFM0at0hM7ceCDK1LCCqqw0iko&q=${ category }&limit=10`
    const resp = await fetch( url ); // Recibo la Url 

    // 'data' es el Array [] que "OBTENGO" al llamar a la petición url usando el fetch que almacena en argumento la url. 
    const {data} = await resp.json();// transformo la Url en un json y desestructuro la la data del mismo para obtener todas las propiedades
    

    // Creo la la variable gifs para poder ir al id, title, url usando la data recibida por la desestructurización
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs // Retorno la funcion gif 
}