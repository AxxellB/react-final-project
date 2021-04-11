import { Switch, Route } from 'react-router-dom';

import './App.css';
import { Component } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePageAnimation from './components/HomePageAnimation/HomePageAnimation';
import Promotional from './components/Promotional/Promotinal';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import About from './components/About/About';
import Logout from './components/Logout/Logout';
import Tournaments from './components/Tournaments/Tournaments'
import Rules from './components/Rules/Rules';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }


    render(){
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Header username={this.state.username}></Header>
                    <HomePageAnimation></HomePageAnimation>
                    <Promotional></Promotional>
                    <Footer></Footer>
                </Route>
                <Route path="/about-us" component={About}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/rules" component={Rules}></Route>
                <Route path="/tournaments" component={Tournaments}></Route>
            </Switch>

        </>
    );
}
}

export default App;
