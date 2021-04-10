import { Heading, Text, Box } from '@chakra-ui/react'; 

const Alumni = ({
    title,
    text,
    icon,
    titleSize,
    textSize,
    color
}) => {
    return (
        <Box padding={20} color={color}>
            <Box fontSize={35}>{icon}</Box>
            <Heading as="h3" fontSize={titleSize}>{title}</Heading>
            <Text fontSize={textSize} fontWeight={100} maxW={250}>{text}</Text>
        </Box>
    );
}

export default Alumni;