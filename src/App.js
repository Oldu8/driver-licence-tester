import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <section className="wrapper">
        <Header />
        <MainPage />
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
