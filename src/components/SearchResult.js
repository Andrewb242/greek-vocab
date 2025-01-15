import React, { useState } from 'react'
import './SearchResult.css'

export default function SearchResult({ word }) {

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="search-result" onClick={handleClick}>
      <div className='search-result-base'>
        <div className='search-result-greek'>{word.greek}</div>
        <div className='search-result-english'>{word.english}</div>
      </div>
      {isOpen? (
      <div className='search-result-extra'>
        <div className='search-result-transliteration'>Transliteration: {word.transliteration}</div>
        {word.speechPart === "noun"? (<div className='search-result-gender'>Gender: {word.gender}</div>):null}
        {word.speechPart === "noun"? (<div className='search-result-declension'>Declension: {word.declension}</div>):null}
        <div className='search-result-speech-part'>Part of Speech: {word.speechPart}</div>
        {word.speechPart === "verb"? (
          <div className='search-result-principal-parts'>
            <div>Present: {word.principalParts.present? word.principalParts.present: "--"}</div>
            <div>Future: {word.principalParts.future}</div>
            <div>Aorist: {word.principalParts.aorist}</div>
            <div>Perfect: {word.principalParts.perfect}</div>
            <div>Perfect Middle: {word.principalParts.perfectMiddle}</div>
            <div>Aorist Passive: {word.principalParts.aoristPassive}</div>
          </div>
          ):null}
      </div>
      ): null}
    <div className='search-result-bottom-bar'/>
    </div>
  )
}
