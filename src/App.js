import './App.css';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
