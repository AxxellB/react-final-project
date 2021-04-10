import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutUsElement from '../About/AboutUsElement';
import PageHeading from '../Partials/PageHeading';
import Container from '../Partials/Container';
import Alumni from '../Partials/Alumni';
import SectionHeading from '../Partials/SectionHeading'
import { GiTrophyCup } from 'react-icons/gi';
import { AiTwotoneRocket, AiFillCode, AiOutlineMail } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { Spacer } from '@chakra-ui/react';

const About = () => {
    return (
        <>
        <Header></Header>
        <PageHeading title="About Us"/>
        <AboutUsElement 
        title="Our Mission" 
        content1="We're working on a platform that offers online esports infrastructure to all the key stakeholders in the industry including players, 
        organizers and game developers."
        content2="We're a team of gamers, nerds, techies, athletes, creators and dreamers. A team made up of people who are the best at what they do. 
        We have worked at companies like Google, Microsoft, ESL, Twitch, and Spotify. Some of us have been professional esports players but we all 
        share a love for gaming. By merging both world-class technical and business expertise with years of esports experience, we've created a 
        platform that enables the full potential of esports and competitive gaming."
        subHeading1="What we do"
        subHeading2="Who we are"
        imageName="gamingCharacter.png">
        </AboutUsElement>
        <Container background="#F7F8FA" height={300}>
            <Spacer/>
            <Alumni title="2014" text="Founded" titleSize={70} textSize={24}></Alumni>
            <Spacer/>
            <Alumni title="40+" text="Employees" titleSize={70} textSize={24}></Alumni>
            <Spacer/>
            <Alumni title="$18M" text="Funding" titleSize={70} textSize={24}></Alumni>
            <Spacer/>
        </Container>
        <Container background="white" height={500}>
            <Spacer/>
            <Alumni title="Play" text="Easy access to esports no matter your skill-level." icon={<GiTrophyCup/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
            <Alumni title="Organize" text="Create competitions and monetize your community." icon={<AiTwotoneRocket/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
            <Alumni title="Develop" text="Launch, scale and monetize esports games." icon={<AiFillCode/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
        </Container>
        <Container background="#16171D" height={500}>
            <Spacer/>
            <Alumni title="Office" text="Söder Mälarstrand 71, 118 25 Stockholm, Sweden" color="white" icon={<GoLocation/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
            <Alumni title="Inquiries" text="team@gamerz.com" color="white" icon={<AiOutlineMail/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
            <Alumni title="Phone" text="+46(0)8 - 121 595 40" color="white" icon={<BsPhone/>} titleSize={35} textSize={20}></Alumni>
            <Spacer/>
        </Container>
        <Footer></Footer>
        </>
    );
}

export default About;