import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, CardDeck } from 'reactstrap';

import { MEETUS } from '../dataStore';

const MeetUs = () => {

  const leaders = MEETUS.map((item) => {
    return(
      <Card className="meetUsCard" key={item.id}>
        <CardImg top src={item.image} alt={item.alt} />
        <CardBody>
          <CardTitle className="heading">{item.name}</CardTitle>
          <CardText className="content">{item.description}</CardText>
        </CardBody> 
      </Card>
    );
  });

  return(
    <div className="container">
      <div className="row meetUs">
        <div className="col-12">
          <h3 className="buttonText d-flex justify-content-center">You Can Trust Us</h3>
          <h1 className="heading d-flex justify-content-center">MEET US<h1 className="heading text-white">.</h1></h1>
          <img src="assets/images/Group-239.png" alt="boxes" className="meetUsBgImage" />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <CardDeck>
          {leaders}
        </CardDeck>
      </div>
    </div>
  );
}

export default MeetUs;