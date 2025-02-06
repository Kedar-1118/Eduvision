import React, { useState } from "react";
// import "./App.css";

const quizQuestions = [
  {
    question: "What is the largest state in India by area?",
    options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    answer: "Rajasthan",
  },
  {
    question: "Which river is known as the lifeline of Gujarat?",
    options: ["Narmada", "Tapi", "Sabarmati", "Mahi"],
    answer: "Sabarmati",
  },
  {
    question: "Which is the smallest state in India by area?",
    options: ["Goa", "Sikkim", "Tripura", "Nagaland"],
    answer: "Goa",
  },
  {
    question: "What is the capital of Assam?",
    options: ["Dispur", "Guwahati", "Shillong", "Imphal"],
    answer: "Dispur",
  },
  {
    question: "Which state is known as the 'Spice Garden of India'?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    answer: "Kerala",
  },
  {
    question: "In which state is the Sundarbans located?",
    options: ["West Bengal", "Odisha", "Assam", "Bihar"],
    answer: "West Bengal",
  },
  {
    question: "Which plateau is known as the 'Roof of the South'?",
    options: ["Deccan Plateau", "Chotanagpur Plateau", "Malwa Plateau", "Bastar Plateau"],
    answer: "Deccan Plateau",
  },
  {
    question: "What is the official language of Nagaland?",
    options: ["English", "Hindi", "Nagamese", "Assamese"],
    answer: "English",
  },
  {
    question: "Where is the highest peak in India located?",
    options: ["Sikkim", "Uttarakhand", "Himachal Pradesh", "Arunachal Pradesh"],
    answer: "Sikkim",
  },
  {
    question: "Which lake is the largest freshwater lake in India?",
    options: ["Wular Lake", "Chilika Lake", "Pulicat Lake", "Loktak Lake"],
    answer: "Wular Lake",
  },
];

const Skills = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-auto m-50 px-10 py-20" id="skills">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Your Score: {score} / {quizQuestions.length}</h2>
            <button
              onClick={handleRestartQuiz}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </h2>
            <p className="text-lg mb-6">{quizQuestions[currentQuestionIndex].question}</p>
            <div className="grid grid-cols-1 gap-4">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className={`w-full px-4 py-2 rounded-md border-2 text-left ${selectedOption === option
                    ? "bg-blue-500 text-white"
                    : "border-gray-300 hover:bg-gray-100"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
              disabled={selectedOption === null}
            >
              {currentQuestionIndex === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
