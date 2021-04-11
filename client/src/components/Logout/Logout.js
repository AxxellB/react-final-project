import { logout } from '../../services/data';
import { Redirect } from 'react-router-dom';

function myLogOut (){
    sessionStorage.clear()
}

const Logout = () => {
    myLogOut();
    return (<Redirect to="/" />)
}

export default Logout;