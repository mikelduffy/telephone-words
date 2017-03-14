import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';
import './App.css';

class App extends Component {
  state = {
    'userNumber': '',
    'results': []
  }

  handleUserInput(e) {
    this.setState({'userNumber': this.state.userNumber + e.target.value});
  }

  handleClearUserInput(){
    this.setState({
      'userNumber': '',
      'results': []
    });
  }

  render() {
    return (
      <div className='container'>
        <Row>
          <Col xs={12}>
            <Header></Header>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <UserInput 
              userNumber={this.state.userNumber}
              onUserInput={this.handleUserInput.bind(this)}
              onClearUserInput={this.handleClearUserInput.bind(this)}
            ></UserInput>
          </Col>
          <Col xs={6}>
            <Results results={this.state.results}></Results>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
