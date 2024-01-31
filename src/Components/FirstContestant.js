import React, {useContext} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import FormContext from "./Context/FormContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {faBuildingColumns} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {faAddressCard} from "@fortawesome/free-solid-svg-icons";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faVenusMars} from "@fortawesome/free-solid-svg-icons";
import {faShirt} from "@fortawesome/free-solid-svg-icons";
import {faImage} from "@fortawesome/free-solid-svg-icons";
import items from "./Context/Universities";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import FormValidationAlert from "../MyComponents/FormValidataionAlert";

function FirstContestant({secondCall,inputChange,firstNext}) {




    const {data} = useContext(FormContext);

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', cursor:'pointer', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    console.log(data.instituteName);

    const backgroundStyle = {
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)'
    }
    return (
        <Container fluid="true" className="firstContestant mt-3">
            <div className="registrationTitleDiv" style={backgroundStyle}>
                <h4 className="boldTitle">Registration Form</h4>
            </div>
            <Row className="mx-0 mt-3 px-3">
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faBuildingColumns} />  Institute Name</label>
                    {Array.isArray(items) && (
                        <ReactSearchAutocomplete
                            items={items}
                            onSelect={inputChange}
                            formatResult={formatResult}
                            placeholder={data.instituteName}
                            onChange={inputChange}
                        />
                    )}

                </Col>
                <Col md={6} sm={12} lg={6}>
                    <label htmlFor="x"><FontAwesomeIcon icon={faPeopleGroup} />  Team Name</label>
                    <input
                        type="text"
                        placeholder="Team Name"
                        className="form-control"
                        name="teamName"
                        onChange={inputChange}
                        value={!data.teamName===""?"":data.teamName}
                    />
                </Col>
            </Row>


            <Row className="mx-0 mt-0 px-3 pb-4">
                <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} /> Team Member-1</h4>
                <hr/>
                <Col>
                    <label htmlFor="x"><FontAwesomeIcon icon={faFileSignature} /> Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        name="firstUserName"
                        onChange={inputChange}
                        value={!data.firstUserName===""?"":data.firstUserName}
                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faAt} />   E-mail</label>
                    <input
                        type="email"
                        placeholder="E-mail"
                        className="form-control"
                        name="firstUserEmail"
                        onChange={inputChange}
                        value={!data.firstUserEmail===""?"":data.firstUserEmail}

                    />
                    <label htmlFor="x"><FontAwesomeIcon icon={faPhone} />    Contact Number</label>
                    <input
                        type="number"
                        placeholder="Phone number"
                        className="form-control"
                        name="firstUserPhone"
                        onChange={inputChange}
                        value={!data.firstUserPhone===""?"":data.firstUserPhone}
                    />
                    <label htmlFor="gender"><FontAwesomeIcon icon={faVenusMars} />    Gender</label><br/>
                    <input
                        className="form-check-input mx-1"
                        type="radio"
                        id="male"
                        name="firstUserGender"
                        value="male"
                        onChange={inputChange}
                        checked={data.firstUserGender==="male"}
                    />
                    <label className="gender" htmlFor="male"> Male</label>
                    <input
                        className="form-check-input genderFix"
                        type="radio"
                        id="female"
                        value="female"
                        name="firstUserGender"
                        onChange={inputChange}
                        checked={data.firstUserGender==="female"}
                    /> <label className="gender" htmlFor="female"> Female</label><br/>
                    <label htmlFor="available"><FontAwesomeIcon icon={faShirt} />    T-shirt size</label><br/>
                    <select
                        id="available"
                        className="form-control w-25"
                        name="firstUserTShirt"
                        onChange={inputChange}
                        value={!data.firstUserTShirt===""?"":data.firstUserTShirt}
                    >
                        <option value="">Select</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                    <label htmlFor="cc" className='dateofbirthcss'><FontAwesomeIcon icon={faImage} />   Student Photo</label><br/>
                    <input
                        type="file"
                        className="form-control"
                        name="firstUserPhoto"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.firstUserPhoto ? (
                            <div className='photoSelect'>Your Uploaded File is : {data.firstUserPhoto.name}</div>
                        ) : (
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }


                </Col>
                {
                    firstNext && (
                        <div className="mt-2">
                            <FormValidationAlert info="Please fill out all the fields."/>
                        </div>
                    )
                }
                <div className="mb-5 position-relative">
                    <Button className="nextBtn2" onClick={secondCall}> Next</Button>
                </div>

            </Row>
        </Container>
    );
}

export default FirstContestant;