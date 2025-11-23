
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Map from './pages/Map';
import LessonView from './pages/LessonView';
import { MOCK_USER } from './constants';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-right font-sans" dir="rtl" style={{ fontFamily: "'Tajawal', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
          body, button, input, textarea { font-family: 'Tajawal', sans-serif; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <Header user={MOCK_USER} />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Map />} />
            {/* Add padding top for pages that have a solid header (like lesson view) so content isn't hidden */}
            <Route path="/lesson/:id" element={<div className="pt-24"><LessonView /></div>} />
            {/* Fallback */}
            <Route path="*" element={<Map />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
