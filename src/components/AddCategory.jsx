import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }


    const onSubmit = (event) => {
        // console.log('AVISO PARA TEST: Si se realizo el submit');
        event.preventDefault();                                        //Evita el full refresh del navegador con submit(enter)
        if( inputValue.trim().length <=1 ) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );                           //Usamos la propiedad -> es una función
        setInputValue('')                                             //Con cada enter reinicia el state
    }

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }           //O llamamos solo la Funcion: onChange={onInputChange}
            />
        </form>
    )
}



AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}