import React, {Fragment} from 'react';
import {Container,Row} from 'react-bootstrap';
import TopMenu from "../Components/TopMenu";
import CustomButton from '../MyComponents/CustomButton';
import InfoDiv from '../MyComponents/InfoDiv';
import TeamListPage from "../Pages/TeamListPage";
import List from "../Components/List";
import Proces from "../Components/Proces";

function RegistrationProcess(props) {
    const containerStyle = {
        width: '80%',
        margin: '0 auto', 
        fontSize: "18px",
        
    };

    const ulStyle = {
        textAlign: 'justify',
        fontSize: '18px',
        marginBottom: '20px',
      };

      const mobileStyle = {
        width: '100%',
        margin: '0',
        padding:'0'
    };

    return (
        <Fragment>
           <Proces/>
        </Fragment>
     );
}

export default RegistrationProcess;