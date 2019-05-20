import React,{Component} from 'react';
import Todolist_create from "./components/Todolist_create";
import Todolist_item from "./components/Todolist_item";
import Todolist_read from "./components/Todolist_read";
import {Navbar,Button,FormControl,Form} from 'react-bootstrap';

class App extends Component {
  render(){
    return (
    <div>
      <h1>
        <Navbar bg="light">
          <Navbar.Brand href="#home"> To Do List</Navbar.Brand>
        </Navbar>
      </h1>
        <Todolist_create></Todolist_create>
        <Todolist_read></Todolist_read>
        <Todolist_item></Todolist_item>
        
        
    </div>
    );
  }
}

export default App;
