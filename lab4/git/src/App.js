import React, { Component } from 'react';
import './App.css';
import Github from "./github";
import Weather from "./weather"
import axios from "axios";

class App extends Component {
 state = { count:0 }
 constructor(props) {
   super(props)
 }

 add = () => {
   this.setState({count:this.state.count+1})
 }


 render() {
   return (
    <div className="App">
           <h1>Todo</h1>
           <br/>
          <Github/><br/><br/>
          <Weather/>
       </div>
   );
 }
}
export default App
