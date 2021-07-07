import { useState } from 'react';

const Genre = () => {
    const allGenre = ['Italian','Indian','Japanese','Korean','Mexican','Cajun','Thai','Greek','Chinese','Lebanese','Japanese', 'Fast Food', 'American', 'Moroccan', 'Mediterranean', 'French', 'Spanish', 'German', 'Vietnamese', 'Turkish', 'Pakastani', 'Chicken', 'Pizza'];
    const [genre, setGenre] = useState(null);

    const generateRandomGenre  = () =>{
        setGenre(allGenre[(Math.floor(Math.random() * 22))]);
    }
    const searchMaps = ()=>{
        if (genre != null) {
            let url = `https://www.google.com/maps/search/${genre}`;
            window.open(url,'_blank');
        }

    }
    const searchDoordash = ()=>{
        if (genre != null) {
            let url = `https://www.doordash.com/search/store/${genre}`;
            window.open(url,'_blank');
        }
    }

    return ( 
    <>
        <h1>{genre}</h1>
        
        <button onClick={()=> generateRandomGenre()}>Click Here for Random Cuisine Genere</button> 
        
        <button onClick={()=>searchDoordash()}>Feel like ordering in? Click here to search doordash!</button>
        <button onClick={()=>searchMaps()}>Feel like going out? Click here to search google maps!</button>

    </>


    );
}
 
export default Genre;