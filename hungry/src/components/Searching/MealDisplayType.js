import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';


const MealDisplayType = () => {
    
    const {mealType} = useParams();
    const [path, setPath] = useState({});
    const [meals, setMeals] = useState([]);

    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealType}`))
    
    const ApiCall = async() => {
        setPath(await getAxios());
        console.log(path);
    }

    const MealDisplay = () => {
        
        ApiCall();
        var tempArray = [];
        for (let i = 0; i < path.meals.length; i++) {
            tempArray.push(path.meals[i])
        }
        setMeals(tempArray);

        console.log(tempArray);
    }
     
    return ( 
        
        <div>
            <h3>Showing Recipes for: {mealType}</h3>
            <button onClick={()=> MealDisplay()}> Click here</button>
        </div>

        );
}
 
export default MealDisplayType;