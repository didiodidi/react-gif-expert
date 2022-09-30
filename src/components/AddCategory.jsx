import { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({onNewCategory}) => {


    const [inputValue, setInputValue] = useState()

    const onInputChange = ({target})=> {
        // console.log(target.value);
        setInputValue(target.value);
    }

     const onSubmit = (event) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return // Si ponemos 1 caracter o nada no se inserta.
        //Trim elimina los espacios
        // setCategories( categories =>  [inputValue, ...categories]);

        onNewCategory( inputValue.trim() );
        setInputValue('');// Lo que hay en el input se borra a medida q voy insertando nuevos valores en el input
    }

    return (
        <form onSubmit = { (event) => onSubmit(event)} > {/* Se puede reducir a {onSubmit} */}
                <input 
                type="text" 
                placeholder = "Buscar gif"
                value = {inputValue}
                onChange = {onInputChange}
                />
        </form>  
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}



export default AddCategory


