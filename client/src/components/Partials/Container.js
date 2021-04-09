import { Box } from '@chakra-ui/react';

const Container = (props) => {
    return(
        <Box bg={props.background} height={props.height} display="flex" align="center" justifyContent="center">
            {props.children}
        </Box>
    )
}

export default Container;