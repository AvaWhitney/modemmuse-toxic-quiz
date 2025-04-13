import React, { useState, useRef } from "react";
import { questions } from "../data/questions.ts";
import { results, ResultType } from "../data/results.ts";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState<ResultType | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const focusTrapRef = useRef<HTMLDivElement | null>(null);

  const handleAnswer = (tags: string[]) => {
    setSelectedTags((prev) => [...prev, ...tags]);

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      calculateResult();
      setShowResult(true);
    }
    setTimeout(() => {
      focusTrapRef.current?.focus();
    }, 0);
  };

  const calculateResult = () => {
    const tagCounts: { [key: string]: number } = {};
    selectedTags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });

    const maxCount = Math.max(...Object.values(tagCounts));
    const tiedTypes = Object.entries(tagCounts)
      .filter(([_, count]) => count === maxCount)
      .map(([tag]) => tag);

    const chosenType = tiedTypes[Math.floor(Math.random() * tiedTypes.length)];
    const result = results.find((r) => r.id === chosenType) || null;
    setFinalResult(result);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedTags([]);
    setShowResult(false);
    setFinalResult(null);
    setHasStarted(false);
  };

  //  Landing screen
  if (!hasStarted) {
    return (
      <div className="max-w-xl mx-4 sm:mx-6 md:mx-auto mt-7 md:mt-5 p-6 rounded-2xl text-center">  
        <p className="text-black mb-6 text-xl">
        You’ll be choosing between cursed, slightly humiliating scenarios that will uncover the part of you your friends pretend not to notice.
        Let’s find the toxic trait you’ve been passing off as ✨vibes✨.
        </p>
        <button
          onClick={() => setHasStarted(true)}
          className="bg-pink-500 text-white px-6 py-3 mt-6 rounded-xl hover:bg-pink-600 transition-all"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  // Results screen
  if (showResult && finalResult) {
    return (
      <div className="max-w-xl mx-2 sm:mx-4 md:mx-auto mt-5 p-6 sm:p-6 bg-white rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 mx-1">{finalResult.name}</h2>
        <p className="text-pink-600 text-sm italic mb-4">{finalResult.oneLiner}</p>
        <p className="text-gray-700 text-base mb-6">{finalResult.description}</p>
        <button
          onClick={handleRestart}
          className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-all"
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  // Quiz in progress
  return (
    <div 
      key={currentQuestion}
      className="max-w-xl mx-2 sm:mx-4 md:mx-auto mt-5 p-4 sm:p-6 bg-white rounded-2xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-sm md:text-lg text-gray-500 mb-2">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800">{question.prompt}</h1>
      </div>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={(e) => {
              (e.target as HTMLButtonElement).blur();
              handleAnswer(option.tags);
            }}
            
            
            className="block w-full text-sm md:text-base text-left px-4 py-3 bg-pink-100 hover:bg-pink-200 rounded-xl text-gray-800 transition-all duration-200"
          >
            {option.text}
          </button>
        ))}
        <div tabIndex={-1} ref={focusTrapRef} className="sr-only" />

      </div>
    </div>
  );
};

export default Quiz;
