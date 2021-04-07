import { Box, Heading, Text, Image, Flex, Spacer } from '@chakra-ui/react';

const PromotionalElementPictureOnRight = ({
    title,
    content,
    imageName
}) => {
    const imageUrl = "./Promotional/" + imageName;
    return (
        <Flex alignItems="center" bg="#111217" color="white" padding="20px">
            <Spacer />
            <Box mr={100} width="500px">
                <Heading mb={10} as="h2" size="lg" fontSize={50} letterSpacing={"-.1rem"}>
                    {title}
                </Heading>
                <Text fontSize={20}>{content}</Text>
            </Box>
            <Box>
                <Image src={imageUrl}></Image>
            </Box>
            <Spacer />
        </Flex>
    );
}

export default PromotionalElementPictureOnRight;