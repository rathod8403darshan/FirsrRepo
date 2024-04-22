import React, { Component } from "react";

class Classcompo extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "helloo",
    };
  }

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>

        <button onClick={()=>{
            this.setState({count : this.state.count + 1})
        }}>Click ME</button>

        <button onClick={()=>{
            this.state.name === "helloo" ?  this.setState({name : "helpwdjiwdhwdfhwdf"}) : this.setState({name : "helloo"})
        }}>Click me to change the name</button>
      </>
    );
  }
}

export default Classcompo;
