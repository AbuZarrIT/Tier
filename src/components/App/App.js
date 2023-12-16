import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import Tier from '../Tier/Tier';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Tier" element={<Tier />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
