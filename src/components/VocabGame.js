import React from 'react';
import { useState, useEffect } from 'react';
import vocabData from '../data/vocabData.json';
import './VocabGame.css';

export default function VocabGame() {
  const chapterArray = vocabData.chapters;
  const [selectedChapters, setSelectedChapters] = useState(chapterArray);
  const [currentDictionary, setCurrentDictionary] = useState([]);
  const [correctWord, setCorrectWord] = useState(null);
  const [words, setWords] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const updateSelectedChapters = (chapter) => {
    setSelectedChapters((prevState) =>
      prevState.includes(chapter)
        ? prevState.filter((c) => c !== chapter)
        : [...prevState, chapter]
    );

    setCurrentDictionary([]); // Reset current dictionary when chapters change
  };

  useEffect(() => {
    // Combine vocab data from selected chapters
    const updatedDictionary = selectedChapters.reduce((acc, chapter) => {
      const newChapter = chapter.toLowerCase().replace(/\s+/g, '');
      return [...acc, ...(vocabData[newChapter] || [])];
    }, []);
    setCurrentDictionary(updatedDictionary);
  }, [selectedChapters]);

  useEffect(() => {
    if (currentDictionary.length > 0) {
      generateNewQuestion();
    }
  }, [currentDictionary]);

  const generateNewQuestion = () => {
    const randomIndex = Math.floor(Math.random() * currentDictionary.length);
    const newCorrectWord = currentDictionary[randomIndex];
    setCorrectWord(newCorrectWord);
    setSelectedAnswer(null);

    let wordList = [newCorrectWord];
    while (wordList.length < 4) {
      const newRandomIndex = Math.floor(Math.random() * currentDictionary.length);
      const newWord = currentDictionary[newRandomIndex];

      if (!wordList.includes(newWord)) {
        wordList.push(newWord);
      }
    }

    // Shuffle the words
    for (let i = wordList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordList[i], wordList[j]] = [wordList[j], wordList[i]];
    }

    setWords(wordList);
  };

  const checkAnswer = (word) => {
    setSelectedAnswer(word);
    if (word === correctWord) {
      setTimeout(generateNewQuestion, 1500);
    }
  };

  function renderGame() {
    if (currentDictionary.length === 0 || !correctWord || words.length < 4) {
      return <div>No words available. Please select chapters.</div>;
    }

    return (
      <div className="vocab-game-game">
        <div className="vocab-game-greek-word">{correctWord.greek}</div>
        <div className="vocab-game-answers-container">
          {words.map((word, index) => (
            <div
              className={`vocab-game-answer-box ${
                selectedAnswer === word ? 'selected' : ''
              } ${correctWord === word ? 'correct' : 'incorrect'}`}
              key={index}
              onClick={() => checkAnswer(word)}
            >
              {word.english}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="vocab-game">
      <h1>Vocab Memory Game</h1>
      <div className="vocab-game-chapter-select-container">
        {chapterArray.map((chapter, index) => (
          <div
            className={`vocab-game-chapter-select-button ${
              selectedChapters.includes(chapter) ? 'selected' : ''
            }`}
            onClick={() => {
              updateSelectedChapters(chapter);
            }}
            key={index}
          >
            {chapter}
          </div>
        ))}
      </div>
      <div>{renderGame()}</div>
    </div>
  );
}
