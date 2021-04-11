import { Text } from '@chakra-ui/react';

const Rule = ({
    text,
    number
}) => {
    return (
        <Text color="white" fontSize={35}>{number}. {text}</Text>
    )
}

export default Rule;