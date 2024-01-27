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

    const [data,setData] = useState({
        teamName:"",
        instituteName:"",

        firstUserName:"",
        firstUserEmail:"",
        firstUserPhone:"",
        firstUserGender:"",
        firstUserTShirt:"",
        firstUserId:null,
        firstUserPhoto:null,

        secondUserName:"",
        secondUserEmail:"",
        secondUserPhone:"",
        secondUserGender:"",
        secondUserTShirt:"",
        secondUserId:null,
        secondUserPhoto:null,

        thirdUserName:"",
        thirdUserEmail:"",
        thirdUserPhone:"",
        thirdUserGender:"",
        thirdUserTShirt:"",
        thirdUserId:null,
        thirdUserPhoto:null,

        teacherName:"",
        teacherDesignation:"",
        teacherEmail:"",
        teacherPhone:"",
        teacherGender:"",
        teacherTShirt:"",
        teacherId:null,
        teacherPhoto:null,
        transaction:""
    });


    return (
        <Fragment>
            <TopMenu/>
            <FormContext.Provider value={{data,setData,first,setFirst,second,setSecond,third,setThird,fourth,setFourth}}>
                <RegiForm/>
            </FormContext.Provider>
        </Fragment>
    );
}

export default Registration;
