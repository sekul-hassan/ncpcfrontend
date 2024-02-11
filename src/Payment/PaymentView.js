import { useState, useEffect } from 'react';
import bks from "../Assets/Images/bkashLogo.png"
import FormValidationAlert from "../MyComponents/FormValidataionAlert";
// import items from "./Components/Context/Universities";
import { Button, Col, Container, Row } from "react-bootstrap";
import axios from 'axios';


function PaymentView() {
    // const header2 = { "Access-Control-Allow-Origin": "*" }
    const headers =
    {
        "Client-Id": "1",
        "Client-Secret": "SECJUNCPCCOM2023000001",
    }

    const [keyword, setKeyword] = useState(null)
    const [teams, setTeams] = useState([])
    const [members, setMembers] = useState([])

    const [selectedTeam, setSelectedTeam] = useState(null)

    const [url, setUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [clicked, setClicked] = useState(false);
    const [payTeamExist, setPayTeamExist] = useState(false);


    /* const history = useHistory();
    const onProceedToPayment = () => {
        history.push('/new-route');
    }; */

    const authenticate = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            const response = await axios.get(`https://pc.cse.juniv.edu/api/bkash/payment/create?id=${selectedTeam?.id}&teamName=${selectedTeam?.teamName}`, { headers: headers });
            console.log(response.data);
            if (response.data === "Team already exist please change your team name") {
                setPayTeamExist(true);
                return;
            }
            setUrl(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    };

    useEffect(() => {
        console.log(keyword);
        if (url) {
            setLoading(false);
            window.open(url, '_self');
        }
    }, [url]);


    const inputChange = (e) => {
        if (e.target.value !== '') {
            setKeyword(e.target.value)
            console.log('e.target.value', keyword)
            // const data = { "keyword": keyword }

        }

    }

    const handleOnSearch = () => {
        axios.post('https://pc.cse.juniv.edu/api/findByTeams', { keyword: keyword }, { headers: headers })
            .then(response => {
                setTeams(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }



    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', cursor: 'pointer', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }


    const backgroundStyle = {
        background: 'linear-gradient(45deg, #1a237e 30%, #283593 90%)'
    }




    const handleSelectTeam = (team) => {
        setSelectedTeam(team)

    }

    const backToTeam = (team) => {
        setSelectedTeam(null)
    }



    return (
        <Container fluid="true" className="payment_container">
            <span className='container_header_title'>Payment</span>
            <div className="payment_content">
                <img className="bks_main_logo" src={bks} alt="" />
                {selectedTeam ? ('') : <><div className='search_box'>
                    <div className='input_wrapper'>
                        <input
                            placeholder={'Search by Institute/Team Name'}
                            onKeyUp={inputChange}
                        />
                        <button className='btn_common' onClick={handleOnSearch}>Search</button>
                    </div>
                </div></>}

                <h3 className='mt-3 mb-3'>{selectedTeam?.teamName}</h3>

                <div className="team_payment_wrapper">
                    {/*    <div className="team_card">
                        <span className="team_title">Test Team</span>
                        <span className='status'>Payment Status</span>
                        <span className='paid'>Pending</span>
                        <button className='btn_payment'>
                            <img className="bkashLogo" src={bks} alt="" />
                            Proceed to pay</button>
                    </div> */}
                    {selectedTeam ? (
                        <>
                            <div className="team_card member">
                                <span className="team_title">{selectedTeam?.firstUserName}</span>
                                <span className='paid'>T-Shirt: {selectedTeam?.firstUserTShirt.toUpperCase()}</span>
                            </div>
                            <div className="team_card member">
                                <span className="team_title">{selectedTeam?.secondUserName}</span>
                                <span className='paid'>T-Shirt: {selectedTeam?.secondUserTShirt.toUpperCase()}</span>
                            </div>
                            <div className="team_card member">
                                <span className="team_title">{selectedTeam?.thirdUserName}</span>
                                <span className='paid'>T-Shirt: {selectedTeam?.thirdUserTShirt.toUpperCase()}</span>
                            </div>
                            <div className="team_card member">
                                <span className="team_title">{selectedTeam?.coachName}</span>
                                <span className="paid">{selectedTeam?.coachDesignation}</span>
                                <span className='paid'>T-Shirt: {selectedTeam?.coachTShirt.toUpperCase()}</span>
                            </div>
                        </>
                    ) : (
                        <>
                            {teams.length === 0 ? (
                                <h4>Result Not Found</h4>
                            ) : (
                                <>
                                    {teams?.map((team, index) => (
                                        <div className="team_card" key={index}>
                                            <span className="team_title">{team.teamName}</span>
                                            <span className='status'>Payment Status</span>
                                            <span className='paid'>{team.transaction}</span>
                                            {team.transaction == 'PENDING' ? (
                                                <button className='btn_payment' onClick={() => handleSelectTeam(team)}>
                                                    <img className="bkashLogo" src={bks} alt="" />
                                                    Proceed to pay</button>
                                            ) : ''}
                                        </div>
                                    ))}</>
                            )}



                        </>

                    )}
                </div>
                <div className='response_result'>
                    {
                        payTeamExist && clicked && (
                            <div className="mt-4">
                                <FormValidationAlert info="Team already exist please change your team name." />
                            </div>
                        )
                    }
                </div>
                <div className='action_wrapper'>
                    {selectedTeam ? (<><button className='btn_common gray' onClick={backToTeam}>Back</button> <button className={loading ? 'isDisabled' : 'btn_common'} onClick={authenticate}>{loading ? 'Loading...' : 'Confirm to Pay'}</button> </>) : ''}

                </div>
            </div>
        </Container>
    );
}

export default PaymentView;
