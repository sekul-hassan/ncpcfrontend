
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
function CodeCard({ code }) {
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
                   <img className="cardImgStrategy" src={code} alt="af" />
                   <Card.Title className="titleStrategy mt-4">CODE</Card.Title>
                   <Card.Text>
                       <h5 className="subTitleStrategy">Programming Languages & STL</h5>
                       <p className={css.strategyDescription}>Craft efficient and optimized solutions using STL and programming languages.</p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default CodeCard;
