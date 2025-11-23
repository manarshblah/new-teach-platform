import React, { useState } from 'react';
import { CheckCircle2, XCircle, LayoutGrid } from 'lucide-react';

interface QuizTextActivityProps {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizTextActivity: React.FC<QuizTextActivityProps> = ({ question, options, correctAnswer }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (option: string) => {
    if (isSubmitted) return;
    setSelected(option);
  };

  const handleSubmit = () => {
      setIsSubmitted(true);
  };

  const isCorrect = selected === correctAnswer;

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-text-dark">{question}</h2>
        <div className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold">
            <LayoutGrid size={16} />
            ركب الكلمات
         </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {options.map((option, idx) => {
                let borderColor = 'border-gray-200';
                let bgColor = 'bg-white';
                let textColor = 'text-gray-700';

                if (selected === option) {
                    borderColor = 'border-primary';
                    bgColor = 'bg-blue-50';
                    textColor = 'text-primary';
                }

                if (isSubmitted) {
                    if (option === correctAnswer) {
                        borderColor = 'border-secondary';
                        bgColor = 'bg-green-100';
                        textColor = 'text-secondary';
                    } else if (option === selected && option !== correctAnswer) {
                        borderColor = 'border-red-400';
                        bgColor = 'bg-red-50';
                        textColor = 'text-red-500';
                    }
                }

                return (
                    <button
                        key={idx}
                        onClick={() => handleOptionClick(option)}
                        className={`
                            h-20 rounded-3xl border-4 text-2xl font-bold shadow-sm hover:shadow-md transition-all
                            ${borderColor} ${bgColor} ${textColor}
                        `}
                    >
                        {option}
                    </button>
                )
            })}
        </div>
      </div>

      <div className="mt-8 mb-4 min-h-[80px]">
          {isSubmitted ? (
               <div className={`p-4 rounded-full flex items-center justify-center gap-3 border-2 ${isCorrect ? 'bg-green-50 border-secondary text-secondary' : 'bg-red-50 border-red-400 text-red-500'}`}>
                   {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                   <span className="font-bold text-lg">{isCorrect ? 'رائع!! اجابة صحيحة' : 'خطأ في الاجابة، حاول مرة أخرى'}</span>
               </div>
          ) : (
            <div className="h-full border-2 border-gray-100 rounded-full bg-white text-gray-300 flex items-center justify-center">
                اختر الاجابة الصحيحة
            </div>
          )}
      </div>

      {!isSubmitted && selected && (
           <div className="flex justify-end">
               <button 
                onClick={handleSubmit}
                className="bg-primary text-white px-10 py-3 rounded-full font-bold shadow-lg hover:bg-blue-600 transition-colors"
               >
                   تحقق
               </button>
           </div>
      )}
    </div>
  );
};

export default QuizTextActivity;
