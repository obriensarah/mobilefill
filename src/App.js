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
import ReactDOM from "react-dom";
import SideBar from "./sidebar";


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>Text</h1>
          <p>Some explaination</p>
        <Button onClick={this.props.closePopup}>close</Button>
        </div>
      </div>
    );
  }
}

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
    }
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div>
        <Button  id='info' onClick={this.togglePopup.bind(this)} variant="secondary">
          <InfoSquare color="ghostwhite" size={25} />
        </Button>
        {this.state.showPopup ? 
          <Popup closePopup={this.togglePopup.bind(this)}/>
          : null
        }
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
        <Navbar bg="dark">
          <Navbar.Text>
            <SideBar />
          </Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Info />
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
          <Button onClick={OpenNewWindow} className="ml-5" variant="secondary"><XSquare color="ghostwhite" size={25}/></Button>
          </div>
        </Navbar>
      </div>
    );
}


function OpenNewWindow() {
    window.location.replace('https://www.reddit.com/r/PetTheDamnDog/');
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
      progress: 50,
      showPopup: false,
    }
  }

  handleClick() {
    switch(this.state.menuStatus)
    {
      case "open":
        this.setState({
          menuStatus:"close",
          style:"menu active"
        });
        break;
      case "close":
        this.setState({
          menuStatus:"open",
          style:"menu"
        });
        break;
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
    const popup= metadata.popup;


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

