import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Navbar from './components/Navbar';
import VerbChart from './components/VerbChart';
import NounDeclensions from './components/NounDeclensions';
import VocabGame from './components/VocabGame';
import Adjectives from './components/Adjectives';

function App() {
  return (
    <Router basename='/greek-vocab'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Search/>}/>
        <Route path='/verb-chart' element={<VerbChart/>}/>
        <Route path='/noun' element={<NounDeclensions/>}/>
        <Route path='/adjectives' element={<Adjectives/>} />
        <Route path='/vocab-game' element={<VocabGame/>}/>
      </Routes>
    </Router>
  );
}

export default App;
