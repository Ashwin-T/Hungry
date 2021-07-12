import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';


const MealDisplayType = () => {
    
    const {mealType} = useParams();
    const [path, setPath] = useState({data: {meals: [{strMealThumb: null}, {strMeal: null}, {idMeal: null}]}});
    const [mealz, setMealz] = useState([]);
    const [empty, setEmpty] = useState(false);


    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${mealType}`))
    
    const ApiCall = async() => {
        var myPath = (await getAxios());
        setPath(myPath);
        var tempArray = [];
        if (myPath.data.meals !== null){
            for (let i = 0; i < myPath.data.meals.length; i++) {
                tempArray.push(myPath.data.meals[i])
            }
            setEmpty(false);
        }
        else{
            setEmpty(true);
        }
        const mealArray = tempArray;
        setMealz(mealArray); 
    }

    useEffect(() => {
        ApiCall();
    }, []);
    
    const TotalResults = () =>{
        return(
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
        )
    }

    const NotFound = () =>{
        return(
        <div className="flexBoxContainer column">
            <h1>404 No results found</h1>
            <br/>
            <br/>
            <br/>
            <Link to = '/SeachRecpie' style = {{textDecoration: 'underline'}}>
                Click here to go back
            </Link>
        </div>
        )
    }

    return ( 
        <>
            {empty ? <NotFound/> : <TotalResults/>}
        </>
        );
}
 
export default MealDisplayType;