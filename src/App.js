import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import Navbar from './components/Navbar';
import VerbChart from './components/VerbChart';
import NounDeclensions from './components/NounDeclensions';

function App() {
  return (
    <Router basename='/greek-vocab'>
      <Navbar/>
      <Routes>
        <Route path='/dictionary' element={<Search/>}/>
        <Route path='/verb-chart' element={<VerbChart/>}/>
        <Route path='/noun' element={<NounDeclensions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
