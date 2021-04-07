import { Box } from '@chakra-ui/react';
import ReactPlayer from "react-player";

const HomePageAnimation = () => {
    return (
        <Box maxW="2000px">
            <video width="100%" autoPlay src='./mystory.mp4' type="video/mp4" muted loop/>
        </Box>
    );
}

export default HomePageAnimation;