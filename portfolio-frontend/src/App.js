import './index.css';
import Main from './components/Main'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
