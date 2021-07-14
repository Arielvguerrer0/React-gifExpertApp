import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
  
/*     // funcion para agregar un objeto al arreglo. 
    const handleAdd = () => {
        setCategories([ ...categories, 'HunterxHunter']);
        //segunda forma de hacer la funcion 
        //setCategories( cats => [...cats,'HunterxHunter']);
    } */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>
            <ol>
                {
                    categories.map(category => (
                    <GifGrid
                        key={ category }
                        category={ category }/>
                    ))
                }
            </ol>

        </>
    )
}
