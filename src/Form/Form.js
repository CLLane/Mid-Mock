import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      img: 'https://s7d2.scene7.com/is/image/DesignWithinReach/PD_2514014_MAIN?$main$',
      name: '',
      description: '',
      price: ''
    }
  }

updateInputs = (e) => {
  this.setState({ [e.target.name]: e.target.value})
}

  render() {
    return (
      <form>
        <input 
        type='text'
        name='name'
        placeholder='Product Name'
        value={this.state.name}
        onChange={(e) => this.updateInputs(e)}>
        </input>
        <input
          type='text'
          name='description'
          placeholder='Product Description'
          value={this.state.description}
          onChange={(e) => this.updateInputs(e)}>
        </input>
        <input
          type='text'
          name='price'
          placeholder='Product price'
          value={this.state.price}
          onChange={(e) => this.updateInputs(e)}>
        </input>
        <button></button>
      </form>
    )
  }
}