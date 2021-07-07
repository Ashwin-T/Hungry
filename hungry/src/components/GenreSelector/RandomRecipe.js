import {useState} from 'react';
import axios from 'axios'; 

const Recipe = () => {
    
    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`))

    const [path, setPath] =  useState({data: {meals: [{strMealThumb: null}, {strMeal: null}]}}); //dummy values

    const ApiCall = async() => {
        setPath(await getAxios())
    }
    
    return (
        <>
            <button onClick={()=> ApiCall()}> Get Random Recipe 🍽️</button>             
            <h1>{path.data.meals[0].strMeal}</h1>
            <img src = {path.data.meals[0].strMealThumb}></img>

        </>
    );
}
 
export default Recipe;