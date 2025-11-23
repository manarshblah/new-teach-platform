import React from 'react';
import { Clock, ArrowLeft } from 'lucide-react';
import { UPCOMING_SESSIONS } from '../../constants';

interface SessionCardProps {
  session: typeof UPCOMING_SESSIONS[0];
}

const SessionCard: React.FC<SessionCardProps> = ({ session }) => (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
        <span className="px-3 py-1 bg-white border border-red-100 text-red-400 rounded-full text-xs font-bold shadow-sm">
            {session.tag}
        </span>
        <div className="flex items-center gap-1 text-gray-400 text-xs bg-gray-50 px-2 py-1 rounded-lg">
            <Clock size={12} />
            <span>{session.time}</span>
        </div>
        </div>
        
        <h4 className="font-bold text-lg text-gray-800 mb-2 text-right">{session.title}</h4>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 text-right">
            {session.description}
        </p>
        
        <button className="w-full bg-[#8DA528] hover:bg-[#7a9120] text-white py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors">
            انضم الان
            <ArrowLeft size={16} />
        </button>
    </div>
);

export default SessionCard;