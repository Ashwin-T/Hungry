import {useState} from 'react';
import axios from 'axios'; 
import firebase from '../Firebase';

const Recipe = () => {
    
    const db = firebase.firestore();
    const auth = firebase.auth();
    const getAxios = async() => (axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`))

    const [path, setPath] =  useState({data: {meals: [{strMealThumb: null}, {strMeal: null}]}}); //dummy values
 
    const [showResults, setShowResults] = useState(false);
    const [showButton, setShowButton] = useState(false);



    const ApiCall = async() => {
        setShowButton(true);
        setShowResults(true);
        setPath(await getAxios());
    }
    
    const handleFav = () =>{
        if (path.data.meals[0].strMeal != null){
            db.collection(`${auth.currentUser.displayName}'s--Favs`).doc(`${path.data.meals[0].strMeal}`).set({
                id: path.data.meals[0].idMeal,
                name: path.data.meals[0].strMeal
            });
        } 
    }
    const handleYoutube = () =>{
        if (path.data.meals[0].strMeal != null) {
            let url = path.data.meals[0].strYoutube;
            window.open(url,'_blank');
        }
    }
    const Results = () => {
        return (  
        <>
            <div className="space instruc">
                <h3>{path.data.meals[0].strInstructions} </h3>
            </div> 

        <div className="flexBoxContainer">
            <div>
                <img className = 'mealPhoto' src = {path.data.meals[0].strMealThumb} ></img>
                <h3> <button className = 'fav' onClick={()=>handleYoutube()}><span>Stuck? Click here for a video demo</span></button></h3>
            </div>  
            <div className = 'meal'>
                <ul>
                    <h2> Ingredients</h2>
                    <li>
                        {path.data.meals[0].strMeasure1} {path.data.meals[0].strIngredient1}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure2} {path.data.meals[0].strIngredient2}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure3} {path.data.meals[0].strIngredient3}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure4} {path.data.meals[0].strIngredient4}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure5} {path.data.meals[0].strIngredient5}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure6} {path.data.meals[0].strIngredient6}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure7} {path.data.meals[0].strIngredient7}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure8} {path.data.meals[0].strIngredient8}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure9} {path.data.meals[0].strIngredient9}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure10} {path.data.meals[0].strIngredient10}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure11} {path.data.meals[0].strIngredient11}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure12} {path.data.meals[0].strIngredient12}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure13} {path.data.meals[0].strIngredient13}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure14} {path.data.meals[0].strIngredient14}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure15} {path.data.meals[0].strIngredient15}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure16} {path.data.meals[0].strIngredient16}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure17} {path.data.meals[0].strIngredient17}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure18} {path.data.meals[0].strIngredient18}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure19} {path.data.meals[0].strIngredient19}
                    </li>
                    <li>
                        {path.data.meals[0].strMeasure20} {path.data.meals[0].strIngredient20}
                    </li>
                    </ul>
                </div>
        </div> 
         
        </>
        );
    }
    const FavButton = () => {
        return (  
            <button className = 'fav' onClick = {()=>handleFav()}><span>Favorite</span></button>
        );
    }
    
     
    return (
    <>
        <div className="flexBoxContainer column" >
             <div className="space" >
                <button onClick={()=> ApiCall()} className = 'buttonz'> <span>Get Random Recipe 🍽️</span></button>  
            </div>

             <div className="space " style ={{paddingTop: '3vh', textDecoration: 'underline'}}>
                <h1>{path.data.meals[0].strMeal}</h1>
                { showButton ? <FavButton /> : null }
            </div> 
          
             { showResults ? <Results /> : null }

      
        </div>

       


    </>
    );
}
 
export default Recipe;