import { useState } from "react";
import TopMenu from "../Components/TopMenu";
import axios from "axios";
export const Refund = () => {
    const headers =
    {
        "Client-Id": "1",
        "Client-Secret": "SECJUNCPCCOM2023000001",
    }
    const [keyword, setKeyword] = useState(null)
    const [refundResponse, setRefundResponse] = useState(null)
    const inputChange = (e) => {
        if (e.target.value !== '') {
            setKeyword(e.target.value)
            console.log('e.target.value', keyword)
            // const data = { "keyword": keyword }

        }

    }
    const handleRefund = () => {
        axios.get(`https://pc.cse.juniv.edu/api/bkash/payment/refund?trxId=${keyword}`, { headers: headers })
            .then(response => {
                setRefundResponse(response.data);
                console.log(response.data);
            })
            .catch(error => {
                setRefundResponse(error.message);
                console.log(error);
            });
    }



    return (
        <>
            <TopMenu />
            <div className="refund_container">

                <h2>Refund</h2>
                <hr></hr>
                <div className='input_wrapper'>
                    <input
                        placeholder={'Transaction Id'}
                        onKeyUp={inputChange}
                    />
                    <button className='btn_common' onClick={handleRefund}>Refund</button>
                </div>
                <h4 className="warn mt-5">{refundResponse}</h4>
            </div>
        </>
    )
}