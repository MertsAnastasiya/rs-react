import {Routes, Route} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <h1 className="h1">Home</h1> } />
        <Route path="about" element={ <h1 className="h1">About us</h1> } />
        <Route path="*" element={ <h1 className="h1">The page not found</h1> } />
      </Routes>
    </div>
  )
}

export default App
