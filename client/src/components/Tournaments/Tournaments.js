import { Component } from "react";

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Tournament from './Tournament';
import PageHeading from '../Partials/PageHeading'

import { Box, Spacer } from '@chakra-ui/react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import './Tournaments.css';

class Tournaments extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tournaments: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:5000/tournaments")
            .then(res => res.json())
                .then(res=> this.setState({tournaments: res}))
                    .catch(error => NotificationManager.error(error))

    }

    render() {
        console.log(this.state.tournaments)
        return (
            <>
                <Header />
                <NotificationContainer/>
                <PageHeading title="Tournaments"></PageHeading>
                <Box bg="#111217" minH={1000} className="wrapper">
                    {
                    this.state.tournaments.map(tournament =>
                    <Tournament key={tournament.id} title={tournament.title} date={tournament.date} image={tournament.image} 
                    time={tournament.time} server={tournament.server} format={tournament.format} slots={tournament.slots}>
                    </Tournament>)}
                </Box>
                <Footer />
            </>
        );
    }
}

export default Tournaments;