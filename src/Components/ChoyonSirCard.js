// ChoyonSirCard.js
import React, {Fragment} from 'react';
import { Card } from "react-bootstrap";

function ChoyonSirCard({ choyon ,name,post}) {


    return (
       <Fragment>
           <Card className="h-100">
               <Card.Body className="mt-3">
                   <img className="cardImg" src={choyon} alt="af" />
                   <Card.Title className="cardTitle">{name}</Card.Title>
                   <Card.Text>
                       <h5 className="subTitle">{post}</h5>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default ChoyonSirCard;
