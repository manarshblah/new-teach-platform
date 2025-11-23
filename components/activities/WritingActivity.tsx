import React, { useState } from 'react';
import { Pencil, Send } from 'lucide-react';
import { getWritingFeedback } from '../../services/geminiService';

interface WritingActivityProps {
  prompt: string;
  placeholder: string;
}

const WritingActivity: React.FC<WritingActivityProps> = ({ prompt, placeholder }) => {
  const [text, setText] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text.trim()) return;
    setIsLoading(true);
    const result = await getWritingFeedback(text);
    setFeedback(result);
    setIsLoading(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
         <h2 className="text-xl md:text-2xl font-bold text-text-dark leading-relaxed">
           {prompt}
         </h2>
         <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-md whitespace-nowrap">
            <Pencil size={16} />
            نص تعبيري
         </div>
      </div>

      <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-4 shadow-inner">
        <textarea
            className="w-full h-full resize-none outline-none text-lg leading-loose text-gray-700 placeholder-gray-300"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={isLoading}
        ></textarea>
      </div>

      {feedback && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800">
              <p className="font-bold mb-1">تعليق المعلم:</p>
              <p>{feedback}</p>
          </div>
      )}

      <div className="mt-6 flex justify-end">
          <button 
            onClick={handleSubmit}
            disabled={isLoading || !text}
            className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-all disabled:opacity-50"
          >
              {isLoading ? 'جاري التحقق...' : 'ارسل للتحقق'}
              <Send size={18} className={isLoading ? '' : "rtl:rotate-180"} /> 
          </button>
      </div>
    </div>
  );
};

export default WritingActivity;
