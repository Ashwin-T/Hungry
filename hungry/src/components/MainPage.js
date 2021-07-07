import Source from './Source';
import SignIn from './Login/SignIn'
import firebase from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const MainPage = () => {
    const auth = firebase.auth();  
    const [user] = useAuthState(auth);

    return ( 
        <>
            {user ? <><Source /></> : <><SignIn /></>}
        </>
     )

}
 
export default MainPage;