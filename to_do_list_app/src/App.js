import React,{Component} from 'react';
import Todolist_create from "./components/Todolist_create";
import Todolist_item from "./components/Todolist_item";
import Todolist_list from "./components/Todolist_list";
import {Navbar} from 'react-bootstrap';
import uuid from 'uuid';
class App extends Component {
  
  state={
    items:[],
    id:0,
    title:'',
    text:'', 
    date:'',
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({  
      title : e.target.title.value,
      text : e.target.text.value,
      
    })
  }  
  handleSubmit=(e)=>{
    e.preventDefault();
  }

  render(){
    return (
    <div>   
      <h1>
        <Navbar bg="light">
          <Navbar.Brand href="#home"> To Do List</Navbar.Brand>
        </Navbar>
      </h1>
        <Todolist_create 
          title={this.state.title}
          text = {this.state.text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}></Todolist_create>

        <Todolist_list></Todolist_list>
        <Todolist_item></Todolist_item>
        
        
    </div>
    );
  }
}

export default App;
