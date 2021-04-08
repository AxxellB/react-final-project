import { Box, Heading } from '@chakra-ui/react';

import RegisterForm from './RegisterForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Register = () => {
    return (
        <>
        <Header/>
        <Box align="center" bg="#111217" color="white" minH={600} padding={140}>
            <Heading as="h1" fontSize={50} mb={50}>Register</Heading>
            <RegisterForm></RegisterForm>
        </Box>
        <Footer/>
        </>
    );
}

export default Register;