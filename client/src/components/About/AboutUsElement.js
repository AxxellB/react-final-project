import { Box, Heading, Text, Image, Flex, Spacer } from '@chakra-ui/react';

const AboutUsElement = ({
    title,
    content1,
    imageName,
    subHeading1,
    subHeading2,
    content2
}) => {
    const imageUrl = "../Promotional/" + imageName;
    return (
        <Flex alignItems="center" bg="#111217" color="white" padding="20px">
            <Spacer />
            <Box mr={100} width="500px">
                <Heading mb={10} as="h2" size="lg" fontSize={45} letterSpacing={"-.1rem"}>
                    {title}
                </Heading>
                <Heading mb={10} as="h3" size="lg" fontSize={32} letterSpacing={"-.1rem"}>{subHeading1}</Heading>
                <Text fontSize={20}>{content1}</Text>
                <Heading mt={10} mb={10} as="h3" size="lg" fontSize={32} letterSpacing={"-.1rem"}>{subHeading2}</Heading>
                <Text fontSize={20}>{content2}</Text>
            </Box>
            <Box>
                <Image src={imageUrl}></Image>
            </Box>
            <Spacer />
        </Flex>
    );
}

export default AboutUsElement;