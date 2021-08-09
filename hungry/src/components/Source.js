import Display from './Display/Display';
import Genre from './GenreSelector/Genre';
import Recipe from './GenreSelector/RandomRecipe'
import Find from './Searching/Find'
import MealDisplayType from './Searching/MealDisplayType'
import MealDisplayFood from './Searching/MealDisplayFood'
import Favorite from './Favorite';
import RecipeFinder from './Recipe'
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
               
                <Route path = '/Favorites'>
                    <Favorite/>
                </Route>
    

                <Route path = '/RandomGenre'>
                    <Genre/>
                </Route>

                <Route path = '/RandomRecipe'>
                    <Recipe/>
                </Route>

                <Route exact path = '/Recipe/:mealName' >
                    <RecipeFinder/>
                </Route>


                <Route exact path = '/SeachRecpie' >
                    <Find/>
                </Route>

                <Route exact path = '/SeachRecpie/:mealType' >
                    <MealDisplayType/>
                </Route>
                
                <Route exact path = '/SeachRecpies/:mealFood' >
                    <MealDisplayFood/>
                </Route>
               
            </Switch>
        </Router>
    );
}
 
export default Source;