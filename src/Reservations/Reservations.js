import React from 'react';
import { useState, useEffect } from 'react';
import ResCard from '../ResCard/ResCard';
import './Reservations.css'

function Reservations ({allReservations}) {
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