import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {

  state={
    Nom : ""
  }

componentDidMount(){
 
}

handleChange = (e)=>{
 var nom ={Nom:e.target.value}
axios.post("http://127.0.0.1:8000/api/index",nom)
.then(res=>{
 
  this.setState({
    message:res.data.message
  })
  
  
})

}
render(){
console.log(  this.state.Nom)
  return (
    <div className="App">
      <input type="text" onChange={this.handleChange} />
      
      <h1>{this.state.message} </h1>
    </div>
  );
}
}

export default App;
