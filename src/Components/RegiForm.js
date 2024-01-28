import React, {useContext, useState} from 'react';
import {Container} from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";
import axios from "axios";
import FormContext from "./Context/FormContext";
import {useNavigate} from "react-router-dom";


const validateFirstUser = (data) => {
    if (data.teamName === "") return false;
    if (data.instituteName === "") return false;
    if (data.firstUserName === "") return false;
    if (data.firstUserEmail === "") return false;
    if (data.firstUserPhone === "") return false;
    if (data.firstUserGender === "") return false;
    if (data.firstUserTShirt === "") return false;
    if (data.firstUserPhoto === null) return false;
    return data.firstUserId !== null;

}

const validateSecondUser = (data) => {
    if (data.secondUserName === "") return false;
    if (data.secondUserEmail === "") return false;
    if (data.secondUserPhone === "") return false;
    if (data.secondUserGender === "") return false;
    if (data.secondUserTShirt === "") return false;
    if (data.secondUserPhoto === null) return false;
    return data.secondUserId !== null;

}

const validateThirdUser = (data) => {

    if (data.thirdUserName === "") return false;
    if (data.thirdUserEmail === "") return false;
    if (data.thirdUserPhone === "") return false;
    if (data.thirdUserGender === "") return false;
    if (data.thirdUserTShirt === "") return false;
    if (data.thirdUserPhoto === null) return false;
    return data.thirdUserId !== null;

}
const validateCoachData = (data) => {
    if (data.teacherName === "") return false;
    if (data.teacherEmail === "") return false;
    if (data.teacherPhone === "") return false;
    if (data.teacherGender === "") return false;
    if (data.teacherTShirt === "") return false;
    if (data.teacherPhoto === null) return false;
    if (data.teacherDesignation === "") return false;
    return data.teacherId !== null;

}

function RegiForm() {


    const [firstNext,setFirstNext] = useState(false);
    const [secondNext,setSecondNext] = useState(false);
    const [thirdNext,setThirdNext] = useState(false);
    const [submit,setSubmit] = useState(false);
    const [success,setSuccess] = useState(false);
    const [response,setResponse] = useState(null);


    const {data,setData,first,setFirst,second,setSecond,third,setThird,fourth,setFourth} = useContext(FormContext);
    
    const inputChange = (e)=>{
        if (e.target === undefined) {
            setData((prevData) => {
                return {
                    ...prevData,
                    instituteName: e.name
                };
            });
        }

        else if(e.target.type==='file'){
            const file = e.target.files[0];
            if(file.size > 1024 * 1024){
                alert('File size exceeds 1MB. Please choose a smaller file.');
                e.target.value = null;
                return;
            }
            setData({
                ...data,
                [e.target.name]:e.target.files[0],
            });
        }
        else{
            setData({
                ...data,
                [e.target.name]:e.target.value,
            });
        }
    };



    const postDataToBackend = (e) => {
        e.preventDefault();
        setSubmit(true)

        if (!validateCoachData(data)) {
            setSuccess(false)
            setResponse(null)
            return false;
        }

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.post('https://pc.cse.juniv.edu/api/addUser', formData)

            .then(response => {

                setResponse(response.data);
                setSuccess(true);
                setSubmit(false);
                console.log(response.data);
            })
            .catch(error => {
                setSubmit(true);
                setSuccess(false);
                setResponse("Some problem occur\nPlease Contact Developer team");
                window.alert("Some problem occur\nPlease Contact Developer team");
            });

    };


    const firstCall =()=>{
        setFirstNext(false);
        setSecond(false);
        setFourth(false);
        setFirst(true);
        setThird(false);
    }
    const secondCall = ()=>{
        setSecondNext(false);
        setFirstNext(true);
        if (!validateFirstUser(data)) {
            return false;
        }
        setSecond(true);
        setFourth(false);
        setFirst(false);
        setThird(false);
        return true;
    }
    const thirdCall = ()=>{
        setThirdNext(false)
        setSecondNext(true);
        if (!validateSecondUser(data)) {
            return false;
        }

        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(true);
    }
    const fourthCall = ()=>{
        setThirdNext(true);
        setResponse(null)
        setSubmit(false);

        if (!validateThirdUser(data)) {
            return false;
        }
        setSecond(false);
        setFourth(true);
        setFirst(false);
        setThird(false);
    }



    return (
        <Container fluid="true" className="registration mt-3">
            <form className="formBorder" action="">
               <div className="registrationTitleDiv">
                   <h4 className="boldTitle">Registration Form</h4>
               </div>
                <div className="responsiveRegi">
                    {
                        !second && first && !third && !fourth?<FirstContestant secondCall={secondCall} inputChange={inputChange} firstNext={firstNext}/>:""
                    }
                    {
                        second && !first && !third && !fourth?<SecondContestant firstCall={firstCall} thirdCall={thirdCall} inputChange={inputChange} secondNext={secondNext}/>:""
                    }
                    {
                        third && !first && !second && !fourth?<ThirdContestant secondCall={secondCall} fourthCall={fourthCall} inputChange={inputChange} thirdNext={thirdNext}/>:""
                    }
                    {
                        !third && !first && !second && fourth?<TeacherData thirdCall={thirdCall} inputChange={inputChange} postDataToBackend={postDataToBackend} submit={submit} success={success} response={response}/>:""
                    }
                </div>

            </form>
        </Container>
    );
}

export default RegiForm;