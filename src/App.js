import PropTypes from "prop-types";
import React from "react"



class App extends React.Component{
  state = {
    count: 0
  };
  add=()=>{
    //this.setState({count:this.state.count+ 1})

    this.setState(current => ({count:current.count+ 1}))
  }
  remove=()=>{
    this.setState(current => ({count:current.count - 1}))
  }
  render(){
    return <div>
      
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.remove}>minus</button>
      </div>

    
  }
}

export default App;
