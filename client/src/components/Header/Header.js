import HeaderItem from './HeaderItem/HeaderItem';
import React from 'react';
import { Link } from 'react-router-dom'
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/react';

const Header = props => {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.0rem"
            bg="gray.700"
            fontWeight={600}
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Link to="/">
                    <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                        GamerZ
                    </Heading>
                </Link>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                <svg
                    fill="white"
                    width="12px"
                    viewBox="0 0 20 20"
                >
                    <title>Header</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "flex" }}
                width={{ sm: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                _hover={{ cursor: 'pointer' }}
            >
                <HeaderItem link="about-us">About Us</HeaderItem>
                <HeaderItem link="contact-us">Contact Us</HeaderItem>
                <HeaderItem link="rules">Rules</HeaderItem>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Link to="/login">
                    <Button bg="transparent" border="1px" borderRadius="15">
                        Login
                </Button>
                </Link>
                <Link to="/register">
                    <Button bg="teal.300" ml="10px" border="1px" borderRadius="15" _hover={{ color: "teal.300", bg: "white" }}>
                        Register
                </Button>
                </Link>
            </Box>
        </Flex>
    );
};

export default Header;
