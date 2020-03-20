import {Navbar} from 'react-bootstrap';
import React,{Component} from 'react';

class Header_theTitle extends Component{
    render(){
        return(
        <h1>
        <Navbar bg="light">
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        </Navbar>
        </h1>
        )

    }
}

export default Header_theTitle;