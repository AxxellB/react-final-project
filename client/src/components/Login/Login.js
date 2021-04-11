import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Component } from "react";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Redirect } from 'react-router-dom';
import { login } from '../../services/data';



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (this.state.email.length < 1) {
            return NotificationManager.error("Email cannot be empty")
        }

        if (this.state.password.length < 1) {
            return NotificationManager.error("Password cannot be empty")
        }

        try {
            login(this.state.email, this.state.password);
            <Redirect to="/"></Redirect>
        }
        catch (err) {
            return NotificationManager.error("Wrong Username Or Password!");
        }
    }



    render() {
        return (
            <>
                <Header />
                <NotificationContainer/>
                <Box align="center" bg="#111217" color="white" minH={600} padding={140}>
                    <Heading as="h1" fontSize={50} mb={50}>Login</Heading>
                    <Box maxWidth={700}>
                        <form onSubmit={this.onSubmitHandler}>
                            <Box mb={30}>
                                <Text>Email</Text>
                                <Input type="email" name="email" id="email" onChange={this.onChangeHandler}></Input>
                            </Box>
                            <Box mb={30}>
                                <Text>Password</Text>
                                <Input mb={3} type="password" name="password" id="password" onChange={this.onChangeHandler}></Input>
                                <span>Don't have an account? <Link to="/register"><Text color="#4FD1C9" _hover={{ "color": "teal.100" }}>Register</Text></Link></span>
                            </Box>
                            <Button bg="teal.300" fontSize={30} padding={6} border="1px" borderRadius="15" _hover={{ color: "teal.300", bg: "white" }} type="submit">
                                Login
                            </Button>
                        </form>
                    </Box>
                </Box>
                <Footer />
            </>
        );
    }
}

export default Login;