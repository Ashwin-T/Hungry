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
        <div className="flexBoxContainer column" >
             <div className="space" >
                <button onClick={()=> ApiCall()} className = 'buttonz'> <span>Get Random Recipe 🍽️</span></button>  
            </div>           
        </div>
        <h1>{path.data.meals[0].strMeal}</h1>
        <img src = {path.data.meals[0].strMealThumb}></img>
    </>
    );
}
 
export default Recipe;