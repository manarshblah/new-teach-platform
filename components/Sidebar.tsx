
import React from 'react';
import { CheckCircle2, PlayCircle, BookOpen, Gamepad2, Lock, Star } from 'lucide-react';
import { LessonStep, ActivityType } from '../types';

interface SidebarProps {
  steps: LessonStep[];
  currentStepId: string;
  onStepClick: (stepId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ steps, currentStepId, onStepClick }) => {
  
  const getIcon = (type: ActivityType) => {
    switch (type) {
      case ActivityType.VIDEO: return <PlayCircle size={18} />;
      case ActivityType.READING: return <BookOpen size={18} />;
      case ActivityType.WRITING: return <Gamepad2 size={18} />;
      case ActivityType.QUIZ_TEXT: return <CheckCircle2 size={18} />;
      default: return <Star size={18} />;
    }
  };

  // Separate the Games step if it exists to render it differently
  const standardSteps = steps.filter(s => s.type !== ActivityType.GAMES);
  const gamesStep = steps.find(s => s.type === ActivityType.GAMES);

  return (
    <div className="space-y-6">
        {/* Lesson Groups Mockup */}
        <div className="bg-white rounded-3xl p-4 shadow-sm border-2 border-transparent">
             <div className="flex items-center gap-3 mb-2">
                 <div className="w-8 h-8 rounded-full border-2 border-green-500 flex items-center justify-center text-green-500">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="font-bold text-gray-800">الدرس الاول</span>
             </div>
             
             {/* The Connected Steps */}
             <div className="relative pr-4 space-y-4">
                 {/* Vertical Line */}
                 <div className="absolute right-[27px] top-2 bottom-2 w-0.5 bg-dashed border-r-2 border-green-200 -z-10"></div>

                 {standardSteps.map((step) => {
                     const isActive = step.id === currentStepId;
                     const isLocked = step.isLocked;
                     
                     return (
                         <button
                            key={step.id}
                            disabled={isLocked}
                            onClick={() => onStepClick(step.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-2xl border-2 transition-all duration-200 relative bg-white
                                ${isActive ? 'border-secondary bg-green-50' : 'border-gray-200'}
                                ${isLocked ? 'opacity-70 cursor-not-allowed' : 'hover:border-green-300 cursor-pointer'}
                            `}
                         >
                             <div className="flex items-center gap-3 z-10">
                                 {isLocked ? <Lock size={16} className="text-gray-400" /> : getIcon(step.type)}
                                 <span className="font-medium text-sm md:text-base text-gray-700">{step.title}</span>
                             </div>
                             
                             {/* Status Indicator/Duration */}
                             <div className="text-xs text-gray-500 font-medium">
                                 {step.isCompleted ? (
                                     <CheckCircle2 className="text-secondary" size={20} />
                                 ) : (
                                     step.duration
                                 )}
                             </div>
                         </button>
                     );
                 })}

                 {/* Final Game Block */}
                 {gamesStep && (
                    <button
                        onClick={() => onStepClick(gamesStep.id)}
                        className={`w-full p-3 rounded-2xl flex items-center justify-between shadow-md mt-4 transition-colors
                           ${currentStepId === gamesStep.id ? 'bg-green-600' : 'bg-secondary hover:bg-green-600'} text-white
                        `}
                    >
                        <span className="font-bold">3</span>
                        <div className="flex items-center gap-2">
                            <span>{gamesStep.title}</span>
                            <Gamepad2 size={20} />
                        </div>
                    </button>
                 )}
             </div>
        </div>

        {/* Future Lessons Placeholders */}
        <div className="bg-white rounded-3xl p-6 shadow-sm opacity-60">
             <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">الدرس الثاني</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-gray-300" />
                </div>
             </div>
        </div>
        <div className="bg-white rounded-3xl p-6 shadow-sm opacity-60">
             <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">الدرس الثالث</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <CheckCircle2 size={16} className="text-gray-300" />
                </div>
             </div>
        </div>

        <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
            <Star size={20} />
            شهادة اتمام
        </button>
    </div>
  );
};

export default Sidebar;
