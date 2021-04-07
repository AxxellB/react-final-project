import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Facebook, Instagram, GitHub, Twitter } from 'react-feather';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Box
			py="10"
			as="footer"
			justify="space-between"
			fontSize={20}
			fontWeight={600}
            pt={120}
			bg="#111217">
			<HStack
				spacing={16}
				mb="10"
				justify="center"
				color="white"
				_hover={{ cursor: 'pointer' }}>
                <Link to="/">
				    <Text>Home</Text>
                </Link>
                <Link to="/rules">
				    <Text>Rules</Text>
                </Link>
                <Link to="/about">
				    <Text>About</Text>
                </Link>
                <Link to="/contact-us">
				    <Text>Contact Us</Text>
                </Link>
			</HStack>
			<HStack mb="10" spacing={50} justify="center" _hover={{cursor: "pointer"}}>
				<Box color="white" fontSize="md">
					<Facebook />
				</Box>
				<Box color="white" fontSize="md">
					<Instagram />
				</Box>
				<Box color="white" fontSize="md">
					<GitHub />
				</Box>
				<Box color="white" fontSize="md">
					<Twitter />
				</Box>
			</HStack>
			<Flex mr="10" justify="flex-end" color="white">
				&copy; GamerZ All rights reserved
			</Flex>
		</Box>
	);
};

export default Footer;