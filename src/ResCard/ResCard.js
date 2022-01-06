import React from 'react';
import './ResCard.css';

function ResCard({resInfo}) {
  return (
    <article className='ResCard'>
      <h3 className='res-name'>{resInfo.name}</h3>
      <p>{resInfo.date}</p>
      <p>{resInfo.time} pm</p>
      <p>Number of guests: {resInfo.number}</p>
      <button className='cancel-button'>Cancel</button>
    </article>
  );
}

export default ResCard;