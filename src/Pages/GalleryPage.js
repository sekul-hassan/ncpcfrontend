import React, {Fragment} from 'react';
import "../Assets/CSS/GalleryCSS.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Gallery from '../Components/Gallery';
import GalleryTop from "../OthersComponents/GalleryTop";
import TopMenu from "../Components/TopMenu";

function GalleryPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Gallery/>
        </Fragment>
    );
}

export default GalleryPage;
