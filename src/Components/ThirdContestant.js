import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {faShirt} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import FormValidationAlert from "../MyComponents/FormValidataionAlert";

function ThirdContestant({fourthCall,secondCall,inputChange,thirdNext}) {

    const {data} = useContext(FormContext);
    return (
        <Container fluid="true" className="firstContestant mt-3">
            <div className="registrationTitleDiv">
                <h4 className="boldTitle">Registration Form</h4>
            </div>


            <Row className="mx-0 px-3 pb-4">
                <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} /> Team Member-3</h4>
                <hr/>
                <Col>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Name</label>
                    <input
                        type="text"
                        placeholder="Name "
                        className="form-control"
                        name="thirdUserName"
                        onChange={inputChange}
                        value={!data.thirdUserName===""?"":data.thirdUserName}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                        name="thirdUserEmail"
                        onChange={inputChange}
                        value={!data.thirdUserEmail===""?"":data.thirdUserEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="number"
                        placeholder="Phone number"
                        className="form-control"
                        name="thirdUserPhone"
                        onChange={inputChange}
                        value={!data.thirdUserPhone===""?"":data.thirdUserPhone}

                    />
                    <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="thirdUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.thirdUserGender==="male"}
                    /> <label className="gender" htmlFor="male">Male</label>
                    <input
                        className="form-check-input genderFix"
                        type="radio"
                        id="female"
                        value="female"
                        name="thirdUserGender"
                        onChange={inputChange}
                        checked={data.thirdUserGender==="female"}
                    /> <label className="gender" htmlFor="female"> Female</label><br/>

                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="thirdUserTShirt"
                        onChange={inputChange}
                        value={!data.thirdUserTShirt===""?"":data.thirdUserTShirt}

                    >
                        <option value="">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>

                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faAddressCard} /> Student ID Card Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="thirdUserId"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.thirdUserId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.thirdUserId.name}</div>
                        ):(
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Student Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="thirdUserPhoto"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.thirdUserPhoto?(
                            <div className='photoSelect'>Your Uploaded File is : {data.thirdUserPhoto.name}</div>
                        ):(
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }
                </Col>
                {
                    thirdNext && (
                        <div className="mt-4">
                            <FormValidationAlert info="Please fill out all the fields."/>
                        </div>
                    )
                }
                <div className="d-flex position-relative">
                    <Button className="backBtn" onClick={secondCall}>Back</Button>
                    <Button className="nextBtn2" onClick={fourthCall}>Next</Button>
                </div>
            </Row>
        </Container>
    );
}

export default ThirdContestant;