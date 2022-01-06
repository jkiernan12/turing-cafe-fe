import React from 'react';
import './ResCard.css';

function ResCard({resInfo}) {
  return (
    <article className='ResCard'>
      <p>{resInfo.name}</p>
      <p>{resInfo.date}</p>
      <p>{resInfo.time}</p>
      <p>{resInfo.number}</p>
      <button>Cancel</button>
    </article>
  );
}

export default ResCard;