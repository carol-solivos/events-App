import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import events from './../Data/events.json';
 
class Upcomingevents extends Component {
  render() {
    console.log(events);
    let eventsarr = events.events.map(function(event, index){
            return <Col xs={6} sm={6} md={6} key={index}>
            <div className="thumbnail image-event"><img src={event.imgEvent} className="img-responsive" /></div>
            <h4>{event.name}</h4>  
            <div className="event-date">{event.date}</div>
            <div>{event.hour}</div>
            </Col>;
        })
    return (
      <Row>
        {eventsarr}
      </Row>
    );
  }
}
 
export default Upcomingevents;