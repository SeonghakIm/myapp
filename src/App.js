//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함

import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };

  add = () =>{
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render(){
    return (
    <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add} >add</button>
      <button onClick={this.minus}>minus</button>
    </div>);
  }
}

export default App;