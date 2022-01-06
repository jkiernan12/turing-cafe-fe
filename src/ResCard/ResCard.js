import React from 'react';
import './ResCard.css';
import { deleteData } from '../api-calls/api-calls';

function ResCard({resInfo, allReservations, setAllReservations}) {

  const deleteItem = (id) => {
    // e.preventDefault()
    setAllReservations(allReservations.filter(res => res.id !== id))

    deleteData(id)
  }

  return (
    <article className='ResCard'>
      <h3 className='res-name'>{resInfo.name}</h3>
      <p>{resInfo.date}</p>
      <p>{resInfo.time} pm</p>
      <p>Number of guests: {resInfo.number}</p>
      <button id={resInfo.id} className='cancel-button' onClick={() => deleteItem(resInfo.id)}>Cancel</button>
    </article>
  );
}

export default ResCard;