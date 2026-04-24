import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAnatomyTerms } from '../utils/api'; // Gereksiz importlar temizlendi

export default function Dictionary() {
  const [terms, setTerms] = useState([]);
  const [activeLetter, setActiveLetter] = useState('A');
  
  useEffect(() => {
    // Verileri doğrudan Firebase'den yüklüyoruz
    const loadTerms = async () => {
      const data = await fetchAnatomyTerms();
      setTerms(data);
    };
    
    loadTerms();
  }, []);

  const ALPHABET = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");
  
  // Terimleri harfe göre filtrele
  const filtered = terms.filter(t => (t.harf || (t.isim && t.isim.charAt(0).toLocaleUpperCase('tr-TR'))) === activeLetter);

  return (
    <div className="main-layout bg-transparent"> 
      <div className="content-wrapper">
        <div className="glass-box">
          
          {/* HARFLER */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '30px' }}>
            {ALPHABET.map(l => (
              <button 
                key={l} 
                onClick={() => setActiveLetter(l)} 
                className={`letter-btn ${activeLetter === l ? 'active-letter' : 'bg-white/70 text-gray-700'}`}
              >
                {l}
              </button>
            ))}
          </div>
          
          {/* KELİME KARTLARI */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px' }}>
            {filtered.map((t, i) => (
              <Link 
                key={i} 
                to={`/terim/${t.isim}`} 
                className="term-link"
              >
                {t.isim}
              </Link>
            ))}
            {filtered.length === 0 && (
              <div style={{gridColumn: 'span 5', textAlign: 'center', color: '#6b7280', fontStyle: 'italic', padding: '20px'}}>
                Bu harfte henüz kelime bulunmuyor.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}