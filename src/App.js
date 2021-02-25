import React, { Component } from 'react'

import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Show: false,
      profile:{
        fullName:"Cyrine Amri",
        bio:"Nothing", 
        imgSrc:"crown.jpg", 
        profession:"Electrical and Automatic Engineer"},
         currentCount: 0 }
  }
  timer() {
    this.setState({
      currentCount: this.state.currentCount + 1
    })
    if(this.state.currentCount < 1) { 
      clearInterval(this.intervalId);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
  Toggler=()=> {
    
    this.setState({
      Show: !this.state.Show,
  })
};
  render() { 
   
    return ( 
      <div className="App">
      <button onClick={this.Toggler}> {this.state.Show ? "Hide" : "Display"}</button>
      {this.state.Show ? (
        <div>
           <div>{this.state.currentCount}</div>
          <h1>{this.state.profile.fullName}</h1>
          <h3>{this.state.profile.bio}</h3>
          <h3>{this.state.profile.profession}</h3>
          <img className="photo" src="./crown.jpg" alt=""/> 
        </div>)
        : ("")}
        </div>
        );}
}

export default App;
