import { useState, useEffect, useCallback, useRef } from "react";
import { QUIZ_DATA } from "../data/quiz";

const Quiz = () => {
  const [screen, setScreen] = useState("topics");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isLocked, setIsLocked] = useState(false);
  const [history, setHistory] = useState([]);

  const timeoutHandledRef = useRef(false);

  const handleAnswer = useCallback(
    (index) => {
      if (isLocked) return;

      setIsLocked(true);
      setSelectedAnswer(index);

      const question = QUIZ_DATA[selectedTopic].questions[currentQIndex];
      const isCorrect = index === question.answer;

      if (isCorrect) setScore((prev) => prev + 1);

      setHistory((prev) => [...prev, { correct: isCorrect, time: 30 - timer }]);
    },
    [isLocked, selectedTopic, currentQIndex, timer],
  );

  useEffect(() => {
    if (screen !== "quiz" || isLocked) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [screen, isLocked]);

  useEffect(() => {
    if (screen !== "quiz" || isLocked) return;

    if (timer <= 0 && !timeoutHandledRef.current) {
      timeoutHandledRef.current = true;
      setTimeout(() => handleAnswer(-1), 0);
    }
  }, [timer, screen, isLocked, handleAnswer]);

  const startQuiz = (topicKey) => {
    setSelectedTopic(topicKey);
    setScreen("quiz");
    setCurrentQIndex(0);
    setScore(0);
    setTimer(30);
    setIsLocked(false);
    setSelectedAnswer(null);
    setHistory([]);
    timeoutHandledRef.current = false;
  };

  const nextQuestion = () => {
    const nextIndex = currentQIndex + 1;

    if (nextIndex < QUIZ_DATA[selectedTopic].questions.length) {
      setCurrentQIndex(nextIndex);
      setTimer(30);
      setIsLocked(false);
      setSelectedAnswer(null);
      timeoutHandledRef.current = false;
    } else {
      setScreen("results");
    }
  };

  if (screen === "topics") {
    return (
      <div className="min-h-screen p-8 m-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Think you know{" "}
            <span className="text-amber-500 italic">backend?</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            10 questions · 30 seconds each. Pick a topic.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {Object.keys(QUIZ_DATA).map((key) => (
            <div
              key={key}
              onClick={() => startQuiz(key)}
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl cursor-pointer hover:border-indigo-500 hover:-translate-y-1 transition-all text-center"
            >
              <span className="text-4xl mb-2 block">{QUIZ_DATA[key].icon}</span>
              <h3 className="font-bold text-sm">{QUIZ_DATA[key].name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (screen === "quiz") {
    const currentQuestion = QUIZ_DATA[selectedTopic].questions[currentQIndex];

    const progress =
      ((currentQIndex + 1) / QUIZ_DATA[selectedTopic].questions.length) * 100;

    return (
      <div className="min-h-screen p-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="bg-indigo-500/10 text-indigo-500 px-3 py-1 rounded-full text-xs font-bold">
                {QUIZ_DATA[selectedTopic].name}
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 uppercase">
                Question {currentQIndex + 1} of 10
              </p>
            </div>

            <div className="w-12 h-12 flex items-center justify-center border-2 border-slate-300 dark:border-slate-700 rounded-full font-bold">
              {timer}
            </div>
          </div>

          {/* Progress */}
          <div className="h-1 bg-slate-200 dark:bg-slate-800 mb-8">
            <div
              className="h-full bg-indigo-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question */}
          <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 rounded-xl mb-6">
            {currentQuestion.q}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let cls =
                "w-full p-4 border rounded-xl text-left transition-all ";

              if (!isLocked) {
                cls +=
                  "bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-indigo-500";
              } else {
                if (idx === currentQuestion.answer)
                  cls +=
                    "bg-green-500/10 border-green-500 text-green-600 dark:text-green-400";
                else if (idx === selectedAnswer)
                  cls +=
                    "bg-red-500/10 border-red-500 text-red-600 dark:text-red-400";
                else cls += "opacity-50";
              }

              return (
                <button
                  key={idx}
                  disabled={isLocked}
                  onClick={() => handleAnswer(idx)}
                  className={cls}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isLocked && (
            <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {currentQuestion.explanation}
              </p>
              <button
                onClick={nextQuestion}
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition"
              >
                {currentQIndex === 9 ? "Show Results" : "Next Question →"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (screen === "results") {
    const avgTime =
      history.length > 0
        ? (history.reduce((a, b) => a + b.time, 0) / history.length).toFixed(1)
        : 0;

    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">Score: {score}/10</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-6">
            Avg Time: {avgTime}s
          </p>

          <button
            onClick={() => setScreen("topics")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
};

export default Quiz;
