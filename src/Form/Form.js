import React, { useState } from 'react';
import { postData } from '../api-calls/api-calls';
import './Form.css'

function Form({allReservations, setAllReservations}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(0);

  const submitRes = (e) => {
    e.preventDefault();
    let cleanedDate = `${new Date(date).getMonth() + 1}/${new Date(date).getDay()}`
    const newData = {
      id: Date.now(),
      date: cleanedDate,
      number: guests,
      name, time
    }

    postData(newData)
    setAllReservations([...allReservations, newData])

    setName('')
    setDate('')
    setTime('')
    setGuests('')
  }

  return (
    <form>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
      <input placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} type="date"/>
      <input placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} type="time"/>
      <input placeholder="Guests" value={guests} onChange={(e) => setGuests(e.target.value)} type="number"/>
      <button className='reserve-button' onClick={submitRes}>Make Reservation</button>
    </form>
  );
}

export default Form;