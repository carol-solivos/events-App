import React, { Component } from 'react';
import { Col } from 'react-flexbox-grid';
import ButtonGo from './ButtonGo'
import events from './Data/events.json';

class EventsAll extends Component {

  render() {
    console.log(events);
    if (Object.keys(events.events).length > 0) {
      return (
      <div>
        {
          events.events.map(function(events){
            const img = events.imgEvent
            return (
              <Col className="imageLeft" xs={12} md={6}>
                <div key = {events.id} className="allEvents">
                  {events.name} 
                  <img src={img}/>
                  <ButtonGo/>
                </div>          
              </Col>
            )
                                      
          })
        }        
      </div>      
    )
    } else {
      return <p className="text-center">Cargando productos...</p>
    }
    
  }

}

export default EventsAll;