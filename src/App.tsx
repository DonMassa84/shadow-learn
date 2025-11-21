import React, { useState, useEffect } from 'react';
import { 
  BookOpen, CheckCircle, Home, Layers, User, Brain, 
  ChevronRight, RotateCcw, Award, Lock, Play, PieChart, AlertCircle,
  PlayCircle, PauseCircle, X
} from 'lucide-react';

// --- MOCK DATEN ---
const courseData = {
  id: "mitarbeiterfuehrung_14tage",
  title: "Mitarbeiterführung & Personalmanagement",
  description: "14-Tage Sprint zur Prüfungsvorbereitung für Operative Professionals.",
  totalDays: 14,
  days: Array.from({ length: 14 }, (_, i) => {
    const dayNum = i + 1;
    if (dayNum === 1) {
      return {
        id: dayNum,
        title: "Führungsstile & Grundlagen",
        goal: "Unterscheidung autoritär, kooperativ und Laissez-faire.",
        theory: "Führung ist die zielorientierte Beeinflussung von Mitarbeitern. Die klassischen Führungsstile nach Kurt Lewin sind elementar: \n\n1. Autoritär: Vorgesetzter entscheidet allein.\n2. Kooperativ: Mitarbeiter werden einbezogen.\n3. Laissez-faire: Völlige Freiheit ohne Lenkung.\n\nModerne Ansätze (Situatives Führen) kombinieren diese je nach Reifegrad des Mitarbeiters.",
        cards: [
          { id: 1, q: "Was kennzeichnet den autoritären Führungsstil?", a: "Entscheidung allein durch Vorgesetzten, keine Einbindung der MA, klare Anweisungen." },
          { id: 2, q: "Nenne einen Nachteil des Laissez-faire Stils.", a: "Orientierungslosigkeit, mangelnde Disziplin, schwache Gruppenleistung." },
          { id: 3, q: "Was ist 'Situatives Führen'?", a: "Führungsverhalten wird an den Reifegrad (Wollen & Können) des Mitarbeiters angepasst." }
        ],
        quiz: [
          { id: 1, q: "Wer prägte die klassischen 3 Führungsstile?", options: ["Maslow", "Lewin", "Herzberg", "Pareto"], correct: 1 },
          { id: 2, q: "Welcher Stil bietet die höchste Entscheidungsgeschwindigkeit?", options: ["Kooperativ", "Laissez-faire", "Autoritär", "Bürokratisch"], correct: 2 },
          { id: 3, q: "Worauf basiert situatives Führen?", options: ["Nur auf Sympathie", "Auf dem Reifegrad des MA", "Auf dem Alter des Vorgesetzten", "Auf dem Gehalt"], correct: 1 }
        ]
      };
    }
    if (dayNum === 2) {
      return {
        id: dayNum,
        title: "Motivationstheorien",
        goal: "Verständnis von Maslow und Herzberg.",
        theory: "Motivation entsteht aus unbefriedigten Bedürfnissen.\n\nMaslowsche Pyramide: Physiologisch -> Sicherheit -> Sozial -> Ich -> Selbstverwirklichung.\n\nHerzberg (2-Faktoren): \n- Hygienefaktoren (verhindern Unzufriedenheit, z.B. Gehalt)\n- Motivatoren (schaffen Zufriedenheit, z.B. Anerkennung).",
        cards: [
          { id: 4, q: "Was sind Hygienefaktoren nach Herzberg?", a: "Faktoren, die Unzufriedenheit verhindern, aber nicht dauerhaft motivieren (z.B. Arbeitsbedingungen, Gehalt)." },
          { id: 5, q: "Nenne die oberste Stufe bei Maslow.", a: "Selbstverwirklichung." },
          { id: 6, q: "Was sind Motivatoren?", a: "Faktoren, die echte Zufriedenheit schaffen (z.B. Verantwortung, Erfolgserlebnis)." }
        ],
        quiz: [
          { id: 4, q: "Gehalt ist nach Herzberg meistens ein...", options: ["Motivator", "Hygienefaktor", "Störfaktor", "Bonus"], correct: 1 },
          { id: 5, q: "Was steht an der Basis der Maslow-Pyramide?", options: ["Soziale Bedürfnisse", "Sicherheitsbedürfnisse", "Physiologische Bedürfnisse", "Ich-Bedürfnisse"], correct: 2 },
          { id: 6, q: "Intrinsische Motivation kommt von...", options: ["Innen", "Außen", "Dem Chef", "Dem Geld"], correct: 0 }
        ]
      };
    }
    return {
      id: dayNum,
      title: `Tag ${dayNum}: Themenplatzhalter`,
      goal: "Wissen vertiefen und Transfer leisten.",
      theory: `Hier steht der Lehrtext für Tag ${dayNum}. Das 5-Stufen-Modell (Build-Learn-Test-Transfer-Review) wird angewendet.`,
      cards: [
        { id: 100 + i, q: `Frage zu Tag ${dayNum}`, a: "Musterantwort für diesen Tag." },
        { id: 200 + i, q: "Definition X", a: "Erklärung Y" }
      ],
      quiz: [
        { id: 300 + i, q: `Testfrage Tag ${dayNum}?`, options: ["A", "B", "C", "D"], correct: 0 },
        { id: 400 + i, q: "Wahr oder Falsch?", options: ["Wahr", "Falsch"], correct: 0 },
        { id: 500 + i, q: "Was trifft zu?", options: ["Alles", "Nichts"], correct: 0 }
      ]
    };
  })
};

// --- COMPONENTS ---

const NavBar = ({ activeTab, setActiveTab, darkMode }) => (
  <div className={`fixed bottom-0 left-0 right-0 border-t p-2 flex justify-around z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]'}`}>
    <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'}`}>
      <Home size={24} />
      <span className="text-xs mt-1">Home</span>
    </button>
    <button onClick={() => setActiveTab('course')} className={`flex flex-col items-center p-2 ${activeTab === 'course' ? 'text-blue-500' : 'text-gray-500'}`}>
      <Layers size={24} />
      <span className="text-xs mt-1">Kurs</span>
    </button>
    <button onClick={() => setActiveTab('review')} className={`flex flex-col items-center p-2 ${activeTab === 'review' ? 'text-blue-500' : 'text-gray-500'}`}>
      <PieChart size={24} />
      <span className="text-xs mt-1">Review</span>
    </button>
    <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center p-2 ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}>
      <User size={24} />
      <span className="text-xs mt-1">Profil</span>
    </button>
  </div>
);

const FlipCard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div 
      onClick={() => setIsFlipped(!isFlipped)}
      className="w-full h-64 cursor-pointer perspective-1000 mb-6"
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className={`absolute w-full h-full bg-gray-800 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center backface-hidden ${isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Brain className="text-blue-500 mb-4" size={40} />
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">Frage</h3>
          <p className="text-xl text-center font-semibold text-white">{card.q}</p>
          <p className="text-gray-500 text-xs mt-8">(Tippen zum Umdrehen)</p>
        </div>
        <div className={`absolute w-full h-full bg-blue-900 border border-blue-700 rounded-xl p-6 flex flex-col items-center justify-center backface-hidden rotate-y-180 ${!isFlipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <CheckCircle className="text-green-400 mb-4" size={40} />
          <h3 className="text-blue-300 text-sm uppercase tracking-wide mb-2">Antwort</h3>
          <p className="text-lg text-center text-white">{card.a}</p>
        </div>
      </div>
    </div>
  );
};

// --- NEUE PASSIVE SESSION KOMPONENTE ---
const PassiveSession = ({ cards, onClose }) => {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const DURATION = 4000; // Zeit pro Seite in ms

  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      if (!isFlipped) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % cards.length); // Loop
        }, 500); 
      }
    }, DURATION);

    return () => clearTimeout(timer);
  }, [index, isFlipped, isPaused, cards.length]);

  const currentCard = cards[index];

  return (
    <div className="fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center p-6 animate-fade-in">
      {/* Controls Header */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
        <div className="text-gray-400 text-sm">
          Passiv-Modus • Karte {index + 1}/{cards.length}
        </div>
        <button onClick={onClose} className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700">
          <X size={24} />
        </button>
      </div>

      {/* Main Auto Card */}
      <div className="w-full max-w-md h-80 perspective-1000 relative">
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front / Question */}
          <div className="absolute w-full h-full bg-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center backface-hidden shadow-2xl">
             <Brain className="text-blue-500 mb-6 opacity-50" size={64} />
             <p className="text-2xl font-bold text-center text-white leading-relaxed">{currentCard.q}</p>
          </div>

          {/* Back / Answer */}
          <div className="absolute w-full h-full bg-blue-900 border border-blue-700 rounded-2xl p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 shadow-2xl">
             <CheckCircle className="text-green-400 mb-6 opacity-50" size={64} />
             <p className="text-xl text-center text-white leading-relaxed">{currentCard.a}</p>
          </div>
        </div>
      </div>

      {/* Progress Bar & Controls */}
      <div className="w-full max-w-md mt-12 flex flex-col items-center gap-6">
        {/* Play/Pause */}
        <button 
          onClick={() => setIsPaused(!isPaused)}
          className="p-4 bg-gray-800 rounded-full text-blue-400 hover:bg-gray-700 hover:scale-105 transition-all border border-gray-700 shadow-lg"
        >
          {isPaused ? <PlayCircle size={32} /> : <PauseCircle size={32} />}
        </button>

        {/* Timer Bar */}
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative">
          {!isPaused && (
             <div className="absolute top-0 left-0 h-full bg-blue-500 animate-progress" style={{ animationDuration: `${DURATION}ms` }} key={`${index}-${isFlipped}`}></div>
          )}
        </div>
        <p className="text-gray-500 text-xs animate-pulse">
          {isPaused ? "Pausiert" : (isFlipped ? "Antwort lesen..." : "Frage lesen...")}
        </p>
      </div>

      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        .animate-progress { animation-name: progress; animation-timing-function: linear; }
      `}</style>
    </div>
  );
};

const QuizSession = ({ quizData, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex) => {
    const isCorrect = optionIndex === quizData[currentIndex].correct;
    if (isCorrect) setScore(prev => prev + 1);

    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 animate-fade-in">
        <Award size={64} className="text-yellow-500 mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Quiz beendet!</h2>
        <p className="text-gray-400 mb-6">Du hast {score} von {quizData.length} Fragen richtig.</p>
        <button 
          onClick={() => onComplete(score)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all w-full max-w-xs"
        >
          Ergebnis speichern
        </button>
      </div>
    );
  }

  const question = quizData[currentIndex];

  return (
    <div className="p-4 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className="text-gray-500 text-sm">Frage {currentIndex + 1} von {quizData.length}</span>
        <span className="text-blue-400 font-mono text-sm">Score: {score}</span>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-lg border border-gray-700 flex-grow flex items-center justify-center">
        <p className="text-xl font-medium text-white text-center">{question.q}</p>
      </div>

      <div className="space-y-3 pb-20">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-200 transition-colors"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function ShadowLearnApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedDay, setSelectedDay] = useState(null);
  const [viewMode, setViewMode] = useState('overview'); // 'overview', 'learn', 'quiz', 'passive'
  
  const [progress, setProgress] = useState({ completedDays: [], quizScores: {} });
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedProgress = localStorage.getItem('shadowLearnProgress');
        if (savedProgress) setProgress(JSON.parse(savedProgress));
        const savedTheme = localStorage.getItem('shadowLearnDarkMode');
        if (savedTheme) setDarkMode(JSON.parse(savedTheme));
      } catch (e) {
        console.error("Error loading state", e);
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('shadowLearnProgress', JSON.stringify(progress));
      localStorage.setItem('shadowLearnDarkMode', JSON.stringify(darkMode));
    }
  }, [progress, darkMode, isLoaded]);

  const isDayLocked = (dayId) => {
    if (dayId === 1) return false;
    return !progress.completedDays.includes(dayId - 1);
  };

  const completeDay = (dayId, score) => {
    setProgress(prev => ({
      ...prev,
      completedDays: prev.completedDays.includes(dayId) ? prev.completedDays : [...prev.completedDays, dayId],
      quizScores: { ...prev.quizScores, [dayId]: score }
    }));
    setViewMode('overview');
    setSelectedDay(null);
    setActiveTab('course');
  };

  const getProgressPercentage = () => {
    return Math.round((progress.completedDays.length / courseData.totalDays) * 100);
  };

  // --- RENDERERS ---

  const renderHome = () => (
    <div className="p-6 space-y-8 pb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Moin, Daniel!</h1>
          <p className="text-gray-500 text-sm">Bereit für den nächsten Sprint?</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
          DM
        </div>
      </div>

      <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600 rounded-full opacity-20 blur-xl"></div>
        <h2 className="text-lg font-semibold text-white mb-2">{courseData.title}</h2>
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Fortschritt</span>
          <span>{getProgressPercentage()}%</span>
        </div>
        <div className="w-full bg-gray-900 rounded-full h-3 mb-4">
          <div className="bg-blue-500 h-3 rounded-full transition-all duration-1000" style={{ width: `${getProgressPercentage()}%` }}></div>
        </div>
        
        {progress.completedDays.length < courseData.totalDays ? (
           <button 
             onClick={() => {
               const nextDayId = progress.completedDays.length + 1;
               const day = courseData.days.find(d => d.id === nextDayId);
               if (day) {
                 setSelectedDay(day);
                 setViewMode('learn');
               }
             }}
             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors"
           >
             <Play size={18} className="mr-2" />
             Weiterlernen: Tag {progress.completedDays.length + 1}
           </button>
        ) : (
          <div className="text-green-400 font-bold text-center flex items-center justify-center">
            <CheckCircle className="mr-2" /> Kurs abgeschlossen!
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className={`text-3xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{progress.completedDays.length}</div>
          <div className="text-gray-500 text-xs uppercase">Tage geschafft</div>
        </div>
        <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
          <div className="text-3xl font-bold text-blue-500 mb-1">
            {Object.values(progress.quizScores).reduce((a, b) => a + b, 0)}
          </div>
          <div className="text-gray-500 text-xs uppercase">Quiz Punkte</div>
        </div>
      </div>
    </div>
  );

  const renderCourseList = () => (
    <div className="p-4 pb-24">
      <h2 className={`text-xl font-bold mb-6 sticky top-0 py-4 z-10 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>Dein Lernplan</h2>
      <div className="space-y-3">
        {courseData.days.map((day) => {
          const isLocked = isDayLocked(day.id);
          const isDone = progress.completedDays.includes(day.id);
          
          return (
            <div 
              key={day.id}
              onClick={() => {
                if (!isLocked) {
                  setSelectedDay(day);
                  setViewMode('learn');
                }
              }}
              className={`
                relative p-4 rounded-xl border flex items-center justify-between transition-all
                ${isLocked 
                  ? (darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-200 border-gray-300') + ' opacity-50 cursor-not-allowed' 
                  : (darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:bg-gray-50 shadow-sm') + ' cursor-pointer'}
                ${isDone && darkMode ? 'border-green-900 bg-gray-800/50' : ''}
                ${isDone && !darkMode ? 'border-green-200 bg-green-50' : ''}
              `}
            >
              <div className="flex items-center space-x-4">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                  ${isDone ? 'bg-green-900 text-green-400' : isLocked ? (darkMode ? 'bg-gray-800 text-gray-600' : 'bg-gray-300 text-gray-500') : 'bg-blue-900 text-blue-400'}
                `}>
                  {isDone ? <CheckCircle size={18} /> : day.id}
                </div>
                <div>
                  <h3 className={`font-medium ${isDone ? 'text-gray-500' : (darkMode ? 'text-white' : 'text-gray-900')}`}>
                    {day.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{day.goal}</p>
                </div>
              </div>
              
              {isLocked ? <Lock size={16} className="text-gray-600" /> : <ChevronRight size={16} className="text-gray-500" />}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderReview = () => {
    const totalQuizQuestions = courseData.days.reduce((sum, day) => sum + (day.quiz?.length || 0), 0);
    const totalScore = Object.values(progress.quizScores).reduce((a, b) => a + b, 0);
    const completedCount = progress.completedDays.length;

    return (
      <div className="p-6 pb-24">
        <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Review & Analyse</h2>
        
        <div className={`rounded-xl p-5 border mb-8 flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-md'}`}>
          <div>
            <p className="text-gray-400 text-sm mb-1">Gesamtscore</p>
            <p className="text-3xl font-bold text-blue-500">{totalScore} <span className="text-lg text-gray-500">/ {totalQuizQuestions}</span></p>
          </div>
          <div className="h-12 w-12 rounded-full bg-blue-900 flex items-center justify-center">
            <PieChart className="text-blue-400" />
          </div>
        </div>

        <h3 className="text-gray-500 text-xs uppercase font-bold mb-3 tracking-wider">Detailauswertung</h3>
        <div className="space-y-3">
          {courseData.days.map(day => {
            const score = progress.quizScores[day.id] ?? 0;
            const max = day.quiz?.length || 0;
            const isDone = progress.completedDays.includes(day.id);
            const weak = isDone && score < max; 
            
            if (!isDone && isDayLocked(day.id)) return null; 

            return (
              <div key={day.id} className={`rounded-lg p-4 border flex justify-between items-center ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className="flex items-center space-x-3">
                  {weak ? <AlertCircle size={16} className="text-yellow-500"/> : <div className="w-4"/>}
                  <div>
                    <p className={`${darkMode ? 'text-white' : 'text-gray-900'} font-medium`}>Tag {day.id}</p>
                    <p className="text-xs text-gray-500 line-clamp-1 w-32 sm:w-auto">{day.title}</p>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  {isDone ? (
                    <>
                      <span className={`font-mono font-bold ${score === max ? 'text-green-500' : 'text-yellow-500'}`}>
                        {score}/{max}
                      </span>
                      {score < max && (
                        <button
                          onClick={() => {
                            setSelectedDay(day);
                            setViewMode('learn');
                          }}
                          className="text-xs text-blue-400 hover:underline mt-1 flex items-center"
                        >
                          <RotateCcw size={10} className="mr-1"/> Wiederholen
                        </button>
                      )}
                    </>
                  ) : (
                    <span className="text-xs text-gray-500 italic">Offen</span>
                  )}
                </div>
              </div>
            );
          })}
          {completedCount === 0 && (
            <p className="text-gray-500 text-center py-8 italic">Schließe den ersten Tag ab, um hier Daten zu sehen.</p>
          )}
        </div>
      </div>
    );
  };

  const renderDetailView = () => {
    if (!selectedDay) return null;

    if (viewMode === 'quiz') {
      return (
        <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col animate-in fade-in duration-200">
          <div className="p-4 flex items-center border-b border-gray-800">
            <button onClick={() => setViewMode('learn')} className="text-gray-400 mr-4 hover:text-white"><RotateCcw size={20}/></button>
            <h2 className="text-white font-bold">Quiz: Tag {selectedDay.id}</h2>
          </div>
          <QuizSession 
            quizData={selectedDay.quiz} 
            onComplete={(score) => completeDay(selectedDay.id, score)} 
          />
        </div>
      );
    }

    if (viewMode === 'passive') {
      return <PassiveSession cards={selectedDay.cards} onClose={() => setViewMode('learn')} />;
    }

    // Learn Mode (Theory + Cards)
    return (
      <div className="fixed inset-0 bg-gray-900 z-40 flex flex-col overflow-y-auto pb-20 animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-4 flex items-center justify-between bg-gray-900/95 backdrop-blur sticky top-0 z-50 border-b border-gray-800">
          <button 
            onClick={() => { setSelectedDay(null); setViewMode('overview'); }}
            className="text-gray-400 hover:text-white p-1"
          >
            <ChevronRight className="transform rotate-180" />
          </button>
          <span className="text-white font-semibold">Tag {selectedDay.id}</span>
          <div className="w-6"></div>
        </div>

        {/* Content */}
        <div className="p-6 max-w-2xl mx-auto w-full">
          <h1 className="text-2xl font-bold text-white mb-2">{selectedDay.title}</h1>
          <div className="bg-blue-900/20 text-blue-300 p-3 rounded-lg text-sm mb-6 border border-blue-900/50">
            🎯 <strong>Ziel:</strong> {selectedDay.goal}
          </div>

          <div className="mb-8">
            <h3 className="text-gray-400 uppercase text-xs font-bold mb-3 tracking-wider">1. Verstehen (Build & Learn)</h3>
            <div className="bg-gray-800 rounded-xl p-5 text-gray-300 leading-relaxed whitespace-pre-line border border-gray-700 shadow-sm">
              {selectedDay.theory}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-end mb-3">
              <h3 className="text-gray-400 uppercase text-xs font-bold tracking-wider">2. Wiederholen (Flip-Cards)</h3>
              {/* NEUER BUTTON FÜR PASSIVE MODE */}
              <button 
                onClick={() => setViewMode('passive')}
                className="flex items-center text-blue-400 text-xs hover:text-blue-300 bg-blue-900/30 px-2 py-1 rounded border border-blue-900/50"
              >
                <PlayCircle size={12} className="mr-1" /> Passiv-Modus (Auto)
              </button>
            </div>
            
            <div className="space-y-4">
              {selectedDay.cards.map(c => <FlipCard key={c.id} card={c} />)}
            </div>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => setViewMode('quiz')}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Award className="mr-2" />
              Zum Tages-Quiz
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">Absolviere das Quiz, um den Tag abzuschließen.</p>
          </div>
        </div>
      </div>
    );
  };

  const renderProfile = () => (
    <div className="p-6 pb-24">
      <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Profil & Einstellungen</h2>
      
      <div className={`rounded-xl p-4 border mb-6 flex items-center space-x-4 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`}>
         <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xl">
          DM
        </div>
        <div>
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Daniel Massa</h3>
          <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">Strategisch-Hybrider Lerntyp</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className={`rounded-lg p-4 border flex justify-between items-center cursor-pointer ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'}`} onClick={() => setDarkMode(!darkMode)}>
          <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Schattenmacher (Dark Mode)</span>
          <div className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${darkMode ? 'right-1' : 'left-1'}`}></div>
          </div>
        </div>

        <button 
          onClick={() => {
             if (confirm('Lernfortschritt wirklich zurücksetzen?')) {
               setProgress({ completedDays: [], quizScores: {} });
             }
          }}
          className="w-full border border-red-900/50 text-red-500 p-4 rounded-lg hover:bg-red-500/10 transition-colors text-left"
        >
          Fortschritt zurücksetzen
        </button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-xs">ShadowLearn MVP v1.2 (Passive Mode)</p>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      {(selectedDay || viewMode !== 'overview') && renderDetailView()}

      {!selectedDay && (
        <>
          {activeTab === 'home' && renderHome()}
          {activeTab === 'course' && renderCourseList()}
          {activeTab === 'review' && renderReview()}
          {activeTab === 'profile' && renderProfile()}
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} darkMode={darkMode} />
        </>
      )}
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>
    </div>
  );
}
