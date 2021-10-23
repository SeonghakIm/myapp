//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함

import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render(){
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
      </div>);
  }
}

export default App;