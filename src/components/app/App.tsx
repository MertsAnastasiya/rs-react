import { Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Header } from '../header/Header';
import './App.scss';
import { Fragment } from 'react';
import { About } from '../About';
import { Error } from '../Error';
import { Form } from '../form/Form';

function App(): JSX.Element {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  );
}

export default App;
