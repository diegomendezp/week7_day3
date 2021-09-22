import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1>Bienvenid@ a mi portfolio 👋</h1>

      <h3>Full-stack web developer</h3>

      <Link to="/experience">Ver mi experiencia</Link>
      <Link to="/education">Ver mi educación</Link>
      <Link to="/resultados-busqueda?place=Madrid&date=now">Búsqueda</Link>
    </section>
  )
}
