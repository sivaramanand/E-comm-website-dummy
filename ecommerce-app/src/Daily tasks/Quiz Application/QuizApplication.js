import React, { useEffect, useState } from "react";
import { questions } from "./questions";
import QuizQuestions from "./QuizQuestions";

const QuizApplication = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      nextQuestion();
    }
  }, [timeRemaining]);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].correct) {
      setScore((prevScore) => prevScore + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeRemaining(10);
    } else {
      setQuizOver(true);
    }
  };

  useEffect(() => {
    if (quizOver) {
      alert(`Quiz over! Your score is ${score}`);
      setCurrentQuestionIndex(0);
      setScore(0);
      setTimeRemaining(10);
      setQuizOver(false);
    }
  }, [quizOver, score]);

  return (
    <div>
      <h1>Quiz App</h1>
      <QuizQuestions
        data={questions[currentQuestionIndex]}
        handleAnswer={handleAnswer}
        timeRemaining={timeRemaining}
      />
      <p>Time remaining: {timeRemaining} seconds</p>
      <p>Current score: {score}</p>
    </div>
  );
};

export default QuizApplication;
