import React, { Component, useState, useEffect } from 'react';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import { fetchAllRes } from '../api-calls/api-calls';
import './App.css';

function App() {
  const [allReservations, setAllReservations] = useState('')

  useEffect(() => {
    fetchAllRes()
    .then(data => setAllReservations(data))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <Form />
      <Reservations allReservations={allReservations} />
    </div>
  )
}

export default App;
