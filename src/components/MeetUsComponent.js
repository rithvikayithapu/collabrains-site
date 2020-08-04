import React from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody, CardDeck, Button } from 'reactstrap';

import { MEETUS } from '../dataStore';
import MeetUsBanner from './MeetUsBannerComponent';

const MeetUs = () => {

  const leaders = MEETUS.map((item) => {
    return(
      <Card className="meetUsCard" key={item.id}>
        <div className="d-flex justify-content-center">
          <CardImg className="meetUsImg" top src={item.image} alt={item.alt} />
        </div>
        <CardBody>
          <CardTitle className="heading d-flex justify-content-center mb-5">{item.name}</CardTitle>
          <CardText className="content text-center d-flex justify-content-center mb-5">{item.description}</CardText>
          <div className="d-flex justify-content-center">
            <Button className="timelineButton content text-white ">Check Profile</Button>
          </div>
        </CardBody> 
      </Card>
    );
  });

  return(
    <div className="container" id="meetus">
      <div className="row meetUs">
        <div className="col-12">
          <h3 className="buttonText d-flex justify-content-center">You Can Trust Us</h3>
          <h1 className="heading d-flex justify-content-center">MEET US<h1 className="heading text-white">.</h1></h1>
          <img src="assets/images/Group-239.png" alt="boxes" className="meetUsBgImage" />
        </div>
      </div>
      <MeetUsBanner />
      <div className="row d-flex justify-content-center mt-5">
        <CardDeck>
          {leaders}
        </CardDeck>
      </div>
    </div>
  );
}

export default MeetUs;