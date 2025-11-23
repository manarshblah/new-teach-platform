import React from 'react';
import { ArrowRight, Menu } from 'lucide-react';
import { User } from '../types';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4
        ${isHome ? 'bg-transparent' : 'bg-white shadow-sm'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Right Side (RTL): Navigation/Menu */}
        <div className="flex items-center">
            {isHome ? (
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-gray-700 hover:bg-gray-50 transition-colors">
                    <Menu size={24} />
                </button>
            ) : (
                <button 
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-text-dark hover:bg-gray-100 px-3 py-2 rounded-full transition-colors"
                >
                    <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white">
                        <ArrowRight size={18} />
                    </div>
                    <span className="hidden md:inline font-medium">العودة للرئيسية</span>
                </button>
            )}
        </div>

        {/* Center: Title (Only on Lesson pages) */}
        {!isHome && (
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                <span className="text-xl font-bold text-text-dark">{user.level}</span>
             </div>
        )}

        {/* Left Side (RTL): User Profile */}
        <div className="flex items-center gap-3">
            {/* User Pill */}
            <div className="bg-white rounded-full p-1 pr-4 flex items-center gap-3 shadow-md">
                <span className="font-bold text-gray-800 text-sm md:text-base">{user.name}</span>
                <img 
                    src={user.avatarUrl} 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
            {/* Points Pill */}
            <div className="bg-[#C66A48] text-white px-4 py-2.5 rounded-full font-bold text-sm md:text-base shadow-md">
                {user.points} نقطة
            </div>
        </div>
      </div>
      
      {/* Progress Bar (Only on lesson pages) */}
      {!isHome && (
        <div className="max-w-7xl mx-auto mt-4 px-2">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>8%</span>
                <span>1 - 6 دروس</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-[8%]"></div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;