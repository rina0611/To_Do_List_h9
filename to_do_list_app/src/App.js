import React,{Component} from 'react';
import Todolist_create from "./components/Todolist_create";
import Todolist_item from "./components/Todolist_item";
import Todolist_list from "./components/Todolist_list";
import Header_theTitle from "./components/Header_theTitle";
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
      title : e.target.title.value
      
    })
  }  

  handleSubmit=(e)=>{
    e.preventDefault();
  }

  render(){
    return (
    <div>   
      <Header_theTitle title="To Do List - 오늘 할 일 "></Header_theTitle>
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
