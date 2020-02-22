import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Navbar from 'react-bootstrap/Navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {List, XSquare, ChevronLeft, InfoSquare} from 'react-bootstrap-icons'
import data from './data';


class Header extends React.Component {
  render() {
    return(
        <Navbar bg="dark">
          <Navbar.Text><Button variant="secondary"><List color="ghostwhite" size={25}/></Button></Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="secondary"><InfoSquare color="ghostwhite" size={25} /></Button>
            </Navbar.Collapse>
        </Navbar>
      )
  }
}

function Footer(props) {
  return(
      <div className="fixed-bottom">
        <Navbar bg="dark">
          <div className="ml-3">
          <Button className="mr-5" variant="secondary" onClick={() => props.onBackClick()}><ChevronLeft color="ghostwhite" size={25} /></Button>
          <Button className="ml-5 mr-5" variant="secondary" onClick={() => props.onNextClick()}>Next</Button>
          <Button className="ml-5" variant="secondary"><XSquare color="ghostwhite" size={25}/></Button>
          </div>
        </Navbar>
      </div>
    );
}

function Question(props) {
  return(
    <Card className="mt-5 ml-5 mr-5 mb-5">
      <Card.Header>{props.label}</Card.Header>
      <Card.Body>
        <Card.Title>{props.question}</Card.Title>
        <Card.Text>
          {props.info}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

class SideBar extends React.Component {
  render() {
        return (
            <Modal className='menu-sidebar left' show={this.props.isVisible} onHide={this.props.onHide} autoFocus keyboard>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>hello</div>
                </Modal.Body>
            </Modal>
        );
    }
}

function SingleTextInput(props) {
  return(
        <Form className="mt-3 ml-5 mr-5">
          <Form.Group controlId={props.controlId}>
            <Form.Control type={props.controlId} placeholder={props.placeHolder} />
          </Form.Group>
        </Form>
    );
}

function ButtonInput(props) {
  return(
    <Button className="mt-3 ml-5 mr-5">{props.children}</Button>
  );
}

function DropdownInput(props) {
  return(
    <DropdownButton id="dropdown-basic-button" title={props.buttonText} className="mt-3 ml-5 mr-5">
      <Dropdown.Item onClick={() => console.log("you clicked Action!")}>Action</Dropdown.Item>
    </DropdownButton>
  );
}

const inputMap = {
  "SingleTextInput": SingleTextInput,
  "ButtonInput": ButtonInput,
  "DropdownInput": DropdownInput,
};

function Input(props) {
  const inputs = props.inputs;

  return (
    inputs.map((input, index) => (<div key={index}>
      {React.createElement(inputMap[input.component.compName], input.component.compProps, input.component.compChildren)}
      </div>))
  );
}

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currQuestion: 0, //index of current question
      progress: 50
    }
  }

  getQuestionMetadata() {
    return data.data[this.state.currQuestion];
  }

  handleNextClick() {
    if (this.state.currQuestion < data.data.length - 1) {
      this.setState({
        currQuestion: this.state.currQuestion + 1
      });
    }
  }

  handleBackClick() {
    if (this.state.currQuestion > 0) {
      this.setState({
        currQuestion: this.state.currQuestion - 1
      })
    }
  }

  render() {

    const metadata = this.getQuestionMetadata();

    const question = metadata.question.question;
    const label = metadata.question.label;
    const info = metadata.question.info;
    const inputs = metadata.inputs;
    

    return(
      <div>
        <Header />
        <ProgressBar now={this.state.progress} />
        <Question question={question} label={label} info={info}/>
        <Input inputs={inputs} />
        <Footer onNextClick={() => this.handleNextClick()} onBackClick={() => this.handleBackClick()}/>
      </div>
    );
  }
}

function App() {

  return(
    <Template />
  );
}

export default App;

