import { Switch, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePageAnimation from './components/HomePageAnimation/HomePageAnimation';
import Promotional from './components/Promotional/Promotinal';
import Register from './components/Register/Register';
import Login from './components/Login/Login'

function App() {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Header></Header>
                    <HomePageAnimation></HomePageAnimation>
                    <Promotional></Promotional>
                    <Footer></Footer>
                </Route>
                <Route path="/about-us"></Route>
                <Route path="/register" component={Register}>
                </Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/logout"></Route>
                <Route path="/contact-us"></Route>
                <Route path="/tournaments"></Route>
            </Switch>

        </>
    );
}

export default App;
