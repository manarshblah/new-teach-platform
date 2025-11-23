import React from 'react';
import { LevelNode } from '../../types';

interface MapNodeProps {
  node: LevelNode;
  onClick: () => void;
}

const MapNode: React.FC<MapNodeProps> = ({ node, onClick }) => {
    const isCurrent = node.status === 'current';
    const isCompleted = node.status === 'completed';
    const isLocked = node.status === 'locked';

    let bubbleClasses = "";
    let containerClasses = "";

    if (isCompleted) {
        bubbleClasses = "bg-[#48C78E] border-[#A5D6A7] text-white shadow-[0_4px_10px_rgba(72,199,142,0.4)]";
        containerClasses = "hover:scale-110 cursor-pointer";
    } else if (isCurrent) {
        bubbleClasses = "bg-[#FF9800] border-[#FFCC80] text-white ring-4 ring-[#FFE0B2] shadow-[0_0_25px_rgba(255,152,0,0.6)]";
        containerClasses = "scale-110 hover:scale-125 z-20 cursor-pointer";
    } else if (isLocked) {
        bubbleClasses = "bg-slate-400 border-slate-300 text-slate-200 opacity-80";
        containerClasses = "cursor-not-allowed opacity-80";
    }

    return (
        <div 
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${containerClasses}`}
            style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
            onClick={() => !isLocked && onClick()}
        >
            {isCurrent && (
                <div className="absolute -inset-4 bg-orange-400 rounded-full opacity-20 animate-ping"></div>
            )}

            <div className={`
                w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border-[4px] 
                shadow-xl relative overflow-hidden transition-transform
                ${bubbleClasses}
            `}>
                {/* Glossy Reflection */}
                <div className="absolute top-2 right-3 w-3 h-2 bg-white rounded-full opacity-40 rotate-[-45deg]"></div>
                
                <span className="text-2xl md:text-4xl filter drop-shadow-md select-none relative z-10">
                    {node.icon}
                </span>
            </div>
        </div>
    );
};

export default MapNode;