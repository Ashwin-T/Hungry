import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const MealDisplayType = () => {
    
    const {mealType} = useParams();
    const [path, setPath] = useState({data: {meals: [{strMealThumb: null}, {strMeal: null}, {idMeal: null}]}});
    const [mealz, setMealz] = useState([]);

    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealType}`))
    
    const ApiCall = async() => {
        var myPath = (await getAxios());
        setPath(myPath);
        var tempArray = [];
        for (let i = 0; i < myPath.data.meals.length; i++) {
            tempArray.push(myPath.data.meals[i])
        }

        const mealArray = tempArray;
        setMealz(mealArray); 
    }

    useEffect(() => {
        ApiCall();
    }, []);

    return ( 
        
        <div>
            <div classname = 'flexBoxContainer'>
                <h3 className = 'columnz'>Showing Recipes for: {mealType}</h3>
            </div>
            <div classname  = 'flexBoxContainer column'>
                {mealz.map((m) => (
                    <Link to = {`/Recipe/${m.strMeal}`} >
                        <img className = 'recipeItem'src = {m.strMealThumb}></img>
                    </Link>
                ))}
           </div>
        </div>

        );
}
 
export default MealDisplayType;