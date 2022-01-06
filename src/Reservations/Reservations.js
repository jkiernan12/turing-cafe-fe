import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAllRes } from '../api-calls/api-calls';
import ResCard from '../ResCard/ResCard';
import './Reservations.css'

function Reservations () {
  const [allReservations, setAllReservations] = useState('')

  useEffect(() => {
    fetchAllRes()
    .then(data => setAllReservations(data))
  }, [])

  return (
    <section className="Reservations">
      {allReservations && allReservations.map(res => {
        return (
          <ResCard key={res.id} resInfo={res} />

        )
      })}
    </section>
  );
}
 
export default Reservations;