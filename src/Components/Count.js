import React from 'react';
import CountCalculation from "../CountComponent/CountCalculation";
import '../CountComponent/App.css';

function Count(props) {
    return (
        <CountCalculation day={4}/>
    );
}

export default Count;