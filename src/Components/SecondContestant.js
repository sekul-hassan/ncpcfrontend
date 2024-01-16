import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
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

function SecondContestant({thirdCall,firstCall,inputChange}) {

    const {data} = useContext(FormContext);

    return (
        <div className="firstContestant mt-4">
            <hr/>
            <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} />    Team Member-2</h4>
            <hr/>
            <Row className="mx-0">
                <Col>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} />  Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="secondUserName"
                        onChange={inputChange}
                        value={!data.secondUserName===""?"":data.secondUserName}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                        name="secondUserEmail"
                        onChange={inputChange}
                        value={!data.secondUserEmail===""?"":data.secondUserEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="number"
                        placeholder="Phone number"
                        className="form-control"
                        name="secondUserPhone"
                        onChange={inputChange}
                        value={!data.secondUserPhone===""?"":data.secondUserPhone}

                    />
                    <label><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="secondUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.secondUserGender==="male"}
                    /> <label className=" gender" htmlFor="male">Male</label>
                    <input
                        className="form-check-input genderFix"
                        type="radio"
                        id="female"
                        value="female"
                        name="secondUserGender"
                        onChange={inputChange}
                        checked={data.secondUserGender==="female"}
                    /> <label className="gender" htmlFor="female"> Female</label><br/>
                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt Size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="secondUserTShirt"
                        onChange={inputChange}
                        value={!data.secondUserTShirt===""?"":data.secondUserTShirt}

                    >
                        <option value="0">Select</option>
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
                        name="secondUserId"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.secondUserId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.secondUserId.name}</div>
                        ):(
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Student Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="secondUserPhoto"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.secondUserPhoto?(
                            <div className='photoSelect'>Your Uploaded File is : {data.secondUserPhoto.name}</div>
                        ):(
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }
                </Col>
                <div className="d-flex">
                    <Button className="backBtn" onClick={firstCall}>Back</Button>
                    <Button className="nextBtn2" onClick={thirdCall}>Next</Button>
                </div>
            </Row>
        </div>
    );
}

export default SecondContestant;