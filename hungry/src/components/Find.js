import { useState, useRef } from 'react';
const Find = () => {
    
    const [showMeal, setShowMeal] = useState(false);
    const [id, setId] = useState(null);

    const form = useRef();

    const handleSubmit= () => {
            setId(form.target.value);
            console.log(id);
            console.log(showMeal);
            if(id != null){
                setShowMeal(true); 
            }
           
        
    }

    const MealShowCase = (props) => {
        return ( <div> {props.id}</div>);
    }

    const ShowPreview = () =>{
        return(
            <div>   
                <div className="flexBoxContainer column"> 
                    <h1>Search Recipes By...</h1>
                </div>

                <div className="flexBoxContainer " style = {{justifyContent: 'center', marginTop: '10vh'}}>
                <form>
                    <label >
                        <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                    </label>

                    <input className = 'formz' type = 'text' ref= {form} />

                    <input type = 'submit' onClick = {()=>handleSubmit}className="fav" style = {{  marginLeft: '0.75vw'}} value = 'Submit'></input>
                        
                    
                    </form>         
                </div>
            </div>
        );
    }
    
     
       
    return ( 
    <>  
      {showMeal ? <MealShowCase id = {id}/> : <ShowPreview/>}
    </>
     );
}
 
export default Find;