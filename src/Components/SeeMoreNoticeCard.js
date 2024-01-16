
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
function SeeMoreNoticeCard({ think }) {
    const [css, setCss] = useState({
        strategyWidth: 'strategyWidth',
        strategyDescription: 'strategyDescription'
    });

    const changeDes = () => {
        const updatedCss = {
            strategyWidth: css.strategyWidth === 'strategyWidth' ? 'choyonSirWidth' : 'strategyWidth',
            strategyDescription: css.strategyDescription === 'strategyDescription' ? 'strategyDescriptionShow' : 'strategyDescription'
        };
        setCss(updatedCss);
    };

    return (
       <Fragment>
           <Card className={css.strategyWidth} onClick={changeDes}>
               <Card.Body> 
                   <Card.Title className="titleSeeMoreNotice m-0">See More   <FontAwesomeIcon icon={faCaretDown} /></Card.Title>
                   <Card.Text>
                       <p className={css.strategyDescription}>
                        <a href="facebook.com/abc">5. Mock Contest Date</a>
                        <hr/>
                        <a href="facebook.com/abc">6. Payment Gateways</a>
                        <hr/>
                        <a href="facebook.com/abc">7. Payment Details</a>
                        <hr/>
                        <a href="facebook.com/abc">8. Seat Plan</a>
                        <hr/>
                       </p>
                   </Card.Text>
               </Card.Body>
           </Card>
           
       </Fragment>
    );
}

export default SeeMoreNoticeCard;
