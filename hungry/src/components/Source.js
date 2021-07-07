import Display from './Display/Display';
import Genre from './GenreSelector/Genre';
import Recipe from './GenreSelector/RandomRecipe'
import Find from './Find/Find'
import Navz from './Navbar';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Source = () => {
    return (  
        <Router>
            <Navz/>
            <Switch>
                <Route exact path = '/'>
                    <Display/>
                </Route>

                <Route exact path = '/SeachRecpies'>
                    <Find/>
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
 
export default Source;