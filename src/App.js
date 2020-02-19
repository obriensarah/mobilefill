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
    <Card className="mt-5 ml-5 mr-5">
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
        <Form className="mt-5 ml-5 mr-5">
          <Form.Group controlId={props.controlId}>
            <Form.Control type={props.controlId} placeholder={props.placeHolder} />
          </Form.Group>
        </Form>
    );
}

function ButtonInput(props) {
  return(
    <Button className="mt-5 ml-5 mr-5">{props.children}</Button>
  );
}

const inputMap = {
  "SingleTextInput": SingleTextInput,
  "ButtonInput": ButtonInput
};

function Input(props) {
  const compName = props.compName;
  const compProps = props.compProps;
  const compChildren = props.compChildren;
  var inputElement = React.createElement(inputMap[compName], compProps, compChildren);
  return(
    <div>{inputElement}</div>
  );
}

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: ["Enter your name below.", "Sample Question"],
      questionLabels: ["Name", "Sample"],
      questionInfo: [null, "This is extra information about the question"],
      currQuestion: 0, //index of current question
      progress: 50
    }
  }

  getQuestion() {
    return data.data[this.state.currQuestion].question.question;
  }

  getLabel() {
    return data.data[this.state.currQuestion].question.label;
  }

  getInfo () {
    return data.data[this.state.currQuestion].question.info;
  }

  getInput() {
    return data.data[this.state.currQuestion].input.component.compName;
  }

  getInputProps() {
    return data.data[this.state.currQuestion].input.component.compProps;
  }

  getInputChildren() {
    return data.data[this.state.currQuestion].input.component.compChildren;
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
    const question = this.getQuestion();
    const label = this.getLabel();
    const info = this.getInfo();
    const input = this.getInput();
    const inputProps = this.getInputProps();
    const inputChildren = this.getInputChildren();

    return(
      <div>
        <Header />
        <ProgressBar now={this.state.progress} />
        <Question question={question} label={label} info={info}/>
        <Input compName={input} compProps={inputProps} compChildren={inputChildren}/>
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

