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
            <Link to = '/' ><div style = {{color: '#FF6D00', textDecoration: 'none', fontSize: '1.5rem'}}>Hungry?</div></Link>
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
                <Link to = '/RandomGenre'>Cusine Type</Link>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Search Recipe...
              <span class="arrow">&#x25BC;</span>
            </a>
            <ul class="submenu">
              <li>
                <Link to = ''>By Cusine Type</Link>
              </li>
              <li>
                <Link to = ''>By Food Type</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">⭐Favorites</a>
          </li>
          <li>
            <a onClick={()=>SignOut()}>SignOut</a>
          </li>
        </ul>
      </nav>

    );
}
 
export default Navz;