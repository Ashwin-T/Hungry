import { useState } from 'react';
import {useHistory} from 'react-router-dom'
import iconDoordash from '../../images/dash.jpg'
import iconMaps from '../../images/maps2.png'

const Genre = () => {
    const allGenre = ['Italian','Indian','Japanese','Mexican','Korean','Mexican','Cajun','Thai','Greek','Chinese','Lebanese','Japanese', 'Fast Food', 'American', 'Moroccan', 'Mediterranean', 'French', 'Spanish', 'German', 'Vietnamese', 'Turkish', 'Pakastani', 'Chicken', 'Pizza'];
    const [genre, setGenre] = useState(null);
    const history = useHistory();
    const [clicked, setClicked] = useState(false);

    const generateRandomGenre  = () =>{
        setGenre(allGenre[(Math.floor(Math.random() * 22))]);
        setClicked(true);
    }
    const searchMaps = ()=>{
        if (genre != null) {
            let url = `https://www.google.com/maps/search/${genre}%20Food`;
            window.open(url,'_blank');
        }

    }
    const searchDoordash = ()=>{
        if (genre != null) {
            let url = `https://www.doordash.com/search/store/${genre}`;
            window.open(url,'_blank');
        }
    }

    const Buttons = ()=>{
        return(
            <div className="flexBoxContainer row" >
                <img onClick={()=>searchDoordash()} src = {iconDoordash} className = 'icon1'></img>
                <img onClick={()=>searchMaps()} src = {iconMaps} className = 'icon2'></img>
            </div>


        )
    }



    return ( 
    <div className="flexBoxContainer column" >
        <div style = {{paddingTop: '2%'}}>
            <h1 style = {{fontSize: '5.5vw'}}>{genre}</h1>
        </div>
        <div className="flexBoxContainer" style = {{padding: '5%'}}>
            <button onClick={()=> generateRandomGenre()} className = 'buttonz'><span>Click Here for Random Cuisine Type🥖</span></button> 
        </div>

        {clicked ? <Buttons/> : null}
      
      


    </div>


    );
}
 
export default Genre;