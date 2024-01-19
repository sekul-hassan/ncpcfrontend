
import React, {Fragment, useState} from 'react';
import { Card } from "react-bootstrap";
function StrategyCard({ pic,title,subTitle,description }) {
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
           <Card className={`${css.strategyWidth} mt-3`} onClick={changeDes}>
               <Card.Body>
                   <img className="cardImgStrategy" src={pic} alt="af" />
                   <Card.Title className="titleStrategy mt-4">{title}</Card.Title>
                   <Card.Text>
                       <h5 className="subTitleStrategy">{subTitle}</h5>
                       <p className={css.strategyDescription}>{description}</p>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default StrategyCard;
