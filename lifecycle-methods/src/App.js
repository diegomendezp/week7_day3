import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import React, { Component } from 'react';

class App extends Component {
  state = {
    showCounter: true
  }

  toggleCounter = () => {
    this.setState({
      ...this.state,
      showCounter: !this.state.showCounter
    })
  }

  render(){
    return (
      <div className="App">
        { this.state.showCounter && <Counter />}
        <button onClick={this.toggleCounter}>Mostrar/Ocultar contador</button>
      </div>
    );
  }
}

export default App;
