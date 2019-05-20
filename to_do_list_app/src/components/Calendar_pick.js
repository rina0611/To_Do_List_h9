import React,{Component} from "react";
import DatePicker from "react-datepicker";
import {Form,Col,Row,Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
 
 
class Calendar_pick extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      startDate: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          placeholderText="마감 기한 입력"
        />
        
    );
  }
}
export default Calendar_pick;