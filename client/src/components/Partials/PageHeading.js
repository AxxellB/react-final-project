import { Heading, Box } from '@chakra-ui/react';

const PageHeading = ({
    title
}) => {
    return (
        <Box align="center" bg="#111217" color="white">
            <Heading as="h1" pt={20} pb={20} fontSize={50}>{title}</Heading>
        </Box>
    );
}

export default PageHeading;