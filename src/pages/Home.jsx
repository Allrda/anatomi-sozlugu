import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import termsData from '../terms.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const found = termsData.find(t => t.isim.toLocaleLowerCase('tr-TR') === searchTerm.toLocaleLowerCase('tr-TR').trim());
    if (found) navigate(`/terim/${found.isim}`);
    else setError("Bu terim henüz sözlüğe eklenmemiş.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-6">
      <div className="w-full max-w-2xl text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 tracking-tighter italic">
          Anatomi <span className="font-serif italic text-gray-400">&</span> Fizyoloji
        </h1>
        
        <form onSubmit={handleSearch} className="relative mt-12 group">
          <input 
            type="text" 
            placeholder="Bir terim yazın (örn: Kalp)..." 
            className="w-full bg-gray-50 border-none px-8 py-6 rounded-2xl text-2xl outline-none ring-1 ring-gray-100 focus:ring-2 focus:ring-black transition-all duration-500 placeholder:text-gray-300 text-center shadow-sm hover:shadow-md"
            onChange={(e) => {setSearchTerm(e.target.value); setError('');}}
          />
          {error && <p className="absolute -bottom-8 left-0 right-0 text-red-400 text-sm font-light italic">{error}</p>}
        </form>

        <div className="flex justify-center gap-4 mt-12">
          <button 
            onClick={() => navigate('/sozluk')} 
            className="px-10 py-4 bg-black text-white rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl"
          >
            Sözlüğü Keşfet
          </button>
        </div>
      </div>
    </div>
  );
}