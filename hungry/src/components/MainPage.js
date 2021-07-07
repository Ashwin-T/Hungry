// import SignIn from './components/Login/SignIn';
import Display from './Display/Display';
import Genre from './GenreSelector/Genre';
import Recipe from './GenreSelector/RandomRecipe'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const MainPage = () => {
    return (  
        <Router>
            <Switch>

                <Route exact path = '/'>
                    <Display/>
                </Route>

                <Route exact path = '/RandomGenre'>
                    <Genre/>
                </Route>

                <Route exact path = '/RandomRecipe'>
                    <Recipe/>
                </Route>

            </Switch>
        </Router>
    );
}
 
export default MainPage;