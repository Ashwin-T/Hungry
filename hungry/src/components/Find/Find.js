import { useState, useRef } from 'react';
const Find = () => {
    
    const [showMeal, setShowMeal] = useState(false);
    const [id, setId] = useState(null);

    const HandleSubmit= () => {
        if(id != null){
            setShowMeal(true); 
            
        }
    
    }

    const ShowPreview = () =>{
        return(
        <>   
            <div className="flexBoxContainer column"> 
                <h1>Search Recipes By...</h1>
            </div>

            <div className="flexBoxContainer " style = {{justifyContent: 'center', marginTop: '10vh'}}>
                <form>
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                </label>
                <input className = 'formz' type="text" value = {id} onChange = {(e)=> setId(e.target.value)} placeholder="Indian, Italian, Mexican..." />

                <input type="submit" onClick = {()=> HandleSubmit()}className="fav" style = {{  marginLeft: '0.75vw'}}><span>Submit</span></input>
                
                </form>            
            </div>
        </>
        );
    }
    const Meal = (props) => {
        return ( <div> {props.id}</div>);
    }
     
       
    return ( 
    <>  
       {showMeal ?<Meal id = {id}/>:  <ShowPreview/>}
    </>
     );
}
 
export default Find;