import { useState, useEffect } from 'react';
import './App.css';
import vocabData from './data/vocabData.json';
import SearchResult from './components/SearchResult';

function App() {
  const chapterArray = vocabData.chapters;
  const [selectedChapters, setSelectedChapters] = useState(chapterArray);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentDictionary, setCurrentDictionary] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const updateSelectedChapters = (chapter) => {
    setSelectedChapters((prevState) =>
      prevState.includes(chapter)
        ? prevState.filter((c) => c !== chapter)
        : [...prevState, chapter]
    );

    setCurrentDictionary([]); // Reset current dictionary when chapters change
  };

  const handleSearch = (event) => {
    const search = event.target.value.trim();
    setSearchTerm(search);
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
    // Only filter search results when the searchTerm changes
    const filteredResults = currentDictionary.filter((word) => {
      return (
        (word.english && word.english.includes(searchTerm)) ||
        (word.transliteration && word.transliteration.includes(searchTerm))
      );
    });
    setSearchResults(filteredResults);
  }, [searchTerm, currentDictionary]);

  return (
    <div className="app">
      <div className='app-title-container'>
        <div className='app-title'>GREEK 101-102 Vocabulary Search</div>
        <img className='app-title-img' src='./omega-greek-vocab.svg' alt='Omega'/>
      </div>
      <div className="app-chapter-select-container">
        {chapterArray.map((chapter, index) => (
          <div
            className={`app-chapter-select-button ${selectedChapters.includes(chapter) ? 'selected' : ''}`}
            onClick={() => {
              updateSelectedChapters(chapter);
            }}
            key={index}
          >
            {chapter}
          </div>
        ))}
      </div>

      <div className="app-search">
        <input
          className='app-search-bar'
          type="text"
          placeholder="Search by meaning or transliteration"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="app-search-results">
        {searchResults.map((word, index) => (
          <SearchResult word={word} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default App;
