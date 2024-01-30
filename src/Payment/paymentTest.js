import React from 'react';
import axios from 'axios';

function PaymentTest(props) {
    const url = 'https://tokenized.sandbox.bka.sh/v1.2.0-beta/tokenized/checkout/token/grant';

    const body = {
        app_key: '4f6o0cjiki2rfm34kfdadl1eqq',
        app_secret: '2is7hdktrekvrbljjh44ll3d9l1dtjo4pasmjvs5vl5qr3fug4b',
    };

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'username': 'sandboxTokenizedUser02',
        'password': 'sandboxTokenizedUser02@12345',
    };

    const authenticate = async () => {
        try {
            const response = await axios.post(url, body.stringify, {
                headers: headers,
            });

            console.log(response.data);

            // Continue with the handling of the response data

        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="m-5 text-center">
            <button onClick={authenticate}>Pay bKash</button>
        </div>
    );
}

export default PaymentTest;
