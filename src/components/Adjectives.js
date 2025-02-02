import React from 'react'
import "./Adjectives.css"

import adjData from '../data/nounDeclensions.json'

const cases = [
  { id: 'nominative', label: 'Nominative' },
  { id: 'genitive', label: 'Genitive' },
  { id: 'dative', label: 'Dative' },
  { id: 'accusative', label: 'Accusative' },
  { id: 'vocative', label: 'Vocative'}
]

function AdjectiveTable({declension}) {
    return (
      <div>
        <h2>{declension.title}</h2>
        <table className="adj-table">
          <thead>
            <tr>
              <th></th>
              {declension.variants.map((variant, index) => (
                <th key={index} className="adj-header" colSpan={2}>{variant.name}</th>
              ))}            
            </tr>
            <tr>
              <th></th>
              {declension.variants.map(() => (
                <>
                  <th>Singular</th>
                  <th>Plural</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {cases.map(({ id, label }) => (
              <tr key={id}>
                <td>{label}</td>
                {declension.variants.map((variant, index) => (
                <>
                  <td>{variant.cases[id].singular}</td>
                  <td>{variant.cases[id].plural}</td>
                </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

export default function Adjectives() {
  const { firstSecondAdjectives, thirdDeclensionAdjectives } = adjData
  return (
    <div className='adj'>
      <h1>Adjectives</h1>
        <AdjectiveTable declension={firstSecondAdjectives}/>
        <AdjectiveTable declension={thirdDeclensionAdjectives}/>
    </div>
  )
}
