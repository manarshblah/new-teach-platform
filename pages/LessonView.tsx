
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { MOCK_LESSON } from '../constants';
import { ActivityType } from '../types';

// Activities
import WritingActivity from '../components/activities/WritingActivity'; // Kept for backward compat
import ExercisesActivity from '../components/activities/ExercisesActivity';
import QuizTextActivity from '../components/activities/QuizTextActivity';
import ReadingActivity from '../components/activities/ReadingActivity';
import GamesActivity from '../components/activities/GamesActivity';

const LessonView: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState(MOCK_LESSON.steps[0].id);

  const activeStep = MOCK_LESSON.steps.find(s => s.id === activeStepId) || MOCK_LESSON.steps[0];

  const renderContent = () => {
      switch(activeStep.type) {
          case ActivityType.WRITING:
              return <ExercisesActivity />;
          case ActivityType.GAMES:
              return <GamesActivity />;
          case ActivityType.QUIZ_TEXT:
              return <QuizTextActivity question={activeStep.content.question} options={activeStep.content.options} correctAnswer={activeStep.content.correctAnswer} />;
          case ActivityType.READING:
              return <ReadingActivity text={activeStep.content.text} image={activeStep.content.image} />;
          case ActivityType.VIDEO:
              return (
                  <div className="flex items-center justify-center h-full">
                       <video controls className="w-full max-w-4xl rounded-2xl shadow-xl">
                           <source src={activeStep.content.videoUrl} type="video/mp4" />
                           Your browser does not support the video tag.
                       </video>
                  </div>
              );
          default:
              return <div className="flex items-center justify-center h-full text-gray-400">Activity not implemented yet</div>;
      }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content Card - Takes up 8 cols */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-[40px] shadow-sm border border-red-100 p-8 min-h-[600px] relative">
                    {/* Outline Border visual effect from screenshot */}
                    <div className="absolute inset-2 border border-red-500/20 rounded-[35px] pointer-events-none"></div>
                    
                    <div className="relative z-10 h-full">
                        {renderContent()}
                    </div>
                </div>
            </div>

            {/* Sidebar - Takes up 4 cols */}
            <div className="lg:col-span-4">
                <Sidebar 
                    steps={MOCK_LESSON.steps} 
                    currentStepId={activeStepId}
                    onStepClick={setActiveStepId}
                />
            </div>
        </div>
    </div>
  );
};

export default LessonView;
