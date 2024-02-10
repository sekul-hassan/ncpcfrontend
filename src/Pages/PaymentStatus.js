import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopMenu from "../Components/TopMenu";
function PaymentStatus() {
    const { message, status } = useParams();
    return (
        <Fragment>
            <TopMenu />
            <div className='status_container'>
                <div className='message_wrapper'>
                    <h3>{message}</h3>
                    <h4>Status: {status}</h4>
                </div>
            </div>
        </Fragment>
    );
}

export default PaymentStatus;

