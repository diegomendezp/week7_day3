import React from 'react'
import { Link } from 'react-router-dom';
import { places } from '../../fakeAPI';

export default function Experience() {
  return (
    <section>
      <h1>
        Consulta los sitios en los que he trabajado
      </h1>
      <div className="places-list">
        {
          places.map((place, idx) => {
            return (
              <div key={`${place.name}-${idx}`}>
                <h3>School: {place.name}</h3>
                <p>City: {place.city}</p>
                <p>Country: {place.country}</p>
                <p>Job Title: {place.jobTitle}</p>
                <p>Job Description: {place.jobDescription}</p>
                <p>{place.jobStarted} - {place.jobEnded ? place.jobEnded : "Current"}</p>
              </div>
            )
          })
        }
      </div>
      <Link to="/">Volver</Link>
    </section>
  )
}
