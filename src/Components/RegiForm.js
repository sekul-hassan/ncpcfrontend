import React, { useContext, useState } from 'react';
import { Container } from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";
import axios from "axios";
import FormContext from "./Context/FormContext";
import Payment from "./Payment";

const ValidateFirstUser = (data) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (data.teamName === "") return false;
    if (data.instituteName === "") return;
    if (specialCharacterPattern.test(data.firstUserName)) return (alert('Special character not allowed in Name'));
    if (!emailPattern.test(data.firstUserEmail)) return (alert('invalid email'));
    if (data.firstUserPhone === "") return false;
    if (data.firstUserGender === "") return false;
    if (data.firstUserTShirt === "") return false;
    return data.firstUserPhoto !== null;

}

const ValidateSecondUser = (data) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (specialCharacterPattern.test(data.secondUserName)) return (alert('Special character not allowed in Name'));
    if (!emailPattern.test(data.secondUserEmail)) return (alert('invalid email'));
    if (data.secondUserPhone === "") return false;
    if (data.secondUserGender === "") return false;
    if (data.secondUserTShirt === "") return false;
    return data.secondUserPhoto !== null;

}

const ValidateThirdUser = (data) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (specialCharacterPattern.test(data.thirdUserName)) return (alert('Special character not allowed in Name'));
    if (!emailPattern.test(data.thirdUserEmail)) return (alert('invalid email'));
    if (data.thirdUserPhone === "") return false;
    if (data.thirdUserGender === "") return false;
    if (data.thirdUserTShirt === "") return false;
    return data.thirdUserPhoto !== null;

}
const ValidateCoachData = (data) => {
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,?~\\/-]/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (specialCharacterPattern.test(data.teacherName)) return (alert('Special character not allowed in Name'));
    if (!emailPattern.test(data.teacherEmail)) return (alert('invalid email'));
    if (data.teacherPhone === "") return false;
    if (data.teacherGender === "") return false;
    if (data.teacherTShirt === "") return false;
    if (data.teacherPhoto === null) return false;
    return data.teacherDesignation !== "";

}

function RegiForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    const [firstNext, setFirstNext] = useState(false);
    const [secondNext, setSecondNext] = useState(false);
    const [thirdNext, setThirdNext] = useState(false);
    const [fourthNext, setFourthNext] = useState(false);
    const [valid, setValid] = useState(false);
    const [submit, setSubmit] = useState(false)
    const [response, setResponse] = useState(null);


    const { payment, setPayment, data, setData, first, setFirst, second, setSecond, third, setThird, fourth, setFourth } = useContext(FormContext);

    const inputChange = (e) => {
        if (e.target === undefined) {
            setData((prevData) => {
                return {
                    ...prevData,
                    instituteName: e.name
                };
            });
        }

        
        
        else if (e.target.type === 'file') {
            const file = e.target.files[0];
            const extension = file.name.split('.').pop().toLowerCase();
            
            if (allowedExtensions.includes(extension)) {
                setSelectedFile(file);
            } else {
                alert('Please select a valid image file (jpg, jpeg, or png)');
                e.target.value = null;
            }
            if (file.size > 1024 * 1024) {
                alert('File size exceeds 1MB. Please choose a smaller file.');
                e.target.value = null;
                return;
            }
            setData({
                ...data,
                [e.target.name]: e.target.files[0],
            });
        }
        else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
        
    };



    const postDataToBackend = (e) => {
        e.preventDefault();

        setResponse(null)
        setValid(true);
        setSubmit(true);


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
                setSubmit(false);
                console.log(error);
            });

    };


    const firstCall = () => {
        setFirstNext(false);
        setSecond(false);
        setFourth(false);
        setFirst(true);
        setThird(false);
        setPayment(false);
    }
    const secondCall = () => {
        setSecondNext(false);
        setFirstNext(true);
        if (!ValidateFirstUser(data)) {
            return false;
        }
        setSecond(true);
        setFourth(false);
        setFirst(false);
        setThird(false);
        setPayment(false);
        return true;
    }
    const thirdCall = () => {
        setThirdNext(false)
        setSecondNext(true);
        if (!ValidateSecondUser(data)) {
            return false;
        }
        setPayment(false);
        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(true);
    }
    const fourthCall = () => {
        setThirdNext(true);
        setFourthNext(false);
        setValid(false);
        setResponse(null);
        setSubmit(false);

        if (!ValidateThirdUser(data)) {
            return false;
        }
        setPayment(false);
        setSecond(false);
        setFourth(true);
        setFirst(false);
        setThird(false);
    }

    const paymentCall = () => {
        setResponse(null)
        if (!ValidateCoachData(data)) {
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
                        !payment && !second && first && !third && !fourth ? <FirstContestant secondCall={secondCall} inputChange={inputChange} firstNext={firstNext} /> : ""
                    }
                    {
                        !payment && second && !first && !third && !fourth ? <SecondContestant firstCall={firstCall} thirdCall={thirdCall} inputChange={inputChange} secondNext={secondNext} /> : ""
                    }
                    {
                        !payment && third && !first && !second && !fourth ? <ThirdContestant secondCall={secondCall} fourthCall={fourthCall} inputChange={inputChange} thirdNext={thirdNext} /> : ""
                    }
                    {
                        !payment && !third && !first && !second && fourth ? <TeacherData thirdCall={thirdCall} fourthNext={fourthNext} inputChange={inputChange} paymentCall={paymentCall} /> : ""
                    }
                    {
                        payment && !third && !first && !second && !fourth ? <Payment fourthCall={fourthCall} inputChange={inputChange} postDataToBackend={postDataToBackend} submit={submit} valid={valid} response={response} /> : ""
                    }
                </div>

            </form>
        </Container>
    );
}

export default RegiForm;