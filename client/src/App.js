import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Results from './Components/Results';
import './App.css';

class App extends Component {
  state = {
    'userNumber': '',
    'english': false,
    'results': []
  }

  fetchResults(number, english){
    fetch(`http://localhost:4000/telephonewords/${number}/${english}`)
      .then((response) => response.text())
      .then(text => this.setState({'results': text.split(', ')}));
  }

  handleUserInput(e) {
    this.setState({'userNumber': this.state.userNumber + e.target.value}, () => {
      this.fetchResults(this.state.userNumber, this.state.english);
    });
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
