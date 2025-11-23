import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LEVEL_NODES, LEVELS_DATA, UPCOMING_SESSIONS } from '../constants';

// Sub-components
import MapPath from '../components/map/MapPath';
import MapNode from '../components/map/MapNode';
import SessionCard from '../components/map/SessionCard';
import LevelCard from '../components/map/LevelCard';

const Map: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#E6F4F1] pb-20">
        
        {/* Top Map Section */}
        <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-b-[50px] shadow-2xl">
            
            {/* Background: Sand to Sea Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F0E68C] via-[#87CEEB] to-[#1E90FF]"></div>
            
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>

            {/* Connection Path (Curved Line) */}
            <MapPath nodes={LEVEL_NODES} />

            {/* Level Nodes (Bubbles) */}
            {LEVEL_NODES.map((node) => (
                <MapNode 
                    key={node.id} 
                    node={node} 
                    onClick={() => navigate('/lesson/1')} 
                />
            ))}
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 mt-12">
            <div className="flex flex-col md:flex-row gap-8">
                
                {/* Right Column: Upcoming Sessions */}
                <div className="w-full md:w-1/3 space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-right">الجلسات القادمة</h3>
                    {UPCOMING_SESSIONS.map((session) => (
                        <SessionCard key={session.id} session={session} />
                    ))}
                </div>

                {/* Left Column: Levels Grid */}
                <div className="w-full md:w-2/3">
                    <div className="flex justify-between items-center mb-4">
                         <h3 className="text-xl font-bold text-gray-800">المستويات</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {LEVELS_DATA.map((level) => (
                            <LevelCard 
                                key={level.id} 
                                level={level} 
                                onClick={() => navigate('/lesson/1')} 
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Map;