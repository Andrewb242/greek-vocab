import React from 'react'
import "./NounDeclensions.css"

import declensions from "../data/nounDeclensions.json"

const cases = [
  { id: 'nominative', label: 'Nominative' },
  { id: 'genitive', label: 'Genitive' },
  { id: 'dative', label: 'Dative' },
  { id: 'accusative', label: 'Accusative' },
  { id: 'vocative', label: 'Vocative'}
]


function NounTable({declension}) {
  return (
    <div>
      <h2>{declension.title}</h2>
      <table className="noun-table">
        <thead>
          <tr>
            <th></th>
            <th className="noun-header" colSpan={2}>{declension.variants[0].name}</th>
            <th className="noun-header" colSpan={2}>{declension.variants[1].name}</th>
          </tr>
          <tr>
            <th></th>
            <th>Singular</th>
            <th>Plural</th>
            <th>Singular</th>
            <th>Plural</th>
          </tr>
        </thead>
        <tbody>
          {cases.map(({ id, label }) => (
            <tr key={id}>
              <td>{label}</td>
              <td>{declension.variants[0].cases[id].singular}</td>
              <td>{declension.variants[0].cases[id].plural}</td>
              <td>{declension.variants[1].cases[id].singular}</td>
              <td>{declension.variants[1].cases[id].plural}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function NounDeclensions() {
  const { first, second, third } = declensions;

  return (
    <div className='noun'>
      <h1>Noun Declensions</h1>
      <NounTable declension={first} />
      <NounTable declension={second} />
      <NounTable declension={third} />
    </div>
  );
}
