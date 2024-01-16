
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
function AlgorithmCard({ strategize }) {
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
                   <img className="cardImgStrategy" src={strategize} alt="af" />
                   <Card.Title className="titleStrategy mt-4">STRATEGIZE</Card.Title>
                   <Card.Text>
                       <h5 className="subTitleStrategy">Algorithms & Data Structures</h5>
                       <p className={css.strategyDescription}>Devise effective algorithms and strategies to formulate optimal solutions.</p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default AlgorithmCard;
