import { logout } from '../../services/data';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    logout();
    <Redirect to="/" />
}

export default Logout;