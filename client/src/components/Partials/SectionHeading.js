import { Heading, Box } from '@chakra-ui/react';

const SectionHeading = ({
    title
}) => {
    return (
        <Box align="center" bg="#111217" color="white">
            <Heading as="h2" pt={20} pb={20} fontSize={45}>{title}</Heading>
        </Box>
    );
}

export default SectionHeading;