//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함

import PropTypes from "prop-types";
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  //setState를 호출할 때마다 react는 새로운 state와 함께 render를 다시해준다.
  add = () =>{
    this.setState(current => ({ count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1}));
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