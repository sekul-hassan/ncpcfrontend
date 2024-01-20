import React from 'react';
import CountCalculation from "../CountComponent/CountCalculation";
import '../CountComponent/App.css';

function Count(props) {
    return (
        <CountCalculation day={26}/>
    );
}

export default Count;