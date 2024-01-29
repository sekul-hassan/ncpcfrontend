import React, {useContext, useState} from 'react';
import {Container} from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";
import axios from "axios";
import FormContext from "./Context/FormContext";
import Payment from "./Payment";

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
    const [fourthNext,setFourthNext] = useState(false);
    const [valid,setValid] = useState(false);
    const [submit, setSubmit] = useState(false)
    const [response,setResponse] = useState(null);


    const {payment,setPayment,data,setData,first,setFirst,second,setSecond,third,setThird,fourth,setFourth} = useContext(FormContext);
    
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

        setResponse(null)
        setValid(true);
        setSubmit(true);

        if(data.transaction===""){
            setValid(false);
            return;
        }


        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.post('https://pc.cse.juniv.edu/api/addUser', formData)
            .then(response => {
                setResponse(response.data);
                console.log(response.data);
            })
            .catch(error => {
                setResponse("Some problem occurred.");
            });

    };


    const firstCall =()=>{
        setFirstNext(false);
        setSecond(false);
        setFourth(false);
        setFirst(true);
        setThird(false);
        setPayment(false);
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
        setPayment(false);
        return true;
    }
    const thirdCall = ()=>{
        setThirdNext(false)
        setSecondNext(true);
        if (!validateSecondUser(data)) {
            return false;
        }
        setPayment(false);
        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(true);
    }
    const fourthCall = ()=>{
        setThirdNext(true);
        setFourthNext(false);
        setValid(false);
        setResponse(null);
        setSubmit(false);

        if (!validateThirdUser(data)) {
            return false;
        }
        setPayment(false);
        setSecond(false);
        setFourth(true);
        setFirst(false);
        setThird(false);
    }

    const paymentCall = ()=>{
        setResponse(null)
        if (!validateCoachData(data)) {
            setFourthNext(true);
            return false;
        }

        setPayment(true);
        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(false);

    }



    return (
        <Container fluid="true" className="registration mt-3">
            <form className="formBorder" action="">

                <div>
                    {
                        !payment && !second && first && !third && !fourth?<FirstContestant secondCall={secondCall} inputChange={inputChange} firstNext={firstNext}/>:""
                    }
                    {
                        !payment && second && !first && !third && !fourth?<SecondContestant firstCall={firstCall} thirdCall={thirdCall} inputChange={inputChange} secondNext={secondNext}/>:""
                    }
                    {
                        !payment && third && !first && !second && !fourth?<ThirdContestant secondCall={secondCall} fourthCall={fourthCall} inputChange={inputChange} thirdNext={thirdNext}/>:""
                    }
                    {
                        !payment && !third && !first && !second && fourth?<TeacherData thirdCall={thirdCall} fourthNext={fourthNext} inputChange={inputChange} paymentCall={paymentCall}/>:""
                    }
                    {
                        payment && !third && !first && !second && !fourth?<Payment fourthCall={fourthCall} inputChange={inputChange} postDataToBackend={postDataToBackend} submit={submit} valid={valid} response={response}/>:""
                    }
                </div>

            </form>
        </Container>
    );
}

export default RegiForm;