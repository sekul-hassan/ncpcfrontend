import React, {Fragment} from 'react';
import {Container} from "react-bootstrap";
import TopMenu from "../Components/TopMenu";

function RegiSuccess(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Container fluid="true" className="text-center successBackground">
                <div className="successContent">
                    <h4 className="boldTitle text-info">Registration successful</h4>
                </div>
            </Container>
        </Fragment>
    );
}

export default RegiSuccess;
