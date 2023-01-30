import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';


  
class App extends React.Component {

  state={
    Nom : "",
    message:[]
  }

componentDidMount(){
 
}

handleChange = (e)=>{
 var nom ={Nom:e.target.value}
axios.post("http://127.0.0.1:9000/api/index",nom)
.then(res=>{
  this.setState({
    message:res.data.message
  })
  console.log(res.data)
  
})

}
render(){
console.log(  this.state)
  return (
    <div className="App">
      <input type="text" onChange={this.handleChange} />
      {this.state.message.map(value=>
      <h1>{value.Prenom} </h1>
    
    )}
    </div>
  );
}
}

export default App;
