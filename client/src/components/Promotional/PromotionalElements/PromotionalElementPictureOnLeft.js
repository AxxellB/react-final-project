import { Box, Heading, Text, Image, Flex, Spacer } from '@chakra-ui/react';

const PromotionalElementPictureOnLeft = ({
    title,
    content,
    imageName
}) => {
    const imageUrl = "./Promotional/" + imageName;
    return (
        <Flex alignItems="center" bg="#111217" color="white" padding="20px">
            <Spacer />
            <Box>
                <Image src={imageUrl}></Image>
            </Box>
            <Box width="500px">
                <Heading mb={10} as="h2" size="lg" fontSize={50} letterSpacing={"-.1rem"}>
                    {title}
                </Heading>
                <Text fontSize={20}>{content}</Text>
            </Box>
            <Spacer/>
        </Flex>
    );
}

export default PromotionalElementPictureOnLeft;