import React from 'react';

interface ReadingActivityProps {
  text: string;
  image: string;
}

const ReadingActivity: React.FC<ReadingActivityProps> = ({ text, image }) => {
  return (
    <div className="h-full flex flex-col md:flex-row gap-8 items-center justify-center p-4">
        <div className="w-full md:w-1/2 flex justify-center">
             <img src={image} alt="Story illustration" className="max-h-[60vh] rounded-2xl shadow-lg border-4 border-white" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right">
             <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-100 shadow-sm">
                 <p className="text-xl md:text-2xl leading-loose font-medium text-gray-800 font-sans">
                     {text}
                 </p>
             </div>
        </div>
    </div>
  );
};

export default ReadingActivity;
