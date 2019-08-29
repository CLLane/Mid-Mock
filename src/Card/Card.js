import React from 'react';
import './Card.css'
const Card = ({ data }) => {
  return (
    <article className='purchase-container'>
      <img src={data.img} alt=''/>
      <h1>{ data.name }</h1>
      <p>{ data.description }</p>
      <p>${data.price}</p>
    </article>
  ) 
}

export default Card;