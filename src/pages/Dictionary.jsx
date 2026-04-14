import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import termsData from '../terms.json';

const TR = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");

export default function Dictionary() {
  const [activeLetter, setActiveLetter] = useState('A');
  const filtered = termsData.filter(t => t.harf === activeLetter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row-reverse gap-10">
      <div className="md:w-20 flex md:flex-col overflow-x-auto no-scrollbar gap-2 sticky top-5 h-fit pb-4">
        {TR.map(l => (
          <button key={l} onClick={() => setActiveLetter(l)} className={`min-w-[40px] h-10 flex items-center justify-center rounded-full text-sm transition-all ${activeLetter === l ? 'bg-black text-white scale-110 shadow-lg' : 'hover:bg-gray-100 text-gray-400'}`}>{l}</button>
        ))}
      </div>
      <div className="flex-grow">
        <h2 className="text-6xl font-thin mb-10 text-gray-200">{activeLetter}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(t => (
            <Link key={t.isim} to={`/terim/${t.isim}`} className="p-6 border border-gray-50 hover:bg-gray-50 transition-all rounded-xl text-lg font-light italic">{t.isim}</Link>
          ))}
          {filtered.length === 0 && <p className="text-gray-300 italic">Bu harf için henüz terim eklenmedi.</p>}
        </div>
      </div>
    </div>
  );
}