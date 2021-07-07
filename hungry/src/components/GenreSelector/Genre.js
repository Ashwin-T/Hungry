import { useState } from 'react';

const Genre = () => {
    const allGenre = ['Italian','Indian','Japanese','Mexican','Korean','Mexican','Cajun','Thai','Greek','Chinese','Lebanese','Japanese', 'Fast Food', 'American', 'Moroccan', 'Mediterranean', 'French', 'Spanish', 'German', 'Vietnamese', 'Turkish', 'Pakastani', 'Chicken', 'Pizza'];
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
    <div className="flexBoxContainer column" >
        <div style = {{paddingTop: '2%'}}>
            <h1 style = {{fontSize: '5vw'}}>{genre}</h1>
        </div>
        <div className="flexBoxContainer" style = {{padding: '5%'}}>
            <button onClick={()=> generateRandomGenre()} className = 'buttonz'><span>Click Here for Random Cuisine Type🥖</span></button> 
        </div>

        <div className="flexBoxContainer space">
            <button onClick={()=>searchDoordash()} className = 'buttonz'><span>Staying in? Click here to search Doordash!</span></button>
            <button onClick={()=>searchMaps()} className = 'buttonz'><span>Going out? Click here to search GMaps!</span></button>
        </div>
      


    </div>


    );
}
 
export default Genre;