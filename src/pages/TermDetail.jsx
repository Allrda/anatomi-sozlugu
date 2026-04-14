import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import termsData from '../terms.json';

export default function TermDetail() {
  const { isim } = useParams();
  const navigate = useNavigate();
  const term = termsData.find(t => t.isim === isim);

  if (!term) return <div className="p-20 text-center">Terim bulunamadı.</div>;

  const sameLetter = termsData.filter(t => t.harf === term.harf);
  const idx = sameLetter.findIndex(t => t.isim === term.isim);

  return (
    <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} className="max-w-3xl mx-auto px-6 py-12">
      <button onClick={() => navigate('/sozluk')} className="mb-10 text-gray-400 hover:text-black transition-colors text-xs font-bold tracking-widest uppercase">← Sözlüğe Dön</button>
      <div className="w-full aspect-video bg-gray-50 rounded-3xl mb-10 overflow-hidden border border-gray-100">
        <img src={term.gorsel} alt={term.isim} className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'}/>
      </div>
      <h1 className="text-5xl font-bold mb-6 tracking-tight">{term.isim}</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-20 font-light italic">{term.aciklama}</p>
      <div className="flex justify-between border-t pt-10">
        {idx > 0 && <button onClick={() => navigate(`/terim/${sameLetter[idx-1].isim}`)} className="text-left"><span className="block text-[10px] text-gray-400 uppercase tracking-widest">Önceki</span>{sameLetter[idx-1].isim}</button>}
        {idx < sameLetter.length - 1 && <button onClick={() => navigate(`/terim/${sameLetter[idx+1].isim}`)} className="text-right ml-auto"><span className="block text-[10px] text-gray-400 uppercase tracking-widest">Sonraki</span>{sameLetter[idx+1].isim}</button>}
      </div>
    </motion.div>
  );
}