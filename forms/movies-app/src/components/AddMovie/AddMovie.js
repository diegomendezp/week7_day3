import React, { Component } from 'react'
import './AddMovie.css'

export default class AddMovie extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     title: ""
  //   }
  // }

  state = {
    title: "",
    year: "",
    runtime: "",
    hasOscar: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addMovie(this.state);
    this.setState({
      title: "",
      year: "",
      runtime: "",
      hasOscar: false
    })
  }

  // handleTitleChange = (e) => {
  //   const { value } = e.target;

  //   this.setState({
  //     ...this.state,
  //     title: value
  //   })
  // }

  // handleYearChange = (e) => {
  //   const { value } = e.target;

  //   this.setState({
  //     ...this.state,
  //     year: value
  //   })
  // }

  // handleRuntimeChange = (e) => {
  //   const { value } = e.target;

  //   this.setState({
  //     ...this.state,
  //     runtime: value
  //   })
  // }

  // handleHasOscarChange = (e) => {
  //   const { checked } = e.target;

  //   this.setState({
  //     ...this.state,
  //     hasOscar: checked
  //   })
  // }

  handleChange = (e) => {
    const { value, checked, name, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    this.setState({
      ...this.state,
      [name]: newValue
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Título: <input type="text" value={this.state.title} name="title" onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Año: <input type="text" name="year" value={this.state.year} onChange={e => this.handleChange(e)} />
        </label>

        <label>
          Duración: <input type="text" name="runtime" value={this.state.runtime} onChange={e => this.handleChange(e)} />
        </label>

        <label>
          ¿Ha ganado algún Oscar?: <input type="checkbox" name="hasOscar" checked={this.state.hasOscar} onChange={e => this.handleChange(e)} />
        </label>

        <input type="submit" value="Crear película" />
      </form>
    )
  }
}
