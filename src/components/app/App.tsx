import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1 className="h1">About us</h1>} />
        <Route path="*" element={<h1 className="h1">The page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
