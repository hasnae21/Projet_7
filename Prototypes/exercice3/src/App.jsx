import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import Cookies from 'universal-cookie';

  
class App extends React.Component {

  state={
    Nom : "",
    message:[],
    list:[]
  
  
  }

handleChange = (e)=>{
 var nom ={Nom:e.target.value}
axios.post("http://127.0.0.1:8000/api/index",nom)
.then(res=>{
  this.setState({
    message:res.data
  })
  console.log(res.data)
  
})

}
handleClick=(id)=>{
  let _data  = this.state.message;
  let find_id = _data.findIndex(value=>value.id ===id)
  _data.splice(find_id,1)
  this.setState({message:_data})
  axios.get("http://127.0.0.1:8000/api/index/"+id)
  .then(res=>{
     let _list = this.state.list
    //  let add= Object.assign({}, res.data.message)
    //  console.log(add)
    
    _list.push(res.data[0])
    this.setState({list:_list})
    
  })
 
}
handleRemove=(id)=>{
  let _data  = this.state.list;
  let find_id = _data.findIndex(value=>value.id ===id)
  _data.splice(find_id,1)
  this.setState({list:_data})
  axios.get("http://127.0.0.1:8000/api/index/"+id)
  .then(res=>{
     let _list = this.state.message
    //  let add= Object.assign({}, res.data.message)
    //  console.log(add)
    
    _list.push(res.data[0])
    this.setState({list:_list})
  })
 
}
// handleRemove=(id)=>{
  
  
  // }
  render(){

  

  console.log(this.state.list)
  return (
    <div>
    <div className="App">
      <input type="text" onChange={this.handleChange} />
      {this.state.message.map(value=>
     <div className='row'>
     <h1>{value.Prenom} </h1>
      <h1><button onClick={()=>this.handleClick(value.id)}>click</button> </h1>
      </div>
    )}
     

     {/* {Show_Value} */}
    </div>
    <div>
       {this.state.list.map(value=>
     <div className='row'>
     <h1>{value.Prenom} </h1>
      <h1><button onClick={()=>this.handleRemove(value.id)}>-</button> </h1>
      </div>
    )}
    </div>
 </div>
  );
}
}

export default App;
