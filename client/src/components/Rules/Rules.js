import Header from '../Header/Header.js';
import Footer from '../Footer/Footer';
import PageHeading from '../Partials/PageHeading';
import SectionHeading from '../Partials/SectionHeading'

import { Box } from '@chakra-ui/react';
import Rule from './Rule.js';

const Rules = () => {
    return (
        <>
        <Header></Header>
        <PageHeading title="Rules"></PageHeading>
        <Box bg="#111217" minH={1000} align="center">
            <Rule number="1" text="Lorem ipsum and no cheating"></Rule>
            <Rule number="2" text="No scamming"></Rule>
            <Rule number="3" text="No smurfing"></Rule>
        </Box>
        <Footer></Footer>
        </>
    );
}

export default Rules;