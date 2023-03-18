import { Routes, Route } from 'react-router-dom';
import { Input } from './components/input/Input';
import './App.scss';
import { createClassList } from './utils';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1 className="h1">Home</h1>} />
        <Route path="about" element={<h1 className="h1">About us</h1>} />
        <Route path="*" element={<h1 className="h1">The page not found</h1>} />
      </Routes>
      <Input
        id="search"
        classes={createClassList(['input', 'input_search'])}
        placeholder="Search"
      />
    </div>
  );
}

export default App;
