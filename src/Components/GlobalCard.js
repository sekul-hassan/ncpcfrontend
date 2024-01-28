// GlobalCard.js
import React, {Fragment} from 'react';
import { Card } from "react-bootstrap";

function GlobalCard({ image ,name,post}) {


    return (
       <Fragment>
           <Card className="h-100 p-3 global_card">
               <Card.Body className="mt-3">
                   <img className="cardImg" src={image} alt="af" />
                   <Card.Title className="cardTitle">{name}</Card.Title>
                   <Card.Text>
                       <h5 className="subTitle">{post}</h5>
                   </Card.Text>
               </Card.Body>
           </Card>
       </Fragment>
    );
}

export default GlobalCard;
