import Tournaments from "./Tournaments";

import { Box, Text, Image, Heading, } from '@chakra-ui/react';

const Tournament = ({
    image,
    title,
    date,
    time,
    server,
    format,
    slots
}) => {
    const imagePath = `./${image}.png`
    return (
    <Box bg="#111217" color="white" align="center" width={400} height={400} mb={120}>
        <Image src={imagePath} padding={5}></Image>
        <Text color="#8A8E95" fontWeight={600}>{date} AT {time}</Text>
        <Heading as="h4">{title}</Heading>
        <Text color="#8A8E95">{server} • {format} • FREE • {slots} slots</Text>
    </Box>
    );
}

export default Tournament