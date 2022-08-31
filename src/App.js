import './App.css';
import { useState } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import TestsPage from './components/TestsPage/TestsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './components/QuizPage/QuizPage';

function App() {
  const [userName, setUserName] = useState('');


  return (
    <BrowserRouter>
      <section className="main">
        <Header />
        <div className='wrapper'>
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route path='/cabinet' element={<div>cabinet page</div>}></Route>
            <Route path='/result' element={<div>result page</div>}></Route>
            <Route path='/tests/quiz' element={<QuizPage userName={userName} setUserName={setUserName} />}></Route>
            <Route path='/tests' element={<TestsPage />}></Route>
          </Routes>
        </div>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
