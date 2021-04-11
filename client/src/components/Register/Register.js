import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import About from '../About/About'

import { Component } from 'react';
import { Box, Text, Input, FormControl, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { login, register, checkRes } from '../../services/data';
import { nameValidation, emailValidation, passwordValidation, passwordMatchValidation } from '../../validations/validations';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Redirect } from 'react-router-dom';


class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            registered: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }


    async onSubmitHandler(e) {
        e.preventDefault();

        if (nameValidation('Username', this.state.username)) {
            return NotificationManager.error(nameValidation('Username', this.state.username));
        }

        if (emailValidation(this.state.email)) {
            return NotificationManager.error(emailValidation(this.state.email));
        }

        if (passwordValidation(this.state.password)) {
            return NotificationManager.error(passwordValidation(this.state.password));
        }

        if (passwordMatchValidation(this.state.password, this.state.confirmPassword)) {
            return NotificationManager.error(passwordMatchValidation(this.state.password, this.state.confirmPassword))
        }

        try{ 
            const result = await register(this.state.username, this.state.email, this.state.password);
            checkRes(result);
            NotificationManager.success("Registration was successfull");
            this.setState({registered: true})
        }
        catch( error ) {
            NotificationManager.error(error);
        }

    
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        if (this.state.registered === true){
            return <Redirect to="/login" />
        }
        return (<>
            <Header />
            <NotificationContainer />
            <Box align="center" bg="#111217" color="white" minH={600} padding={140}>
                <Heading as="h1" fontSize={50} mb={50}>Register</Heading>
                <Box maxWidth={700}>
                    <form onSubmit={this.onSubmitHandler}>
                        <Box mb={30}>
                            <Text>Username</Text>
                            <Input type="text" name="username" id="username" value={this.state.username} onChange={this.onChangeHandler}></Input>
                        </Box>
                        <Box mb={30}>
                            <Text>Email</Text>
                            <Input type="email" name="email" id="email" value={this.state.email} onChange={this.onChangeHandler}></Input>
                        </Box>
                        <Box mb={30}>
                            <Text>Password</Text>
                            <Input type="password" name="password" id="password" value={this.state.password} onChange={this.onChangeHandler}></Input>
                        </Box>
                        <Box mb={30}>
                            <Text>Confirm Password</Text>
                            <Input mb={3} type="password" name="confirmPassword" id="confirmPassword" value={this.state.confirmPassword} onChange={this.onChangeHandler}></Input>
                            <span>Already a member? <Link to="/login"><Text color="#4FD1C9" _hover={{ "color": "teal.100" }}>Log In</Text></Link></span>
                        </Box>
                        <Button bg="teal.300" fontSize={30} padding={6} border="1px" borderRadius="15" _hover={{ color: "teal.300", bg: "white" }} type="submit">
                            Register
                    </Button>
                    </form>
                </Box>
            </Box>
            <Footer />
        </>
        );
    }
}

export default Register;