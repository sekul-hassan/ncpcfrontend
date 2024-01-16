
import React, {Fragment, useEffect, useState} from 'react';
import { Container, Row } from 'react-bootstrap';

import Slider from 'react-slick';
import axios from "axios";

function Gallery() {
    const images = require.context('../Assets/Images/GallerySlider', true);
    const imageUrls = images.keys().map((image) => images(image));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const [zoomedImg, setZoomedImg] = useState(null);

    
    const handleImageClick = (imgUrl) => {
        setZoomedImg(imgUrl);
    };

   
    const closeZoom = () => {
        setZoomedImg(null);
    };

    useEffect(()=>{
        axios.get("https://pc.cse.juniv.edu/api/test").then((res)=>{
            console.log(res.data);
        })
    })


    return (
        <Fragment>
            <Container fluid="true" className="mb-5 p-3">
                <Row className="mx-0 px-0" noGutters>
                    <Slider {...settings}>
                        {imageUrls.map((img, idx) => (
                            <div className="galleryImage mx-0 px-0" key={idx}>
                                <img
                                    src={img}
                                    alt=""
                                    onClick={() => handleImageClick(img)}
                                    className="clickableImage"
                                />
                            </div>
                        ))}
                    </Slider>
                </Row>
                {zoomedImg && (
                    <div
                        className="zoomedImageOverlay mx-0 px-0"
                        onClick={closeZoom}
                    >
                        <img src={zoomedImg} alt="" className="zoomedImage"/>
                        <button className="closeButton" onClick={closeZoom}>
                            Close
                        </button>
                    </div>
                )}
            </Container>
        </Fragment>
    );
}

export default Gallery;
