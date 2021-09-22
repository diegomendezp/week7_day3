import React from 'react'
import { Link } from 'react-router-dom'
import { education } from '../../fakeAPI'
import EducationItem from '../EducationItem/EducationItem'

export default function Education() {
  const displayEducation = () => {
    return (
      education.map((e, idx) => {
        return (
          <EducationItem {...e} key={`${e.schoolName}-${idx}`} />
        )
      })
    )
  }
  return (
    <section>
      <h1>Consulta mi educación: </h1>

      <div className="education-list">
        {
          displayEducation()
        }
      </div>
      <Link to="/">Volver</Link>
    </section>
  )
}
