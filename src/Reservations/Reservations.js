import React from 'react';
import ResCard from '../ResCard/ResCard';
import './Reservations.css'

function Reservations ({allReservations, setAllReservations}) {
  return (
    <section className="Reservations">
      {allReservations && allReservations.map(res => {
        return (
          <ResCard key={res.id} resInfo={res} allReservations={allReservations} setAllReservations={setAllReservations}/>
        )
      })}
    </section>
  );
}
 
export default Reservations;