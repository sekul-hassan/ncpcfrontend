import React, {Fragment} from 'react';
import "../Assets/CSS/About.css";
import About from "../OthersComponents/About";
import AboutContent from "../OthersComponents/AboutContent";
import TopMenu from "../Components/TopMenu";

function AboutPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <About/>
            <AboutContent/>
        </Fragment>
    );
}

export default AboutPage;