import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const MealDisplayTypeFood = () => {
    const {mealFood} = useParams();
    const [path, setPath] = useState({data: {meals: [{strMealThumb: null}, {strMeal: null}, {idMeal: null}]}});
    const [mealz, setMealz] = useState([]);

    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealFood}`))
    
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
            <h3>Showing Recipes for: {mealFood}</h3>
            {mealz.map((m) => (
                <div>
                    <Link to = {`/Recipe/${m.strMeal}`} >
                        <div>{m.strMeal}</div>
                        <img src = {m.strMealThumb}></img>
                    </Link>
                </div>
            ))}
           
        </div>

        );
}
export default MealDisplayTypeFood;