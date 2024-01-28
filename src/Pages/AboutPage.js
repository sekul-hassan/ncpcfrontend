import React, {Fragment} from 'react';
import "../Assets/CSS/About.css";
import AboutContent from "../OthersComponents/AboutContent";
import TopMenu from "../Components/TopMenu";
import AboutPageImageSlider from '../MyComponents/AboutPageImageSlider';


function AboutPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <AboutPageImageSlider/>
            <AboutContent/>
        </Fragment>
    );
}

export default AboutPage;