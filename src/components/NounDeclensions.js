import React from 'react'
import "./NounDeclensions.css"

export default function NounDeclensions() {
  return (
    <div className='noun'>
      <h1>Noun Declensions</h1>
      <h2>1st Declension</h2>
      <table className="noun-table">
        <thead>
          <tr>
            <th></th>
            <th className="noun-header" colSpan={2}>Long alpha</th>
            <th className="noun-header" colSpan={2}>Eta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Singular</td>
            <td>Plural</td>
            <td>Singular</td>
            <td>Plural</td>
          </tr>
          <tr>
            <td>Nominative / Vocative</td>
            <td>-ᾱ</td>
            <td>-η</td>
            <td>-αι</td>
            <td>-αι</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>-ᾱς</td>
            <td>-ης</td>
            <td>-ων</td>
            <td>-ων</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>-ᾳ</td>
            <td>-ῃ</td>
            <td>-αις</td>
            <td>-αις</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>-ᾱν</td>
            <td>-ην</td>
            <td>-ας</td>
            <td>-ας</td>
          </tr>
        </tbody>
      </table>
      <h2>2st Declension</h2>
      <table className="noun-table">
        <thead>
          <tr>
            <th></th>
            <th className="noun-header" colSpan={2}>Masc. / Fem.</th>
            <th className="noun-header" colSpan={2}>Neuter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Singular</td>
            <td>Plural</td>
            <td>Singular</td>
            <td>Plural</td>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>-ος</td>
            <td>-οι</td>
            <td>-ον</td>
            <td>-α</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>-ου</td>
            <td>-ων</td>
            <td>-ου</td>
            <td>-ων</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>-ῳ</td>
            <td>-οις</td>
            <td>-ῳ</td>
            <td>-οις</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>-ον</td>
            <td>-ους</td>
            <td>-ον</td>
            <td>-α</td>
          </tr>
          <tr>
            <td>Vocative</td>
            <td>-ε</td>
            <td>-οι</td>
            <td>-ον</td>
            <td>-α</td>
          </tr>
        </tbody>
      </table>
      <h2>3st Declension</h2>
      <table className="noun-table">
        <thead>
          <tr>
            <th></th>
            <th className="noun-header" colSpan={2}>Masc./Fem.</th>
            <th className="noun-header" colSpan={2}>Neuter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Singular</td>
            <td>Plural</td>
            <td>Singular</td>
            <td>Plural</td>
          </tr>
          <tr>
            <td>Nominative</td>
            <td>---</td>
            <td>-ες</td>
            <td>---</td>
            <td>-α</td>
          </tr>
          <tr>
            <td>Genitive</td>
            <td>-ος</td>
            <td>-ων</td>
            <td>-ος</td>
            <td>-ων</td>
          </tr>
          <tr>
            <td>Dative</td>
            <td>-ι</td>
            <td>-σι(ν)</td>
            <td>-ι</td>
            <td>-σι(ν)</td>
          </tr>
          <tr>
            <td>Accusative</td>
            <td>-α / -ν</td>
            <td>-ας</td>
            <td>---</td>
            <td>-α</td>
          </tr>
          <tr>
            <td>Vocative</td>
            <td>----</td>
            <td>-ες</td>
            <td>----</td>
            <td>-α</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
