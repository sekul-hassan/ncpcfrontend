import React from 'react';
import {Container} from "react-bootstrap";
import vc from "../Assets/Images/juVC.jpg";

function CommitteeTop(props) {
    return (
        <Container fluid="true" className="text-center p-3">
            <div className="vcDiv">
                <img src={vc} alt=""/>
            </div>
            <div className="committeeTextDiv mt-2">
                <p className="title text-white">Prof. Dr. Nurul Islam <br/> Honourable Vice Chancellor <br/> Jahangirnagar University</p>
            </div>
        </Container>
    );
}

export default CommitteeTop;