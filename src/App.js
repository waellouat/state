import React, { Component } from "react" ;
import Persone from "./component/Profil";
import "./App.css" ;
 export default class App extends React.Component {
  constructor () {
  super()
  this.state={
    show : true ,
    count : 0 ,
intervall : null 
  }
  
  }
  componentDidMount(){
    console.log(" componentDidMount")
    this.setState ({
     intervall : setInterval (
         ()=>this.setState({count : this.state.count +1 }) ,
         1000
     )
     
    })
  }
  componentDidUpdate () {
     console.log ("il y un update")
  }
  Show = () => {
    this.setState({show :!this.state.show})
    console.log(this.state.show)
  }
  
render() {
return(
  <div>
    {this.state.show && <Persone/> }
<button onClick={this.Show} >click me</button>
<hr/>
<h2>count</h2>
<h3>{this.state.count} </h3>

  </div>
)

}
};

