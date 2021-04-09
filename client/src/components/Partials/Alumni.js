import { Heading, Text, Box } from '@chakra-ui/react'; 

const Alumni = ({
    title,
    text,
    icon,
    titleSize,
    textSize
}) => {
    return (
        <Box padding={20}>
            <Box fontSize={35}>{icon}</Box>
            <Heading as="h3" fontSize={titleSize}>{title}</Heading>
            <Text fontSize={textSize} fontWeight={100}>{text}</Text>
        </Box>
    );
}

export default Alumni;