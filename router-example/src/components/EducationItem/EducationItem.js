import React from 'react'
import { Link } from 'react-router-dom'

export default function EducationItem({ schoolName, city, country, degree, schoolStarted, schoolEnded }) {
  return (
    <div>
      <h3>School: {schoolName}</h3>
      <p>Place: {city} - {country}</p>
      <p>Degree: {degree}</p>
      <p>{schoolStarted} - {schoolEnded}</p>
      <Link to={`/education/${schoolName}`}>View Details</Link>
      <hr />
    </div>
  )
}
