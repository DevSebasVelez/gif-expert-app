import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories] );          //Forma 1 de agregar al estado al inicio
        // setCategories( cat => [newCategory, ...cat]  );       //Forma 2 de agregar al estado al final (solo cambiamos pos)
    }

    return (
        <>
            <h1>GifExpertApp</h1>


            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }                    //Prop onNewCategory(func)
            />


            {
                categories.map( category => {
                return (
                    <GifGrid key={ category } category={ category } />
                )
                })
            }


        </>

    );
}