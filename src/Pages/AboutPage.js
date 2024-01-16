import React, {Fragment} from 'react';
import "../Assets/CSS/About.css";
import About from "../OthersComponents/About";
import AboutContent from "../OthersComponents/AboutContent";

function AboutPage(props) {
    return (
        <Fragment>
            <About/>
            <AboutContent/>
        </Fragment>
    );
}

export default AboutPage;