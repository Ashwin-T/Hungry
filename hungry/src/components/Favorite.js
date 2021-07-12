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
        <div>
        <ul>
          {fav.map((favz) => (
            <Link to = {`/Recipe/${favz.data().name}`}>
                <li> {favz.data().name} </li>
                <img src = {favz.data().photo}></img>
            </Link>
          ))}
        </ul>
      </div>
    );
}
 
export default Favorite;