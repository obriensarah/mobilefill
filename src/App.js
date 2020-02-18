import React from 'react';
import Component from 'react';
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
          <Navbar.Text><Button variant="secondary" href="#"><List color="ghostwhite" size={25}/></Button></Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="secondary" href="#"><InfoSquare color="ghostwhite" size={25} /></Button>
            </Navbar.Collapse>
        </Navbar>
      )
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div className="fixed-bottom">
        <Navbar bg="dark">
          <div className="ml-3">
          <Button className="mr-5" variant="secondary" href="#"><ChevronLeft color="ghostwhite" size={25} /></Button>
          <Button className="ml-5 mr-5" variant="secondary" href="#">Next</Button>
          <Button className="ml-5" variant="secondary"><XSquare color="ghostwhite" size={25}/></Button>
          </div>
        </Navbar>
      </div>
    );
  }
}

// class Question extends React.Component {
//   render() {
//     return(
//       <Card className="mt-5 ml-5 mr-5">
//         <Card.Header>Name</Card.Header>
//         <Card.Body>
//           <Card.Title>Enter your name below.</Card.Title>
//           <Card.Text>
            
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }
// }

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

class SingleTextInput extends React.Component {
  render() {
    return(
        <Form className="mt-5 ml-5 mr-5">
          <Form.Group controlId="formBasicName">
            <Form.Control type="name" placeholder="Jane Doe" />
          </Form.Group>
        </Form>
    );
  }
}

// function SingleTextInput(props) {
//   return(
//         <Form className="mt-5 ml-5 mr-5">
//           <Form.Group controlId={props.message}>
//             <Form.Control type={props.message} placeholder={props.placeholder} />
//           </Form.Group>
//         </Form>
//     );
// }

function ButtonInput(props) {
  return(
    <Button>{props.message}</Button>
  );
}

class Input extends React.Component {
  render() {
    return (<SingleTextInput />);
  }
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
    return this.state.questions[this.state.currQuestion];
  }

  getLabel() {
    return this.state.questionLabels[this.state.currQuestion];
  }

  getInfo () {
    return this.state.questionInfo[this.state.currQuestion];
  }

  render() {
    const question = this.getQuestion();
    const label = this.getLabel();
    const info = this.getInfo();

    return(
      <div>
        <Header />
        <ProgressBar now={this.state.progress} />
        <Question question={question} label={label} info={info}/>
        <Input />
        <Footer />
      </div>
    );
  }
}

function App() {
  // return (
  //   <div>
  //     <Header />
  //     <ProgressBar now={60} />
  //     <Question />
  //     <SingleTextInput />
  //     <Footer />
  //   </div>
  // );
  return(
    <Template />
  );
}

export default App;
