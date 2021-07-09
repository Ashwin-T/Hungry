import { useState, useRef } from 'react';
import { useHistory } from 'react-router';
const Find = () => {
    
    const [id, setId] = useState(null);
    const history = useHistory();
    const form = useRef();

    const handleSubmit= idz => { 
        console.log(idz);
        history.push(`/SeachRecpie/${idz}`)
           
        
    }


    return ( 
    <>  
        <div className="flexBoxContainer column"> 
            <h1>Search Recipes By...</h1>
        </div>

        <div className="flexBoxContainer " style = {{justifyContent: 'center'}}>
            <form>
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                </label>

                <input className = 'formz' type = 'text' value= {id} onChange = {(e)=> setId(e.target.value)} placeholder = 'Indian, Chinese, Mexican...'/>

                <button onClick = {()=>handleSubmit(`${id}`)} className="fav" style = {{  marginLeft: '0.75vw'}}>Submit</button>
                
            </form>         
        </div>
    </>
     );
}
 
export default Find;