import React, {Fragment} from 'react';
import TopBanner from "../Components/TopBanner";
import AboutSection from "../Components/AboutSection";

import Alumni1 from "../Components/Alumni1";
import AboutNcpc from "../OthersComponents/AboutNcpc";

import TopMenu from "../Components/TopMenu";

import EventDateWithNoticeBoard from '../MyComponents/EventDateWithNoticeBoard';
import StrategyCards from '../MyComponents/StrategyCards';
import SupportedBy from '../MyComponents/SupportedBy';
import HostedBy from '../MyComponents/HostedBy';
import GoldSponsors from '../MyComponents/Gold Sponsors';
import PlatinumSponsors from '../MyComponents/PlatinumSponsors';
import SilverSponsors from '../MyComponents/SilverSponsors';

function Home(props) {
    return (
        <Fragment>
            <TopMenu/>
            <TopBanner/>
            <EventDateWithNoticeBoard/>
            <AboutSection/>
            <AboutNcpc/>
            <Alumni1/>
            <StrategyCards/>
            <HostedBy/>
            <SupportedBy/>
            <PlatinumSponsors/>
            <GoldSponsors/>
            <SilverSponsors/>
            <div style={{height:"20px"}}></div>
        </Fragment>
    );
}

export default Home;