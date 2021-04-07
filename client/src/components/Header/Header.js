import HeaderItem from './HeaderItem/HeaderItem';
import React from 'react';
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
            color="white"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
                    GamerZ
          </Heading>
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
            >
                <HeaderItem>About</HeaderItem>
                <HeaderItem>Contact Us</HeaderItem>
                <HeaderItem>Rules</HeaderItem>
            </Box>

            <Box
                display={{ sm: show ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button bg="transparent" border="1px">
                    Login
                </Button>
                <Button bg="teal.300" ml="10px"  border="1px">
                    Register
                </Button>
            </Box>
        </Flex>
    );
};

export default Header;
