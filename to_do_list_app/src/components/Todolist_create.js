import React,{Component} from "react";
import {Collapse, Button, InputGroup, FormControl, ButtonToolbar,Card,Form , Accordion} from 'react-bootstrap';
import Calendar_pick from "./Calendar_pick"

class Todolist_create extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          open: false,
          
        };
      }
    
      render() {
        const {open} = this.state;
        const{title, text, handleChange,handleSubmit}=this.props;
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
              + 글 쓰기
            </Button></ButtonToolbar>

            <Collapse in={this.state.open}>
              <div id="create_to-do">
                <Card border="primary" 
                    style={{width:'50%',height:'30%',margin:"0.5em"}}
                    action="/create_process" 
                    method="post" 
                    onSubmit={handleSubmit}
                    
                    >
                <Card.Header >To do list 작성하기</Card.Header>
                <Card.Body>
                                        
                    <InputGroup className="mb-3" size="lg">
                        <InputGroup.Prepend> 
                        <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            name="title"
                            placeholder="제목을 입력하세요."
                            aria-label="제목을 입력하세요."
                            aria-describedby="basic-addon1"
                            value={title}
                            onChange={handleChange}
                            />
                    </InputGroup>
                    
                    <InputGroup size="lg">
                        <InputGroup.Prepend>
                        <InputGroup.Text>내용</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl 
                            name="text"
                            placeholder="내용을 입력하세요."
                            as="textarea" 
                            aria-label="With textarea" 
                            value={text}
                            onChange={handleChange}
                            />
                    </InputGroup>
                    <br />
                    <>
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
                        <Button type="submit" variant="primary" size="lg">
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