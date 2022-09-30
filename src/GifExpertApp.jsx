import {useState} from 'react'
import {AddCategory, GifGrid}from './components';// Index no va porque automaticamente apunta a este


export const GifExpertApp = () => {

    /* Cuando queremos almacenar info, usar hook para mantener el estado useState---> */

    const [categories, setCategories] = useState(['One Punch']);

    /* Mandar el value del input. */

    const onAddCategory = (newCategory) => {
        /* Validar para que no se repitan los nombres */
        if(categories.includes(newCategory)) return  /* Includes incluye un nuevo elemento */
         /* Si no detecta un string que ya esta no lo vuelve a incluir */
         setCategories([newCategory,...categories])
        /* setCategories(cat => [...cat, cat]) */
    }

    /* TAREA
    const onAddCategory = ()=> {
        categories.push('Valorant') // PUSH MUTA EL OBJETO, HAY Q EVITARLAS EN REACT.
        console.log(categories);
         HAY QUE CREAR UN NUEVO ARREGLO; PARA OCUPARLO USAMOS EL setCategory
            setCategory hay que usarlo cuando queremos modificar las categorias
    }

    SOLUCIÓN 1

    const onAddCategory = ()=> {
        setCategories(['Valorant',...categories])

    USO SPREAD, HACE UNA COPIA DE TODAS LOS ELEMENTOS QUE HAY EN EL ARRAY DEL useState y AL FINAL COLOCO EL NUEVO STRING QUE VA A SER EL NUEVO ELEMENTO DEL ARRAY.
    

    SOLUCIÓN 2

    const onAddCategory = ()=> {
        setCategories(cat => [...cat, 'Valorant'])// 
        //Creo una funcion en flecha desestructuro categories y añadp Valorant usando callback por setCategories al useState ,(setCategories devuelve el nuevo valor al useState)NO SE PUEDEN INSERTAR MAS DE 2 POR EL KEY.
    }
     */


    
    
    
    

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>  

            {/* input  */}
            <AddCategory

                
                
                onNewCategory = {(value) => onAddCategory(value)}

             />
            {/* Listado de Grid */}    
            <button onClick={onAddCategory}>Agregar</button>
            {/* Input */}
                    {
                    categories.map( ( category ) => (
                            <GifGrid 
                            key = { category } 
                            category={ category }
                            />
                        ))
                    }
        </>
    )
}

export default GifExpertApp
    