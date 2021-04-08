import { Box,Heading } from '@chakra-ui/react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginForm from './LoginForm';


const Login = () => {
    return (
        <>
        <Header/>
        <Box align="center" bg="#111217" color="white" minH={600} padding={140}>
            <Heading as="h1" fontSize={50} mb={50}>Login</Heading>
            <LoginForm/>
        </Box>
        <Footer/>
        </>
    );
}

export default Login;