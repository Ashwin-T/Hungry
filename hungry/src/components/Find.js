import { useState, useRef } from 'react';
const Find = () => {
    
    const [showMeal, setShowMeal] = useState(false);
    const [id, setId] = useState(null);

    const handleSubmit= (e) => {
        console.log(id);
        if(id != null){
            setShowMeal(true); 
        }
        console.log(showMeal);
    
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
                <form onSubmit={handleSubmit}>
                    <label >
                        <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                    </label>

                    <input className = 'formz' key="forms" value = {id} onChange = {(e)=> setId(e.target.value)} />

                    <button className="fav" style = {{  marginLeft: '0.75vw'}}><span>Submit</span></button>
                        
                    
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