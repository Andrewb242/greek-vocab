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
            {declension.variants.map((variant, index) => (
              <th key={index} className="noun-header" colSpan={2}>{variant.name}</th>
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

export default function NounDeclensions() {
  const { article, first, firstShortAlpha, firstMasculine, second, third, thirdDeclensionNounVariants } = declensions;

  return (
    <div className='noun'>
      <h1>Noun Declensions</h1>
      <NounTable declension={article} />
      <NounTable declension={first} />
      <NounTable declension={firstShortAlpha} />
      <NounTable declension={firstMasculine} />
      <NounTable declension={second} />
      <NounTable declension={third} />
      <NounTable declension={thirdDeclensionNounVariants} />
    </div>
  );
}
