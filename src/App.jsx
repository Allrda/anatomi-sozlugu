import React from 'react'; // Bunu ekle
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dictionary from './pages/Dictionary';
import TermDetail from './pages/TermDetail';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sozluk" element={<Dictionary />} />
            <Route path="/terim/:isim" element={<TermDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}