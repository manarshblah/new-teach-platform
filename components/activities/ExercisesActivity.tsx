
import React, { useState } from 'react';
import { ChevronDown, Upload, Mic, Play, Pause, CheckCircle2, XCircle, Image as ImageIcon, ArrowRight, ArrowLeft, FileText } from 'lucide-react';

const ExerciseOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('اختر ما يناسب');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const options = [
    { label: 'يلعب الولد فوق الطاولة', correct: true },
    { label: 'يلعب الولد تحت الطاولة', correct: false },
    { label: 'الولد ينام على السرير', correct: false }
  ];

  const handleSelect = (option: { label: string, correct: boolean }) => {
    setSelected(option.label);
    setIsOpen(false);
    setIsCorrect(option.correct);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">شاهد الصورة ثم اختر من القائمة ما يصف الصورة</h3>
            <span className="text-gray-400 text-sm">5 درجات</span>
        </div>
        <div className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold">
            <FileText size={16} />
            اختر ما يناسب
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex justify-center">
          <img 
            src="https://img.freepik.com/free-vector/boy-sitting-table-cartoon_1308-120432.jpg?w=740" 
            alt="Boy on table" 
            className="max-h-64 object-contain rounded-xl"
          />
        </div>

        {/* Dropdown Section */}
        <div className="space-y-4">
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full bg-white border-2 rounded-2xl p-4 flex items-center justify-between text-lg font-medium transition-all
                ${isCorrect === true ? 'border-secondary text-secondary bg-green-50' : ''}
                ${isCorrect === false ? 'border-red-400 text-red-500 bg-red-50' : 'border-gray-200 text-gray-600'}
              `}
            >
              <span>{selected}</span>
              <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl z-20 overflow-hidden">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt)}
                    className="w-full text-right p-4 hover:bg-gray-50 border-b border-gray-50 last:border-0 text-gray-700 font-medium transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Feedback */}
          {isCorrect !== null && (
            <div className={`flex items-center gap-2 font-bold ${isCorrect ? 'text-secondary' : 'text-red-500'}`}>
               {isCorrect ? (
                   <>
                    <CheckCircle2 size={20} />
                    <span>جميل !! اجابة صحية</span>
                   </>
               ) : (
                   <>
                    <XCircle size={20} />
                    <span>اجابة خطائة!! حاول مرة اخرى</span>
                   </>
               )}
            </div>
          )}
        </div>
      </div>
      
      {/* Second Example (Repeated structure for fullness as per screenshots often showing lists) */}
       <div className="pt-8 border-t border-gray-100 mt-8">
          <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">شاهد الصورة ثم اختر من القائمة ما يصف الصورة</h3>
                <span className="text-gray-400 text-sm">5 درجات</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-50 pointer-events-none grayscale">
               <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 flex justify-center">
                 <img 
                    src="https://img.freepik.com/free-vector/boy-sitting-table-cartoon_1308-120432.jpg?w=740" 
                    alt="Placeholder" 
                    className="max-h-48 object-contain rounded-xl"
                 />
               </div>
               <div className="w-full bg-gray-100 h-16 rounded-2xl border-2 border-gray-200 flex items-center justify-between px-4">
                   <span className="text-gray-400">يقوم بمساعدة اخيه</span>
                   <ChevronDown size={20} className="text-gray-400" />
               </div>
          </div>
       </div>
    </div>
  );
};

const ExerciseTwo = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleUpload = () => {
    // Simulate upload
    setTimeout(() => {
      setUploadedFile('8549t8545.png');
    }, 1000);
  };

  return (
    <div className="space-y-10 animate-fadeIn">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">اكتب الكلمات التالية على الورقة ثم قم بتصوريرها ورفعها</h3>
            <span className="text-gray-400 text-sm">5 درجات</span>
        </div>
        <div className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold">
            <Upload size={16} />
            تدريب النسخ
        </div>
      </div>

      {/* Words to Copy */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {['برتقال', 'سيارة', 'طاولة'].map((word, idx) => (
            <div key={idx} className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full text-xl font-bold shadow-sm min-w-[120px] text-center">
                {word}
            </div>
        ))}
      </div>

      {/* Upload Area */}
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-3xl p-8 flex flex-col items-center justify-center gap-4 transition-colors hover:bg-gray-50">
          {uploadedFile ? (
              <div className="w-full flex items-center justify-between bg-green-50 border border-green-200 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700">
                          <ImageIcon size={20} />
                      </div>
                      <div className="text-right">
                          <p className="font-bold text-gray-800 text-sm md:text-base">{uploadedFile}</p>
                          <p className="text-xs text-green-600 flex items-center gap-1">
                              <CheckCircle2 size={12} />
                              تم رفع الصورة بنجاح
                          </p>
                      </div>
                  </div>
                  <button onClick={() => setUploadedFile(null)} className="text-red-400 text-sm hover:text-red-600">حذف</button>
              </div>
          ) : (
             <>
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-2">
                    <Upload size={32} />
                </div>
                <p className="text-gray-500 text-lg font-medium">قم بسحب الصورة وافلاتها هنا</p>
                <p className="text-gray-400 text-sm">او</p>
                <button 
                    onClick={handleUpload}
                    className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 transition-colors"
                >
                    <ImageIcon size={18} />
                    اضغط هنا لرفع الصورة
                </button>
             </>
          )}
      </div>

      {/* Second Mockup for Visual Consistency */}
      <div className="opacity-50 pointer-events-none grayscale mt-8 pt-8 border-t border-gray-100">
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">اكتب الكلمات التالية على الورقة ثم قم بتصوريرها ورفعها</h3>
                <span className="text-gray-400 text-sm">5 درجات</span>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
            {['برتقال', 'سيارة', 'طاولة'].map((word, idx) => (
                <div key={idx} className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full text-xl font-bold shadow-sm min-w-[120px] text-center">
                    {word}
                </div>
            ))}
        </div>
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-3xl p-6 flex items-center justify-between">
             <span className="text-gray-400">8549t8545.png</span>
             <div className="flex items-center gap-1 text-red-400 text-xs">
                <XCircle size={14} />
                لم يتم الرفع
             </div>
        </div>
      </div>
    </div>
  );
};

const ExerciseThree = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Example 1 */}
      <div>
        <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">اسمع الى النص التالي ثم قم بترديد ما تسمعه</h3>
                <span className="text-gray-400 text-sm">5 درجات</span>
            </div>
            <div className="bg-primary text-white px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold">
                <Mic size={16} />
                استمع ثم اردد
            </div>
        </div>

        {/* Audio Player Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-2 pl-6 flex items-center justify-between gap-4 shadow-sm mb-4">
            <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-gray-50 hover:bg-gray-100 rounded-full flex items-center justify-center text-primary transition-colors flex-shrink-0"
            >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="mr-1" />}
            </button>
            
            <div className="flex-1 text-center">
                <span className="text-lg font-medium text-gray-700">مرحبا انا اسمي ماجد, ما اسمك انت</span>
            </div>

            <span className="text-xs text-gray-400 font-mono">1:13</span>
        </div>

        {/* Record Button */}
        <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`w-full py-4 rounded-2xl font-bold shadow-md flex items-center justify-center gap-2 transition-all
                ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-primary text-white hover:bg-blue-600'}
            `}
        >
            <Mic size={20} />
            {isRecording ? 'جاري التسجيل...' : 'تسجيل'}
        </button>
      </div>

      {/* Example 2 (With Image) */}
      <div className="pt-8 border-t border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">اسمع الى الصوت التالي ثم قم بترديد ما تسمعه</h3>
                <span className="text-gray-400 text-sm">5 درجات</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm text-center relative overflow-hidden">
               <img 
                src="https://img.freepik.com/free-vector/boy-sitting-table-cartoon_1308-120432.jpg?w=740" 
                alt="Scene" 
                className="mx-auto h-48 object-contain mb-4"
               />
               <h4 className="text-3xl font-bold text-gray-800 mb-6">عُمَرُ فَوْقَ الطَّاوِلَةِ</h4>
               
               <button className="mx-auto flex items-center gap-2 bg-white border border-gray-300 rounded-full px-6 py-2 text-gray-600 hover:bg-gray-50 transition-colors mb-4">
                   <Play size={16} fill="currentColor" />
                   تشغيل
               </button>
          </div>
          
          <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold shadow-md flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors mt-4">
             <Mic size={20} />
             تسجيل
          </button>
      </div>
    </div>
  );
};

const ExercisesActivity = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { component: <ExerciseOne />, title: 'اختر الاجابة' },
    { component: <ExerciseTwo />, title: 'نسخ الكلمات' },
    { component: <ExerciseThree />, title: 'استمع وردد' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Step Progress (Optional visual cue) */}
      <div className="flex justify-center mb-8 gap-2">
          {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-primary' : 'w-2 bg-gray-200'}`} 
              />
          ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pr-2 pl-2 pb-4 no-scrollbar">
        {steps[currentStep].component}
      </div>

      {/* Navigation */}
      <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
          <button 
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
          >
              <ArrowRight size={18} />
              السابق
          </button>

          <span className="font-bold text-gray-400 text-sm">
              {currentStep + 1} / {steps.length}
          </span>

          <button 
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${currentStep === steps.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'bg-secondary text-white shadow-md hover:bg-green-600'}`}
          >
              التالي
              <ArrowLeft size={18} />
          </button>
      </div>
    </div>
  );
};

export default ExercisesActivity;
