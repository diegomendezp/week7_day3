import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(){
    super();
    console.log('COMPONENTE CONSTRUIDO');

    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    // Event listeners & API calls
    console.log('COMPONENTE MONTADO');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('COMPONENTE ACTUALIZADO');
    console.log('PROPS ANTERIORES: ', prevProps);
    console.log('ESTADO ANTERIOR: ', prevState);
  }

  componentWillUnmount(){
    // Remove event listeners
    console.log('COMPONENTE DESMONTADO');
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      value: this.state.value + 1
    })
  }

  render() {
    console.log('COMPONENTE RENDERIZADO');
    return (
      <div>
        <h3>Soy un contador: {this.state.value}</h3>
        <button onClick={this.handleClick}>Añadir</button>
      </div>
    )
  }
}
