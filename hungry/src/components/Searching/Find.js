import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
const Find = () => {
    

    const [runable, setRunable] = useState(true);

    const [id, setId] = useState(null);
    const [id2, setId2] = useState(null);

    const history = useHistory();
    
    useEffect(() => {
        if (window.innerWidth < 510){
            setRunable(false);
        }
        else{
            setRunable(true);
        }
    }, []);



    const handleSubmit= idz => { 
        console.log(idz);
        history.push(`/SeachRecpie/${idz}`)
           
    }
    const handleSubmit2= idz => { 
        console.log(idz);
        history.push(`/SeachRecpies/${idz}`)
           
    }

    const TotalResults = () =>{
        return(<div className="flexBoxContainer column"> 
            <h1>Search Recipes By...</h1>
            <form className="form">
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Cuisine Type</h2>
                </label>

                <input className = 'formz' type = 'text' value= {id} onChange = {(e)=> setId(e.target.value)} placeholder = 'Indian, Chinese, Mexican...'/>

                <button onClick = {()=>handleSubmit(`${id}`)} className="fav" style = {{  marginLeft: '0.75vw'}}>Submit</button>
                    
            </form>
            <h1 style = {{marginTop: '4vh'}}>or</h1>
            <form className="form">
                <label >
                    <h2 style = {{color: '#FF6D00'}}>Food Type</h2>
                </label>

                <input className = 'formz' type = 'text' value= {id2} onChange = {(e)=> setId2(e.target.value)} placeholder = 'Seafood, Vegan, Chicken, Starter...'/>

                <button onClick = {()=>handleSubmit2(`${id2}`)} className="fav" style = {{  marginLeft: '0.75vw'}}>Submit</button>

            </form> 
        </div>)
    }


    return ( 
    <>  
       

        {runable ? <TotalResults/> : <h1 style = {{textAlign: 'center', marginTop: '40vh'}}>This service is not avaiable for a smaller mobile device. Switch to a larger device to have full access.</h1>}

    </>
     );
}
 
export default Find;