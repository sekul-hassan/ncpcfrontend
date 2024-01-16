import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import FirstContestant from "./FirstContestant";
import SecondContestant from "./SecondContestant";
import ThirdContestant from "./ThirdContestant";
import TeacherData from "./TeacherData";
import axios from "axios";
import FormContext from "./Context/FormContext";


function RegiForm() {

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
        
        const emptyFields = Object.entries(data).filter(([key, value]) => {
            return value === "" || value === null || value === undefined;
        });

        if (emptyFields.length > 0) {
            const emptyFieldNames = emptyFields.map(([key, value]) => key).join(', ');
            window.alert(`Please fill in the following fields: ${emptyFieldNames}`);
            return;
        }

        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });

        axios.post('https://pc.cse.juniv.edu/api/addUser', formData)

            .then(response => {
                 console.log(response.data);
                 window.alert(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });

    };


    const firstCall =()=>{
        setSecond(false);
        setFourth(false);
        setFirst(true);
        setThird(false);
    }
    const secondCall = ()=>{
        setSecond(true);
        setFourth(false);
        setFirst(false);
        setThird(false);
    }
    const thirdCall = ()=>{
        setSecond(false);
        setFourth(false);
        setFirst(false);
        setThird(true);
    }
    const fourthCall = ()=>{
        setSecond(false);
        setFourth(true);
        setFirst(false);
        setThird(false);
    }



    return (
        <Container fluid="true" className="registration">

            <form className="formBorder" action="">
                <h4 className="boldTitle mb-5">Registration Form</h4>
                <div className="responsiveRegi">
                    {
                        !second && first && !third && !fourth?<FirstContestant secondCall={secondCall} inputChange={inputChange}/>:""
                    }
                    {
                        second && !first && !third && !fourth?<SecondContestant firstCall={firstCall} thirdCall={thirdCall} inputChange={inputChange}/>:""
                    }
                    {
                        third && !first && !second && !fourth?<ThirdContestant secondCall={secondCall} fourthCall={fourthCall} inputChange={inputChange}/>:""
                    }
                    {
                        !third && !first && !second && fourth?<TeacherData thirdCall={thirdCall} inputChange={inputChange} postDataToBackend={postDataToBackend}/>:""
                    }
                </div>

            </form>
        </Container>
    );
}

export default RegiForm;