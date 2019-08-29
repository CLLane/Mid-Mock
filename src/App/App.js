import React, { Component } from 'react';
import Container from '../Container/Container.js'
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
 

    postToApi(card){
        const options = {
          method: 'POST',
          body: JSON.stringify({ ...card }),
          headers: {
            'Content-Type': 'application/json'
          }
      }
      fetch('http://localhost:3001/api/v1/purchases/', options).then(res => res.json).catch(err => err.message)
    }


  createCard = (e, card) => {
    console.log(e);
    e.preventDefault();
    let cardWithId = {...card, id: Date.now()}
    this.postToApi(cardWithId)
    this.setState({ purchases: [...this.state.purchases, cardWithId]})
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
            <Container  data={this.state.purchases} />
        </div>
      </div>
    );
  }
}


