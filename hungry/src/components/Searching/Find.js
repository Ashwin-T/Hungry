import { useState} from 'react';
import { useHistory } from 'react-router';
const Find = () => {
    
    const [id, setId] = useState(null);
    const [id2, setId2] = useState(null);

    const history = useHistory();
    


    const handleSubmit= idz => { 
        console.log(idz);
        history.push(`/SeachRecpie/${idz}`)
           
    }
    const handleSubmit2= idz => { 
        console.log(idz);
        history.push(`/SeachRecpies/${idz}`)
           
    }


    return ( 
    <>  
        <div className="flexBoxContainer column"> 
            <h1>Search Recipes By...</h1>
            <form className="form">
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                </label>

                <input className = 'formz' type = 'text' value= {id} onChange = {(e)=> setId(e.target.value)} placeholder = 'Indian, Chinese, Mexican...'/>

                <button onClick = {()=>handleSubmit(`${id}`)} className="fav" style = {{  marginLeft: '0.75vw'}}>Submit</button>
                    
            </form>
            
            <form className="form">
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Food Type</h2>
                </label>

                <input className = 'formz' type = 'text' value= {id2} onChange = {(e)=> setId2(e.target.value)} placeholder = 'Seafood, Vegan, Chicken, Starter...'/>

                <button onClick = {()=>handleSubmit2(`${id2}`)} className="fav" style = {{  marginLeft: '0.75vw'}}>Submit</button>

            </form> 
        </div>
    </>
     );
}
 
export default Find;