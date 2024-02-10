import React, {Fragment} from 'react';
import TopMenu from "../Components/TopMenu";
import Payment from "../Payment/PaymentView";

function PaymentPage(props) {
    return (
        <Fragment>
            <TopMenu/>
            <Payment/>
        </Fragment>
    );
}

export default PaymentPage;
