import React from 'react'

export default function QueryStrings(props) {
  console.log(props);

  const query = new URLSearchParams(props.location.search);
  const place = query.get('place');
  const date = query.get('date');

  return (
    <div>
      <h1>Resultados búsqueda</h1>
      <p>Llamada a la API con place: {place} - date: {date}</p>
    </div>
  )
}
