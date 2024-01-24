import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue( event.target.value );
    }


    const onSubmit = (event) => {
        event.preventDefault();                                        //Evita el full refresh del navegador con submit(enter)
        if( inputValue.trim().length <=1 ) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );                           //Usamos la propiedad -> es una función
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ (event) => onInputChange(event) }           //O llamamos solo la Funcion: onChange={onInputChange}
            />
        </form>
    )
}

