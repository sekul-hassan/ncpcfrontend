import React, {Fragment,useState} from 'react';
import '../Assets/CSS/Registration.css';
import RegiForm from "../Components/RegiForm";
import FormContext from "../Components/Context/FormContext";
import TopMenu from "../Components/TopMenu";

function Registration(props) {

    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(false);
    const [third,setThird] = useState(false);
    const [fourth,setFourth] = useState(false);
    const [payment,setPayment] = useState(false);

    const [data,setData] = useState({
        teamName:"",
        instituteName:"",

        firstUserName:"",
        firstUserEmail:"",
        firstUserPhone:"",
        firstUserGender:"",
        firstUserTShirt:"",
        firstUserPhoto:null,

        secondUserName:"",
        secondUserEmail:"",
        secondUserPhone:"",
        secondUserGender:"",
        secondUserTShirt:"",
        secondUserPhoto:null,

        thirdUserName:"",
        thirdUserEmail:"",
        thirdUserPhone:"",
        thirdUserGender:"",
        thirdUserTShirt:"",
        thirdUserPhoto:null,

        teacherName:"",
        teacherDesignation:"",
        teacherEmail:"",
        teacherPhone:"",
        teacherGender:"",
        teacherTShirt:"",
        teacherPhoto:null,
    });


    return (
        <Fragment>
            <TopMenu/>
            <FormContext.Provider value={{payment,setPayment ,data,setData,first,setFirst,second,setSecond,third,setThird,fourth,setFourth}}>
                <RegiForm/>
            </FormContext.Provider>
        </Fragment>
    );
}

export default Registration;
