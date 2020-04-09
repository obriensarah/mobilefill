import React, {useState} from 'react';
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
// import data from './data';
import data from './yirou';
// import data from './juan';

console.log(data);


function Info(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div>
        <Button  id='info' onClick={handleShow} variant="secondary">
          <InfoSquare color="ghostwhite" size={25} />
        </Button>
        <Modal show={show} onHide={handleClose} animation={false} className="mb-5">
          <Modal.Header closeButton>
            <Modal.Title>Help</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.text}</Modal.Body>
          <Modal.Body><b>Abuse is never the victim's fault. If you need help, try Illinois Domestic Violence Helpline: 877.863.6338</b></Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="sticky-top">
        <Navbar bg="dark">
          <Navbar.Text><Button variant="secondary"><List color="ghostwhite" size={25}/></Button></Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Info text={this.props.info}/>
            </Navbar.Collapse>
        </Navbar>
        <ProgressBar now={this.props.progress}/>
      </div>
      )
  }
}

function Footer(props) {
  return(
      <div className="mt-5 fixed-bottom">
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
  console.log("props are", props);
  return(
        <Form className="mt-3">
          <Form.Group controlId={props.controlId}>
            <Form.Control type={props.controlId} placeholder={props.placeHolder} onChange={props.changeFunc.bind(this)}/>
          </Form.Group>
        </Form>
    );
}

function ButtonInput(props) {
  return(
    <Button className="mt-3">{props.children}</Button>
  );
}

function DropdownInput(props) {
  const options = props.options;
  return(
    <div>
    <DropdownButton className="scrollable-dropdown" id="dropdown-basic-button" title={props.buttonText} className="mt-3" onChange={props.changeFunc.bind(this)}>
      {
        options.map((option, index) =>
          <Dropdown.Item key={index} onClick={() => console.log("you clicked Action!")}>{option}</Dropdown.Item>
        )
      }
    </DropdownButton>
    </div>
  );
}

function CheckboxInput(props) {
  const options = props.options;
  return(
    <Form className="mt-3" onChange={props.changeFunc.bind(this)}>
      {
        options.map((option, index) =>
          <Form.Check key={index} type='checkbox' id={option} label={option} />
        )
      }
    </Form>
  );
}

function MultipleChoiceInput(props) {
  const options = props.options;
  console.log("options are", options);
  return(
    <Form.Group className="mt-3">
      {
        options.map((option, index) =>
          <Form.Check key={index} type='radio' id={option} label={option} name="multipleChoices" onChange={(props.changeFunc.bind(this))}/>
        )
      }
    </Form.Group>
  );
}

function LongTextInput(props) {
  return(
    <Form.Control as="textarea" rows="13" placeholder={props.placeHolder} onChange={props.changeFunc.bind(this)}/>
  );
}

function NoInput(props) {
  return(
    <div></div>
  );
}

const inputMap = {
  "SingleTextInput": SingleTextInput,
  "ButtonInput": ButtonInput,
  "DropdownInput": DropdownInput,
  "CheckboxInput": CheckboxInput,
  "MultipleChoiceInput": MultipleChoiceInput,
  "LongTextInput": LongTextInput,
  "NoInput": NoInput
};

function Input(props) {

  const inputs = props.inputs;

  return (
    <Card className="border-0 scroll mt-3 ml-5 mr-5 mb-5 pb-5">
    {inputs.map((input, index) => (
      <div key={index} className="pb-5">
      {React.createElement(inputMap[input.component.compName], Object.assign(input.component.compProps, {changeFunc:props.changeFunc, input:{value:null}}), input.component.compChildren)}
      </div>))}
    </Card>
  );
}

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currQuestion: 0, //index of current question
      currInput: []
    }
  }

  getQuestionMetadata() {
    return data.data[this.state.currQuestion];
  }

  handleNextClick() {

    fetch('http://localhost:8080/results', {
      "body": JSON.stringify({result:this.state.currInput}),
      "headers":{
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      "method":"POST"
    }).then((response) => response.json());

    this.setState({currInput:null});

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

  updateProgress() {
    this.setState({progress: this.currQuestion/data.data.length})
  }

  handleInputChange(event) {

    const type = event.target.type;

    if (type == "radio") {
      const selected = event.target.id;
      this.setState({currInput:selected})
    }
    else if (type == "checkbox") {
      const selected = event.target.checked;
      
      if (this.state.currInput == null && selected) {
        console.log("adding ", event.target.id, "to currInput.");
        this.setState({currInput: [event.target.id]});
      }
      else if (selected) {
        const s = this.state.currInput;
        s.push(event.target.id);
        this.setState({currInput:s});
      }
      else if (!selected) {
        const s = this.state.currInput;
        for (var i = 0; i < s.length; i++) {
          if (s[i] == event.target.id) {
            s.splice(i,1);
          }
        }
        this.setState({currInput:s});
      }

      const s = this.state;
      console.log(s);
    }
    else {
      this.setState({currInput:event.target.value});
    }
  }

  render() {

    const metadata = this.getQuestionMetadata();

    const question = metadata.question.question;
    const label = metadata.question.label;
    const info = metadata.question.info;
    const inputs = metadata.inputs;

    const extraInfo = metadata.extraInfo;
    
    return(
      <div>
        <Header info={extraInfo} progress={(this.state.currQuestion+1)/data.data.length * 100} />
        
        <Question question={question} label={label} info={info}/>
        <Input inputs={inputs} changeFunc={(event) => this.handleInputChange(event)}/>
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

