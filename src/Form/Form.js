import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <form>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} type="text"/>
      <input placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} type="text"/>
      <input placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} type="text"/>
      <input placeholder="Guests" value={guests} onChange={(e) => setGuests(e.target.value)} type="text"/>
    </form>
  );
}

export default Form;