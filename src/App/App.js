import React, { Component } from 'react';
import Container from '../Container/Container.js'
import { getCards } from '../Fetch/fetch.js'
import Form from '../Form/Form.js'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      purchases: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/purchases')
    .then(response => response.json())
    .then(data => this.setState({ purchases: data}))
    .catch(error => error.message)
  }

  createCard = (e, card) => {
    e.preventDefault();
    this.setState({ purchases: [...this.state.purchases, card]})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className='app-title'>My Order History</h1>
          <div className='purchase-form'>
          <Form createCard={ this.createCard }/>
          </div>
        </header>
        <div className='purchase-container'>
            <Container data={this.state.purchases} />
        </div>
      </div>
    );
  }
}


