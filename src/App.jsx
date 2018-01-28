import React, {Component} from 'react';
import './App.css';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'March 26, 2018',
      newDeadline:''
    }
  }
  changeDeadLine(){
    this.setState({deadline: this.state.newDeadline})
  }

  render(){
    return(
      <div className="App">
            <div className="App-title">
              Countdown to {this.state.deadline}
            </div>
          <Clock
            deadline = {this.state.deadline}
          />
       <Form inline>
        <FormControl
            className="Deadline-input"
            placeholder='December 25, 2017'
            onChange={event => this.setState({newDeadline: event.target.value})}

        />
        <Button onClick={() => this.changeDeadLine()}>
          Submit
        </Button>
      </Form>
      </div>
      )

  }
}

export default App;
