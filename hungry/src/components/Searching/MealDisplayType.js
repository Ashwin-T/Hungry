import { useParams } from "react-router";
import { useState } from "react";
import axios from 'axios';


const MealDisplayType = () => {
    
    const {mealType} = useParams();
    const [path, setPath] = useState({});
    const [meals, setMeals] = useState([]);
    const [loadingState, setloadingState] = useState(true);

    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealType}`))
    
    const ApiCall = async() => {
        setPath(await getAxios());
    }

    const MealDisplay = () => {
        
        ApiCall();

        var tempArray = [];
        for (let i = 0; i < path.data.meals.length; i++) {
            tempArray.push(path.data.meals[i])
        }
        setMeals(tempArray);

        if (meals != {}){
            setloadingState(false);
        }

     
    }

    
    const Loading = () => {
        return (
            <div className = 'flexBoxContainer column'>Getting Recipes...</div>
        )
    }

    
    return ( 
        
        <div>
            {loadingState ? <Loading/>: null}
            {/* <h3>Showing Recipes for: {mealType}</h3> */}
        </div>

        );
}
 
export default MealDisplayType;