import logo from '../Logo.PNG';

const Display = () => {
    
    return (  
    
    <div className="flexBoxContainer columnz">
        <img className="logo" src = {logo} alt = 'logo'></img>
        <h3 className = 'homeText'>Hungry yet cant decide what to eat. 'Hungry?' can help you out. With the vast amount of features it allows you to choose a random cuisine, go out, order in, or make it yourself with our large collection of recipes. Explore cuisine from different cultures and eat to your stomach's extent!</h3>

    </div>

    );
}
 
export default Display;