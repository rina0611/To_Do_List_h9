import React,{Component} from "react";
import {Collapse, Button, InputGroup, FormControl, ButtonToolbar,Card,Form ,Accordion} from 'react-bootstrap';
import Calendar_pick from "./Calendar_pick"

class Todolist_create extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
          
        };
      }
    
      render() {
        const { open} = this.state;
        return (
          <div>
            <ButtonToolbar>
            <Button
              onClick={() => this.setState({ open: !open })}
              aria-controls="example-fade-text"
              aria-expanded={open}
              variant="primary" size='lg'
              style={{margin:'1em'}}
              size="lg"
            >
              +
            </Button></ButtonToolbar>
            <Collapse in={this.state.open}>
              <div id="create_to-do">
                <Card border="primary" style={{width:'50%',height:'30%',margin:"0.5em"}}>
                <Card.Header >To do list 작성하기</Card.Header>
                <Card.Body>
                                        
                    <InputGroup className="mb-3" size="lg">
                        <InputGroup.Prepend> 
                        <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="제목을 입력하세요."
                            aria-label="제목을 입력하세요."
                            aria-describedby="basic-addon1"/>
                    </InputGroup>
                    
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        <InputGroup.Text>내용</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            placeholder="내용을 입력하세요."
                            as="textarea" 
                            aria-label="With textarea" />
                    </InputGroup>
                    <br />
                    <>
                    {/* <Accordion defaultActiveKey="0">
                        <Card border="info" style={{flex:1, width:'35%',padding:'0.5 em'}}>
                        <Card.Body>
                            <Accordion.Toggle as={Button}  eventKey="0">
                                마감기한 설정
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Calendar_pick></Calendar_pick>
                            </Accordion.Collapse>
                        </Card.Body>
                        </Card>
                    </Accordion> */}
                    <Card  border="info" style={{width:'30%',padding:'0.5 em'}}>
                        <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicChecbox">
                            <Form.Check  
                            type="checkbox" 
                            data-toggle="collapse"
                            data-target='#collapsediv'
                            inline label="마감 기한을 설정 " />
                            </Form.Group>

                            <div id='collapsediv'>
                            <Calendar_pick></Calendar_pick>
                            </div>
                        </Form>
                        </Card.Body>
                    </Card>
                    </>
                    <br />
                    <br />
                    <ButtonToolbar>
                        <Button variant="primary" size="lg">
                        추가하기
                        </Button>
                    </ButtonToolbar>
                    
                </Card.Body>
                </Card>
              </div>
            </Collapse>
          </div>
        );
      }

}

export default Todolist_create;