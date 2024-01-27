import React, {Fragment} from 'react';
import TopBanner from "../Components/TopBanner";
import AboutSection from "../Components/AboutSection";
import Support from "../Components/Support";
import Sponsor from "../Components/Sponsor";
import Alumni1 from "../Components/Alumni1";
import AboutNcpc from "../OthersComponents/AboutNcpc";
import Strategy from '../OthersComponents/Strategy';
import TopMenu from "../Components/TopMenu";
import EventDate from '../MyComponents/EventDate';
import ImageSlider from '../MyComponents/ImageSlider';
import MyAboutSection from '../MyComponents/MyAboutSection';
import ImageCard from '../MyComponents/ImageCard';
import strategyImageSrc1 from '../Assets/Images/dept/coding.jpg'
import EventDateWithNoticeBoard from '../MyComponents/EventDateWithNoticeBoard';

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <TopBanner/>
            <EventDateWithNoticeBoard/>
            <AboutSection/>
            <AboutNcpc/>
            <Alumni1/>
            <Strategy/>
            <Support/>
            <Sponsor/>
        </Fragment>
    );
}

export default Home;