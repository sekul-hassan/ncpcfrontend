import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Button, Container } from "react-bootstrap";

import bkash from "../Assets/Images/bkash.jpg";
import InfoDiv from "../MyComponents/InfoDiv";
import FormValidationAlert from "../MyComponents/FormValidataionAlert";
import FormSuccessAlert from "../MyComponents/FormSuccessAlert";
import { Navigate } from "react-router-dom";
import FormContext from "./Context/FormContext";
import axios from "axios";
import PaymentView from "../Payment/PaymentView";


function Payment({ fourthCall, valid, response, postDataToBackend, submit }) {
    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [payTeamExist, setPayTeamExist] = useState(false);

    const { data } = useContext(FormContext);
    const firstUser = {
        teamName: data.teamName,
        instituteName: data.instituteName,
        userName: data.firstUserName,
        userEmail: data.firstUserEmail,
        userPhone: data.firstUserPhone,
        userGender: data.firstUserGender,
        userTShirt: data.firstUserTShirt,
        userPhoto: data.firstUserPhoto,
    }
    const secondUser = {
        userName: data.secondUserName,
        userEmail: data.secondUserEmail,
        userPhone: data.secondUserPhone,
        userGender: data.secondUserGender,
        userTShirt: data.secondUserTShirt,
        userPhoto: data.secondUserPhoto,
    }
    const thirdUser = {
        userName: data.thirdUserName,
        userEmail: data.thirdUserEmail,
        userPhone: data.thirdUserPhone,
        userGender: data.thirdUserGender,
        userTShirt: data.thirdUserTShirt,
        userPhoto: data.thirdUserPhoto,
    }
    const teacherUser = {
        userDesignation: data.teacherDesignation,
        userName: data.teacherName,
        userEmail: data.teacherEmail,
        userPhone: data.teacherPhone,
        userGender: data.teacherGender,
        userTShirt: data.teacherTShirt,
        userPhoto: data.teacherPhoto,
    }

    // const users = [...firstUser, ...secondUser, ...thirdUser, ...teacherUser]
    const teamName = data.teamName;

    console.log(fourthCall)

    const authenticate = async (e) => {
        e.preventDefault();
        setClicked(true)

        try {
            const response = await axios.get(`https://pc.cse.juniv.edu/api/bkash/payment/create/${teamName}`);
            console.log(response.data);
            if (response.data === "Team already exist please change your team name") {
                setPayTeamExist(true);
                return;
            }
            setUrl(response.data);
            setClicked(false);
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };

    useEffect(() => {
        if (url) {
            setLoading(false);
            window.open(url, '_blank');
        }
    }, [url]);

    return (

        <Fragment>
            <div className='institute_name'>{firstUser.instituteName}</div>
            <div className='team_name'>{firstUser.teamName}</div>
            <div className='card_wrapper'>
                <div className='single_user_card'>
                    <div className='card_header'>Member 1</div>
                    <div className='image_wrapper'>
                        <img src='https://images.unsplash.com/photo-1706713115353-2dae8015a178?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                    <div className='userName'>
                        <span className='value'>{firstUser.userName}</span>
                    </div>
                    <div className='info email'>
                        <span className='label'>Email</span>
                        <span className='value'>{firstUser.userEmail}</span>
                    </div>
                    <div className='info phone'>
                        <span className='label'>Phone</span>
                        <span className='value'>{firstUser.userPhone}</span>
                    </div>
                    <div className='info gender'>
                        <span className='label'>Gender</span>
                        <span className='value'>{firstUser.userGender}</span>
                    </div>
                    <div className='info tShirt'>
                        <span className='label'>T-Shirt</span>
                        <span className='value'>{firstUser.userTShirt.toUpperCase()}</span>
                    </div>
                </div>
                <div className='single_user_card'>
                    <div className='card_header'>Member 2</div>
                    <div className='image_wrapper'>
                        <img src='https://images.unsplash.com/photo-1706713115353-2dae8015a178?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                    <div className='userName'>
                        <span className='value'>{secondUser.userName}</span>
                    </div>
                    <div className='info email'>
                        <span className='label'>Email</span>
                        <span className='value'>{secondUser.userEmail}</span>
                    </div>
                    <div className='info phone'>
                        <span className='label'>Phone</span>
                        <span className='value'>{secondUser.userPhone}</span>
                    </div>
                    <div className='info gender'>
                        <span className='label'>Gender</span>
                        <span className='value'>{secondUser.userGender}</span>
                    </div>
                    <div className='info tShirt'>
                        <span className='label'>T-Shirt</span>
                        <span className='value'>{secondUser.userTShirt.toUpperCase()}</span>
                    </div>
                </div>
                <div className='single_user_card'>
                    <div className='card_header'>Member 3</div>
                    <div className='image_wrapper'>
                        <img src='https://images.unsplash.com/photo-1706713115353-2dae8015a178?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                    <div className='userName'>
                        <span className='value'>{thirdUser.userName}</span>
                    </div>
                    <div className='info email'>
                        <span className='label'>Email</span>
                        <span className='value'>{thirdUser.userEmail}</span>
                    </div>
                    <div className='info phone'>
                        <span className='label'>Phone</span>
                        <span className='value'>{thirdUser.userPhone}</span>
                    </div>
                    <div className='info gender'>
                        <span className='label'>Gender</span>
                        <span className='value'>{thirdUser.userGender}</span>
                    </div>
                    <div className='info tShirt'>
                        <span className='label'>T-Shirt</span>
                        <span className='value'>{thirdUser.userTShirt.toUpperCase()}</span>
                    </div>
                </div>
                <div className='single_user_card'>
                    <div className='card_header'>Coach</div>
                    <div className='image_wrapper'>
                        <img src='https://images.unsplash.com/photo-1706713115353-2dae8015a178?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    </div>
                    <div className='userName'>
                        <span className='value'>{teacherUser.userName}</span>
                    </div>
                    <div className='info'>
                        <span className='label'>Desig.</span>
                        <span className='value'>{teacherUser.userDesignation}</span>
                    </div>
                    <div className='info email'>
                        <span className='label'>Email</span>
                        <span className='value'>{teacherUser.userEmail}</span>
                    </div>
                    <div className='info phone'>
                        <span className='label'>Phone</span>
                        <span className='value'>{teacherUser.userPhone}</span>
                    </div>
                    <div className='info gender'>
                        <span className='label'>Gender</span>
                        <span className='value'>{teacherUser.userGender}</span>
                    </div>
                    <div className='info tShirt'>
                        <span className='label'>T-Shirt</span>
                        <span className='value'>{teacherUser.userTShirt.toUpperCase()}</span>
                    </div>
                </div>
            </div>


            {/*  <Container fluid="true" className=" mt-4 mb-3 responsiveRegi pt-4">
                <InfoDiv info="Payment" gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)' />

                <h4 className="title mx-3 mt-5 text-dark">Payment Instructions </h4>
                <h5 className="description mx-5 mt-3 text-dark">1. Payment will start soon. </h5>
                <h5 className="description mx-5 text-dark">2. Please submit your registration. </h5>
                <div className="m-5 text-center">
                    {
                        !payTeamExist && loading && clicked ? <div>loading...</div> : <PaymentView authenTicate={authenticate} />
                    }
                    {
                        payTeamExist && clicked && (
                            <div className="mt-4">
                                <FormValidationAlert info="Team already exist please change your team name." />
                            </div>
                        )
                    }
                </div>

                {
                    !response && submit && (
                        <div className="mt-3">
                            <FormValidationAlert info="Loading..." gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)' />
                        </div>
                    )
                }

                {
                    response === "Team already exist please change your team name" && (
                        <div className="mt-4">
                            <FormValidationAlert info={response} />
                        </div>
                    )
                }
                {
                    response === "Payment not completed." && (
                        <div className="mt-4">
                            <FormValidationAlert info={response} />
                        </div>
                    )
                }
                {
                    response === "Registration Successful." && (
                        <div className="mt-4">
                            <FormSuccessAlert info="Registration Successful. Please check your E-mail" />
                            {
                                setTimeout(function () {
                                    window.location.href = "https://pc.cse.juniv.edu"
                                }, 3000)
                            }

                        </div>
                    )
                }

                
            {
                !response && submit && (
                    <div className="mt-3">
                        <FormValidationAlert info="Loading..." gradient='linear-gradient(45deg, #1a237e 30%, #283593 90%)' />
                    </div>
                )
            }

            {
                response === "Team already exist please change your team name" && (
                    <div className="mt-4">
                        <FormValidationAlert info={response} />
                    </div>
                )
            }
            {
                response === "Payment not completed." && (
                    <div className="mt-4">
                        <FormValidationAlert info={response} />
                    </div>
                )
            }
            {
                response === "Registration Successful." && (
                    <div className="mt-4 text-white">
                        <FormSuccessAlert info="Registration Successful. Please check your E-mail" />
                        {
                            setTimeout(function () {
                                window.location.href = "https://pc.cse.juniv.edu"
                            }, 3000)
                        }

                    </div>
                )
            }

            <div className="d-flex position-relative">
                <Button className="backBtn" onClick={fourthCall} >Back</Button>
            </div>
            <div className="text-center">
                <button
                    className="submitBtn btn btn-success"
                    onClick={postDataToBackend}
                // disabled={registrationOff}
                >
                    Submit
                </button>
            </div>

            </Container> */}
            <div className='action_wrapper'>
                <div className="d-flex position-relative">
                    <Button className="backBtn" onClick={fourthCall} >Back</Button>
                </div>
                <button
                    className="submitBtn btn btn-success"
                    onClick={postDataToBackend}
                >
                    Submit
                </button>

            </div>

        </Fragment>
    );
}

export default Payment;
