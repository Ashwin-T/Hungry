import {Link, useHistory} from 'react-router-dom';
import firebase from 'firebase';


const Navz = () => {
  
  let history = useHistory();
  const auth = firebase.auth();
    const SignOut = () => {
      history.push("/");
      auth.signOut();
    }
     
    return (  

    <nav id="main-nav">
      <ul>
        <li>
          <Link to = '/' ><div style = {{color: '#FF6D00', textDecoration: 'none', fontSize: '2vh'}}>Hungry?</div></Link>
        </li>
        <li>
          <a href="#">Get Random...
            <span class="arrow">&#x25BC;</span>
          </a>
          <ul class="submenu">
            <li>
              <Link to = '/RandomRecipe'>Recipe</Link>
            </li>
            <li>
              <Link to = '/RandomGenre'>Cuisine Type</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to = '/SeachRecpie'>Search Recipe
          </Link>
        </li>
        <li>
          <Link to = '/Favorites'>⭐Favorites
          </Link>
        </li>
        <li>
          <a onClick={()=>SignOut()}>SignOut</a>
        </li>
      </ul>
    </nav>

    );
}
 
export default Navz;