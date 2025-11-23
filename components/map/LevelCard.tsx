import React from 'react';
import { Lock } from 'lucide-react';
import { LevelCardData } from '../../constants';

interface LevelCardProps {
  level: LevelCardData;
  onClick: () => void;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, onClick }) => (
    <div 
        className={`
            relative p-6 rounded-[2rem] h-48 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer
            ${level.isLocked ? 'bg-gray-100' : level.color}
            ${!level.isLocked && 'shadow-lg'}
        `}
        onClick={() => !level.isLocked && onClick()}
    >
        <div className="absolute top-0 right-8 w-16 h-5 bg-black/5 rounded-b-xl backdrop-blur-sm"></div>

        <div className="flex justify-between items-start z-10">
            <span className={`font-bold text-lg ${level.isLocked ? 'text-gray-400' : 'text-gray-800'}`}>
                {level.title}
            </span>
            {level.isLocked && <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center"><Lock size={16} className="text-gray-400" /></div>}
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <span className={`text-7xl ${level.isLocked ? 'grayscale opacity-10' : 'opacity-20'}`}>
                {level.icon}
                </span>
        </div>

        <div className="z-10">
            <div className="flex justify-between text-xs font-bold mb-1 opacity-70">
                <span>{level.isLocked ? 'مغلق' : 'التقدم'}</span>
                <span>{level.completedCount}/{level.lessonCount}</span>
            </div>
            <div className="w-full bg-black/10 rounded-full h-1.5 overflow-hidden">
                <div 
                    className={`h-1.5 rounded-full transition-all duration-500 ${level.isLocked ? 'bg-gray-300' : 'bg-white/60'}`}
                    style={{ width: `${(level.completedCount / level.lessonCount) * 100}%` }}
                ></div>
            </div>
        </div>
    </div>
);

export default LevelCard;