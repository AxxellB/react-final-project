import { Button, Box, Heading } from '@chakra-ui/react';

import PromotionalElementPictureOnRight from "./PromotionalElements/PromotionalElementPictureOnRight";
import PromotionalElementPictureOnLeft from "./PromotionalElements/PromotionalElementPictureOnLeft";

const Promotional = () => {
    return (
        <>
            <PromotionalElementPictureOnRight
                title="Tournaments for everyone."
                content="Free tournaments for players of all skill-levels in the best esports games."
                imageName="graph.png"
            />
            <PromotionalElementPictureOnLeft
                title="Spaces - your own esports arena."
                content="Join communities of other gamers and find tournaments from the best organizers, or build a new community of your own."
                imageName="card-subscribe.png"
            />
            <PromotionalElementPictureOnRight
                title="Claim your rank."
                content="Play matchmaking and tournaments to claim your Tier and earn a place on the leaderboard - the official ranking on Challengermode."
                imageName="ranks.png"
            />
            <PromotionalElementPictureOnLeft
                title="Esports matches on-demand."
                content="Matchmaking queues open 24/7 for quick and fun games. The best and most active players win prizes every week."
                imageName="esports.png"
            />
            <Box align="center" bg="#111217" color="white">
                <Heading as="h2" fontSize="60" mb="20">Ready to join? It's free</Heading>
                <Button align="center" fontSize="30" padding="8" bg="teal.400" borderRadius="40" _hover={{ color:"teal.300", bg:"white" }}>
                    Join Now
                </Button>
            </Box>
        </>
    )
}

export default Promotional;