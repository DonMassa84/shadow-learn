import React, { useState, useEffect } from "react";
import { courseData, bonusModules } from "./courseData";
import {
  Home,
  Layers,
  PieChart,
  Brain,
  CheckCircle,
  PlayCircle,
  PauseCircle,
  Award,
  Play,
  Lock,
  ChevronRight,
  AlertCircle,
  RotateCcw,
} from "lucide-react";

const TabButton = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={
      "flex flex-col items-center justify-center flex-1 py-2 text-xs " +
      (active ? "text-cyan-300" : "text-slate-400 hover:text-slate-200")
    }
  >
    <Icon className="h-5 w-5 mb-1" />
    <span>{label}</span>
  </button>
);

const Pill = ({ icon: Icon, label }: any) => (
  <div className="inline-flex items-center gap-1 rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-200">
    {Icon && <Icon className="h-3 w-3" />}
    <span>{label}</span>
  </div>
);

const TheoryBlock = ({ text }: any) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm leading-relaxed text-slate-100 max-h-[260px] overflow-y-auto">
    {String(text || "")
      .split("\n")
      .map((line: string, idx: number) =>
        line.trim() === "" ? (
          <div key={idx} className="h-2" />
        ) : (
          <p key={idx} className="mb-1">
            {line}
          </p>
        )
      )}
  </div>
);

const FlashcardStack = ({ cards, activeIndex }: any) => {
  const safeCards = Array.isArray(cards) ? cards : [];
  if (!safeCards.length) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-4 text-sm text-slate-400">
        Noch keine Lernkarten für diesen Tag hinterlegt.
      </div>
    );
  }

  return (
    <div className="relative">
      {safeCards.map((card: any, index: number) => {
        const isActive = index === activeIndex;
        const offset = Math.max(0, index - activeIndex);
        const zIndex = safeCards.length - index;

        if (offset > 2) return null;

        return (
          <div
            key={card.id ?? index}
            className={
              "rounded-2xl border bg-slate-900/80 p-4 shadow-md transition-all duration-300 absolute w-full " +
              (isActive
                ? "border-cyan-400/70 shadow-cyan-500/20"
                : "border-slate-700/80 opacity-70")
            }
            style={{
              zIndex,
              transform: `translateY(${offset * 6}px)`,
              top: index === 0 ? 0 : -20 * activeIndex,
            }}
          >
            <p className="text-xs font-medium text-cyan-300/80 mb-1">
              Lernkarte {index + 1} / {safeCards.length}
            </p>
            <p className="text-sm font-semibold text-slate-50 mb-1">
              {card.q}
            </p>
            <p className="text-sm text-slate-300 whitespace-pre-line">
              {card.a}
            </p>
          </div>
        );
      })}
      <div className="h-40" />
    </div>
  );
};

const QuizTeaser = ({ quiz }: any) => {
  const count = Array.isArray(quiz) ? quiz.length : 0;
  if (!count) return null;
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs text-slate-200 flex items-center justify-between gap-3">
      <div className="flex items-start gap-2">
        <AlertCircle className="h-4 w-4 text-amber-400 mt-0.5" />
        <div>
          <p className="font-semibold mb-1">IHK-Quizfokus</p>
          <p className="text-slate-300">
            Dieser Tag enthält {count} typische Prüfungsfragen. Nutze sie, um
            das Gelernte unter Zeitdruck abzurufen.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-1 text-[11px] text-cyan-300">
        <Play className="h-3 w-3" />
        <span>Im Kopf durchspielen</span>
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState<"course" | "bonus">("course");
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedBonusIndex, setSelectedBonusIndex] = useState(0);
  const [passiveMode, setPassiveMode] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const days = courseData.days || [];
  const bonuses = bonusModules || [];

  const selectedDay = days[selectedDayIndex];
  const selectedBonus = bonuses[selectedBonusIndex];

  useEffect(() => {
    setCurrentCardIndex(0);
  }, [selectedDayIndex, selectedBonusIndex, activeTab]);

  useEffect(() => {
    if (!passiveMode) return;

    const cards =
      activeTab === "course" ? selectedDay?.cards : selectedBonus?.cards;
    if (!cards || !cards.length) return;

    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [passiveMode, activeTab, selectedDay, selectedBonus]);

  const totalDays = courseData.totalDays ?? days.length;
  const progressPercent = totalDays
    ? Math.min(100, ((selectedDayIndex + 1) / totalDays) * 100)
    : 0;

  const isCourse = activeTab === "course";
  const current = isCourse ? selectedDay : selectedBonus;

  const handleNextCard = () => {
    const cards = current?.cards || [];
    if (cards.length > 0) {
      setCurrentCardIndex((prev) => (prev + 1) % cards.length);
    }
  };

  const handlePrevCard = () => {
    const cards = current?.cards || [];
    if (cards.length > 0) {
      setCurrentCardIndex((prev) =>
        prev === 0 ? cards.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
              <Brain className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                ShadowLearn · AEVO & Mitarbeiterführung
              </p>
              <p className="text-sm font-semibold text-slate-50">
                14-Tage Sprint + Bonusmodule
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-300">
            <Pill icon={CheckCircle} label="IHK-Struktur integriert" />
            <Pill icon={Award} label="Operative Professionals" />
          </div>
        </div>
      </header>

      {/* Main layout */}
      <main className="flex-1">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-4 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
          {/* Left column */}
          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400 mb-0.5">
                    Lernpfad
                  </p>
                  <p className="text-sm font-semibold text-slate-100">
                    {isCourse ? "Tage 1–14" : "Bonusmodule"}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-300">
                  <PieChart className="h-3 w-3 text-cyan-300" />
                  <span>{Math.round(progressPercent)}%</span>
                </div>
              </div>

              {isCourse ? (
                <div className="flex flex-col gap-1 max-h-[260px] overflow-y-auto pr-1">
                  {days.map((day: any, index: number) => (
                    <button
                      key={day.id ?? index}
                      onClick={() => setSelectedDayIndex(index)}
                      className={
                        "flex items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition-colors " +
                        (index === selectedDayIndex
                          ? "bg-cyan-500/15 border border-cyan-400/60 text-cyan-50"
                          : "bg-slate-900/40 border border-slate-800 text-slate-200 hover:border-slate-600")
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/90 text-[10px] text-slate-300">
                          {index + 1}
                        </span>
                        <span className="line-clamp-1">{day.title}</span>
                      </div>
                      <ChevronRight className="h-3 w-3 opacity-70" />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-1 max-h-[260px] overflow-y-auto pr-1">
                  {bonuses.map((mod: any, index: number) => (
                    <button
                      key={mod.id ?? index}
                      onClick={() => setSelectedBonusIndex(index)}
                      className={
                        "flex items-center justify-between rounded-xl px-3 py-2 text-xs text-left transition-colors " +
                        (index === selectedBonusIndex
                          ? "bg-violet-500/15 border border-violet-400/60 text-violet-50"
                          : "bg-slate-900/40 border border-slate-800 text-slate-200 hover:border-slate-600")
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/90 text-[10px] text-slate-300">
                          B{index + 1}
                        </span>
                        <span className="line-clamp-1">{mod.title}</span>
                      </div>
                      <ChevronRight className="h-3 w-3 opacity-70" />
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-3 flex flex-wrap gap-1.5">
                <Pill icon={Layers} label="Führen · Entwickeln · Schützen" />
                <Pill icon={Lock} label="Arbeitsrecht & Compliance" />
              </div>
            </div>

            {/* Passive Mode Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 flex items-center justify-between gap-3">
              <div className="flex items-start gap-2">
                {passiveMode ? (
                  <PlayCircle className="h-5 w-5 text-emerald-400 mt-0.5" />
                ) : (
                  <PauseCircle className="h-5 w-5 text-slate-500 mt-0.5" />
                )}
                <div>
                  <p className="text-xs font-semibold text-slate-100 mb-0.5">
                    Passive Mode
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Karten laufen automatisch durch (alle 4 Sekunden). Ideal
                    für passives Wiederholen nebenher.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setPassiveMode((v) => !v)}
                className={
                  "inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] border transition-colors " +
                  (passiveMode
                    ? "border-emerald-400/70 bg-emerald-500/10 text-emerald-200"
                    : "border-slate-600 bg-slate-900 text-slate-200 hover:border-slate-400")
                }
              >
                {passiveMode ? (
                  <>
                    <PauseCircle className="h-3 w-3" />
                    <span>Stopp</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" />
                    <span>Start</span>
                  </>
                )}
              </button>
            </div>
          </aside>

          {/* Right column */}
          <section className="space-y-4">
            {/* Title & meta */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                    {isCourse ? "Tag" : "Bonusmodul"}
                  </p>
                  <h1 className="text-base font-semibold text-slate-50">
                    {current?.title ??
                      (isCourse
                        ? "Kein Tag ausgewählt"
                        : "Kein Modul ausgewählt")}
                  </h1>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-300">
                  <div className="flex items-center gap-1">
                    <RotateCcw className="h-3 w-3 text-slate-400" />
                    <span>Wiederholen bis sicher</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-3 w-3 text-amber-300" />
                    <span>Prüfungsfit</span>
                  </div>
                </div>
              </div>
              {current?.goal && (
                <p className="text-[13px] text-slate-200">
                  <span className="font-semibold text-cyan-300">
                    Tagesziel:&nbsp;
                  </span>
                  {current.goal}
                </p>
              )}

              {isCourse && (
                <div className="mt-3 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              )}
            </div>

            {/* Theory + Quiz teaser */}
            <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
              <TheoryBlock
                text={
                  current?.theory ??
                  "Keine Theorie für diesen Abschnitt hinterlegt."
                }
              />
              <div className="space-y-3">
                <QuizTeaser quiz={current?.quiz} />
                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3 text-[11px] text-slate-300">
                  <div className="flex items-start gap-2">
                    <Home className="h-3.5 w-3.5 text-cyan-300 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">
                        Tagesroutine Empfehlung
                      </p>
                      <ul className="list-disc list-inside space-y-0.5">
                        <li>
                          5–10 Minuten: Theorieblock einmal ruhig lesen.
                        </li>
                        <li>
                          10 Minuten: Lernkarten im aktiven Modus (ohne
                          Passive Mode).
                        </li>
                        <li>
                          5 Minuten: Quizfragen ohne Spickzettel beantworten.
                        </li>
                        <li>
                          Abends: Passive Mode laufen lassen (Wiederholung).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flashcards */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-300" />
                  <p className="text-xs font-semibold text-slate-200">
                    Lernkarten – konzentrierter Prüfungsstoff
                  </p>
                </div>
                {current?.cards?.length ? (
                  <div className="flex items-center gap-2 text-[11px] text-slate-300">
                    <span>
                      Karte {currentCardIndex + 1} / {current.cards.length}
                    </span>
                    {!passiveMode && (
                      <div className="flex gap-1">
                        <button
                          className="rounded-full border border-slate-700 px-2 py-0.5 hover:border-slate-400"
                          onClick={handlePrevCard}
                        >
                          ‹ Zurück
                        </button>
                        <button
                          className="rounded-full border border-slate-700 px-2 py-0.5 hover:border-slate-400"
                          onClick={handleNextCard}
                        >
                          Weiter ›
                        </button>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
              <FlashcardStack
                cards={current?.cards ?? []}
                activeIndex={currentCardIndex}
              />
            </div>
          </section>
        </div>
      </main>

      {/* Bottom navigation */}
      <nav className="border-t border-slate-800 bg-slate-950/95 backdrop-blur sticky bottom-0 z-10">
        <div className="mx-auto flex w-full max-w-6xl items-stretch px-2 py-1">
          <TabButton
            icon={Layers}
            label="Kurs 1–14"
            active={activeTab === "course"}
            onClick={() => setActiveTab("course")}
          />
          <TabButton
            icon={Brain}
            label="Bonus"
            active={activeTab === "bonus"}
            onClick={() => setActiveTab("bonus")}
          />
        </div>
      </nav>
    </div>
  );
}

export default App;
