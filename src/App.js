//새로운 component를 넣고 싶을 때는 app안에 통합하여야 함

import React from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import { HashRouter, Route } from "react-router-dom";


function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component = {About}></Route>
      <Route path="/" exact = {true} component = {Home}></Route>
      <Route path="/movie/:id" component = {Detail}></Route>
    </HashRouter>
  );
}


export default App;
