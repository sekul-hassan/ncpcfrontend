import React, {useContext} from 'react';
import {Button, Col, Row} from "react-bootstrap";
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

function FirstContestant({secondCall,inputChange}) {

    const {data} = useContext(FormContext);

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', cursor:'pointer', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    console.log(data.instituteName);

    return (
        <div className="firstContestant mt-4">
            <Row className="m-0 p-0">
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

            <hr/>
            <h4 className="title mb-4"><FontAwesomeIcon icon={faUser} /> Team Member-1</h4>
            <hr/>
            <Row className="mx-0">
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
                        name="firstUserId"
                        onChange={inputChange}
                        accept=".jpg,.png,.jpeg"
                    />
                    {
                        data.firstUserId?(
                            <div className='photoSelect'>Your Uploaded File is : {data.firstUserId.name}</div>
                        ):(
                            <div className='photoSelect'>Please upload a photo(Max 1MB)</div>
                        )
                    }
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

                    <div className="mb-5">
                        <Button className="nextBtn2" onClick={secondCall}> Next</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FirstContestant;