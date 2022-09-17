import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import TestsPage from './components/TestsPage/TestsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuizPage from './components/QuizPage/QuizPage';
import InfoPage from './components/InfoPage/InfoPage';

function App() {

  return (
    <BrowserRouter>
      <section className="main">
        <Header />
        <div className='wrapper'>
          <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route path='/result' element={<div>result page</div>}></Route>
            <Route path='/rules' element={<div>rules page</div>}></Route>
            <Route path='/quiz' element={<QuizPage />}></Route>
            <Route path='/tests' element={<TestsPage />}></Route>
            <Route path='/info' element={<InfoPage />}></Route>
          </Routes>
        </div>
      </section>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
