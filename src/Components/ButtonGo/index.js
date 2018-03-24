import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// ButtonGo

class ButtonGo extends React.Component {
   constructor(props) {
    super(props);
    this.state = {toggle: true};
    this.eventHandler = this.eventHandler.bind(this);
    this.anotherFunction = this.anotherFunction.bind(this);
  }
  anotherFunction() {
    console.log("Another function was called!");
  }
  eventHandler(event) {
      this.anotherFunction();
      this.setState((prevState) => ({
          toggle: !prevState.toggle
        })
      );
   }
   render() {
    return(
      <div>
        <button onClick={this.eventHandler}>{this.state.toggle ? 'Click Me' : 'Reset'}</button>
      </div>
    );
  }
}

export default ButtonGo;
