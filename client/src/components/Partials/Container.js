import { Box, Center } from '@chakra-ui/react';

const Container = (props) => {
    return(
        <Center bg={props.background} height={props.height} align="center">
                {props.children}
        </Center>
    )
}

export default Container;