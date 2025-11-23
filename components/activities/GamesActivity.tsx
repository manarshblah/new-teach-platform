
import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, PenTool, Upload, Image as ImageIcon, RotateCcw } from 'lucide-react';

// --- 1. Reusable Design Components ---

interface GameHeaderProps {
  title: string;
  score: string;
  tag: string;
  icon: React.ElementType;
}

const GameHeader: React.FC<GameHeaderProps> = ({ title, score, tag, icon: Icon }) => (
  <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-4">
    <div className="flex flex-col gap-2 order-2 md:order-1">
        <span className="text-gray-400 font-bold text-sm">{score}</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed max-w-lg">
           {title}
        </h2>
    </div>
    <div className="bg-[#5D75D9] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-md whitespace-nowrap order-1 md:order-2 self-end md:self-auto">
        <Icon size={18} />
        <span>{tag}</span>
    </div>
  </div>
);

interface OptionButtonProps {
  label: string;
  state: 'default' | 'selected' | 'correct' | 'wrong';
  onClick: () => void;
  className?: string;
}

const OptionButton: React.FC<OptionButtonProps> = ({ label, state, onClick, className = '' }) => {
  let styles = "bg-white border-gray-800 text-gray-800 hover:bg-gray-50"; // Default
  
  if (state === 'selected') {
      styles = "bg-blue-50 border-[#5D75D9] text-[#5D75D9]";
  } else if (state === 'correct') {
      styles = "bg-[#48C78E] border-[#48C78E] text-white shadow-md";
  } else if (state === 'wrong') {
      styles = "bg-[#E53935] border-[#E53935] text-white shadow-md";
  }

  return (
    <button
      onClick={onClick}
      className={`h-14 md:h-16 px-8 rounded-[2rem] border-2 text-lg md:text-xl font-bold transition-all duration-200 min-w-[140px] ${styles} ${className}`}
    >
      {label}
    </button>
  );
};

interface FeedbackBannerProps {
  state: 'correct' | 'wrong';
  text: string;
}

const FeedbackBanner: React.FC<FeedbackBannerProps> = ({ state, text }) => {
  const isCorrect = state === 'correct';
  return (
    <div className={`w-full py-3 px-6 rounded-full border-2 mt-8 flex items-center justify-between animate-in fade-in slide-in-from-top-2
        ${isCorrect 
            ? 'bg-[#E0F2F1] border-[#48C78E] text-[#2E7D32]' 
            : 'bg-[#FFEBEE] border-[#EF9A9A] text-[#C62828]'}
    `}>
        <span className="font-bold text-base md:text-lg">{text}</span>
        {isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
    </div>
  );
};


// --- 2. Game Sections ---

// GAME 1: Complete Sentence
const GameOne = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const options = ['الشارع', 'الحديقة', 'المدرسة'];
  const correct = 'المدرسة';

  const handleSelect = (opt: string) => {
    setSelected(opt);
    setStatus(opt === correct ? 'correct' : 'wrong');
  };

  return (
    <div className="max-w-3xl mx-auto py-2">
      <GameHeader 
        title="يذهب الطفل الى .......... كل صباح" 
        score="5 درجات" 
        tag="اكمل الجملة" 
        icon={PenTool} 
      />

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mt-8">
        {options.map((opt) => (
          <OptionButton 
            key={opt}
            label={opt}
            state={(selected === opt && status !== 'idle') ? status : 'default'}
            onClick={() => handleSelect(opt)}
            className="w-full md:w-auto flex-1"
          />
        ))}
      </div>

      {status !== 'idle' && (
        <FeedbackBanner 
            state={status} 
            text={status === 'correct' ? "جميل !! اجابة صحية" : "اجابة خطائة!! حاول مرة اخرى"} 
        />
      )}
    </div>
  );
};

// GAME 2: Sentence Builder
const GameTwo = () => {
  const [slots, setSlots] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const letters = ['س', 'ي', 'ا', 'ر', 'ة']; // Correct
  const sourceLetters = ['ة', 'ا', 'ي', 'ر', 'س']; // Scrambled

  const handleAdd = (char: string) => {
    if (status === 'correct') return;
    if (slots.length < 5) {
        setSlots([...slots, char]);
        setStatus('idle');
    }
  };

  const handleReset = () => {
      setSlots([]);
      setStatus('idle');
  };

  const handleCheck = () => {
      if (slots.join('') === letters.join('')) {
          setStatus('correct');
      } else {
          setStatus('wrong');
      }
  };

  const getPillStyle = () => {
      if (status === 'correct') return 'bg-[#48C78E] border-[#48C78E]';
      if (status === 'wrong') return 'bg-[#E53935] border-[#E53935]';
      return 'bg-[#5D75D9] border-[#5D75D9]';
  };

  return (
    <div className="max-w-3xl mx-auto py-2">
      <GameHeader 
        title="ركب الاحرف التالية لتكوين جملة" 
        score="5 درجات" 
        tag="تركيب الاحرف" 
        icon={PenTool} 
      />

      {/* Target Input Field */}
      <div className="mt-8 mb-10">
          <div className="w-full h-20 md:h-24 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center gap-2 px-2 md:gap-3 md:px-6 shadow-inner relative overflow-hidden">
               {slots.length === 0 && <span className="text-gray-300 font-medium absolute">اضغط على الحروف بالترتيب</span>}
               {slots.map((char, idx) => (
                   <div key={idx} className={`w-10 h-12 md:w-14 md:h-16 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl font-bold border-2 shadow-sm ${getPillStyle()}`}>
                       {char}
                   </div>
               ))}
          </div>
      </div>

      {/* Source Letters */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
           {sourceLetters.map((char, idx) => (
               <button
                 key={idx}
                 onClick={() => handleAdd(char)}
                 className="w-16 h-12 md:w-24 md:h-14 rounded-[2rem] border-2 border-gray-800 bg-white text-gray-800 text-xl font-bold hover:bg-gray-50 active:scale-95 transition-all shadow-sm"
               >
                   {char}
               </button>
           ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">
           <button onClick={handleReset} className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-500 hover:bg-gray-100">
               <RotateCcw size={20} />
           </button>
           {status !== 'correct' && (
                <button onClick={handleCheck} className="px-8 py-3 rounded-full bg-[#5D75D9] text-white font-bold shadow-md hover:bg-blue-600 transition-colors">
                    تحقق
                </button>
           )}
      </div>

      {status !== 'idle' && (
        <FeedbackBanner 
            state={status} 
            text={status === 'correct' ? "رائع!! الجملة هي سيارة" : "خطاء في تركيب الجملة"} 
        />
      )}
    </div>
  );
};

// GAME 3: Copying / Upload
const GameThree = () => {
    const [file, setFile] = useState<string | null>(null);
    const [status, setStatus] = useState<'idle' | 'success'>('idle');
  
    const handleUpload = () => {
        setTimeout(() => {
            setFile('8549t8545.png');
            setStatus('success');
        }, 600);
    };
  
    return (
      <div className="max-w-3xl mx-auto py-2">
        <GameHeader 
          title="اكتب الكلمات التالية على الورقة ثم قم بتصوريرها ورفعها" 
          score="5 درجات" 
          tag="تدريب النسخ" 
          icon={PenTool} 
        />
  
        {/* Words Display */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 mb-10">
            {['برتقال', 'سيارة', 'طاولة'].map((word) => (
                <div key={word} className="bg-white border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-[2rem] text-xl font-bold min-w-[130px] text-center shadow-sm">
                    {word}
                </div>
            ))}
        </div>
  
        {/* Upload Button / Status */}
        <div className="relative">
             {status === 'success' ? (
                 <div className="w-full py-4 px-6 rounded-[2rem] border-2 border-gray-200 bg-white flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4 overflow-hidden">
                           <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                               <ImageIcon className="text-gray-400" />
                           </div>
                           <span className="font-bold text-gray-700 truncate dir-ltr">{file}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#48C78E] font-bold text-sm shrink-0">
                          <CheckCircle2 size={18} />
                          <span>تم رفع الصورة بنجاح</span>
                      </div>
                 </div>
             ) : (
                <button 
                    onClick={handleUpload}
                    className="w-full py-5 rounded-[2rem] bg-[#5D75D9] hover:bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-3 shadow-md transition-all active:scale-[0.99]"
                >
                    <Upload size={24} />
                    <span>اضغط هنا لرفع الصورة</span>
                </button>
             )}
        </div>

        {status === 'success' && (
             <div className="mt-4 text-center">
                 <button 
                    onClick={() => { setFile(null); setStatus('idle'); }} 
                    className="text-red-500 text-sm font-bold hover:underline"
                 >
                     حذف المحاولة
                 </button>
             </div>
        )}
      </div>
    );
};

// --- Main Container ---

const GamesActivity = () => {
  const [step, setStep] = useState(0);
  const games = [
      <GameOne />,
      <GameTwo />,
      <GameThree />
  ];

  const handleNext = () => { if(step < games.length - 1) setStep(s => s + 1) };
  const handlePrev = () => { if(step > 0) setStep(s => s - 1) };

  return (
    <div className="h-full flex flex-col">
        {/* Animated Step Content */}
        <div className="flex-1 overflow-y-auto px-1 no-scrollbar">
            {games[step]}
        </div>

        {/* Footer Navigation */}
        <div className="mt-auto pt-6 border-t border-gray-100 flex justify-between items-center">
            <button 
                onClick={handlePrev}
                disabled={step === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-colors ${step === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
            >
                <ArrowRight size={18} />
                السابق
            </button>

            {/* Step Indicators */}
            <div className="flex gap-2">
                {games.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-[#48C78E]' : 'w-2 bg-gray-200'}`} />
                ))}
            </div>

            <button 
                onClick={handleNext}
                disabled={step === games.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-colors ${step === games.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'bg-[#48C78E] text-white shadow-md hover:bg-green-600'}`}
            >
                التالي
                <ArrowLeft size={18} />
            </button>
        </div>
    </div>
  );
};

export default GamesActivity;
