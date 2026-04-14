import React from 'react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-50 flex flex-col items-center gap-4 text-center">
      <div className="h-px w-12 bg-gray-200 mb-4"></div>
      <h3 className="text-sm font-semibold tracking-widest text-gray-900 uppercase">
        Ordu Altınordu Sağlık Meslek Lisesi
      </h3>
      <div className="text-[11px] leading-relaxed text-gray-400 tracking-widest uppercase space-y-1">
        <p>Ordu Altınordu..</p>
        <p>Ordu/Altınordu</p>
        <p className="pt-4 text-gray-300 italic lowercase tracking-normal">© 2026 Anatomi Dijital Sözlük Projesi</p>
      </div>
    </footer>
  );
}