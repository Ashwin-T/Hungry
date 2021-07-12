import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import firebase from './Firebase';



const Favorite = () => {

    const db = firebase.firestore();
    const auth = firebase.auth();


    const [fav,setFav] = useState([]);

    useEffect(() => {
        db.collection(`${auth.currentUser.displayName}'s--Favs`)
        .onSnapshot((querySnapshot) => {
          setFav(querySnapshot.docs);
        });
        console.log(fav);
    }, []);

    return ( 
      <>
       <div>
            <div classname = 'flexBoxContainer'>
                <h3 className = 'columnz'>Showing {auth.currentUser.displayName.split(' ')[0]}'s Favorites</h3>
            </div>
            <div classname  = 'flexBoxContainer column'>
                {fav.map((favz) => (
                    <Link to = {`/Recipe/${favz.data().name}`} >
                        <img className = 'recipeItem' src = {favz.data().photo}></img>
                    </Link>
                ))}
           </div>
        </div>
    </>

    );
}
 
export default Favorite;