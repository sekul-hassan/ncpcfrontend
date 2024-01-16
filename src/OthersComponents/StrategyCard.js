
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
function StrategyCard({ think }) {
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
                   <img className="cardImgStrategy" src={think} alt="af" />
                   <Card.Title className="titleStrategy mt-4">THINK</Card.Title>
                   <Card.Text>
                       <h5 className="subTitleStrategy">Critical Thinking</h5>
                       <p className={css.strategyDescription}>Analyze problems to formulate effective solutions.</p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default StrategyCard;
