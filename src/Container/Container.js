import React from 'react';
import Card from '../Card/Card.js'
import './Container.css';


  const Container = ({ data }) => {
  let cards = data.map(card => {
    return (
      <Card data={ card } />
    )
  })

  return (
    <section>
      {cards}
    </section>
  )
 }

 export default Container;