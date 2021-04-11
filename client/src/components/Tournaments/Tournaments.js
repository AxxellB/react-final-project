import { Component } from "react";

import Header from '../Header/Header';
import Footer from '../Footer/Footer'

class Tournaments extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <>
                <Header/>
                <Footer/>
            </>
        );
    }
}

export default Tournaments;