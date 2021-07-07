import { Link } from 'react-router-dom'
const Display = () => {
    
    return (  
    
    <div className="flexBoxContainer">
        <Link to = '/RandomGenre'>
            <button>Random Genre of Cuisine</button>   
        </Link>
        <Link to = '/RandomRecipe'>
            <button>Random Recipe</button>   
        </Link>
    </div>

    );
}
 
export default Display;