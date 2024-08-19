import React, { useEffect, useState } from 'react'
import Cards from '../Cards.jsx'
import "../../index.css"

const Recipes = () => {
    const [recipes, setRecipe] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data?.recipes)
                console.log("data is here", data.recipes)

            }).catch((error) => {
                console.log("error", error)
            })
    },[])
    if(!recipes){
        return(
            <div>Loading ...</div>
        )
    }

    // console.log(recipes,"recipes");
    

    return (
    


            <div className='recipe-div'>
        


                    {
                         recipes?.map((item, index)=>{
                            return(
                              
                                    <Cards data={item} key={index} />
                    
                            )
                        })
                    }
           


            </div>
        
    )
}

export default Recipes
