import { useState } from "react";
import Header from "./Header";

export default function PlotQuiz() {
  const questions = [
    {
      question:
        "Why does Nick Carraway move to West Egg at the beginning of The Great Gatsby?",
      options: [
        "A. To pursue farming opportunities",
        "B. To escape the war-torn Midwest",
        "C. To pursue a career in the bond business",
        "D. To reunite with his childhood friend Gatsby",
      ],
      correctAnswer: "C. To pursue a career in the bond business",
    },
    {
      question:
        "What is Jay Gatsby doing when Nick first sees him in Chapter 1?",
      options: [
        "A. Hosting a party at his mansion",
        "B. Reaching out toward a green light across the water",
        "C. Conversing with Daisy on the dock",
        "D. Riding in a yellow car",
      ],
      correctAnswer: "B. Reaching out toward a green light across the water",
    },
    {
      question: "What is Myrtle Wilson’s relationship to Tom Buchanan?",
      options: [
        "A. His wife",
        "B. His sister",
        "C. His mistress",
        "D. His business partner",
      ],
      correctAnswer: "C. His mistress",
    },
    {
      question:
        "During the confrontation at the Plaza Hotel, what does Daisy Buchanan confess about her feelings?",
      options: [
        "A. She never loved Tom Buchanan",
        "B. She only ever loved Gatsby",
        "C. She loved both Tom and Gatsby at different times",
        "D. She never loved either of them",
      ],
      correctAnswer: "C. She loved both Tom and Gatsby at different times",
    },
    {
      question: "Who was driving the car that struck and killed Myrtle Wilson?",
      options: [
        "A. Tom Buchanan",
        "B. Daisy Buchanan",
        "C. Jay Gatsby",
        "D. Jordan Baker",
      ],
      correctAnswer: "B. Daisy Buchanan",
    },
    {
      question:
        "Who ultimately shoots Jay Gatsby, and what prompts him to do it?",
      options: [
        "A. Tom Buchanan, out of jealousy",
        "B. George Wilson, believing Gatsby killed his wife",
        "C. Daisy Buchanan, by accident",
        "D. Nick Carraway, by mistake",
      ],
      correctAnswer: "B. George Wilson, believing Gatsby killed his wife",
    },
    {
      question:
        "What truth about his past does Gatsby reveal to Nick the morning after Myrtle’s death?",
      options: [
        "A. He inherited his wealth from Dan Cody",
        "B. He was once married in Louisville",
        "C. He earned his fortune through bootlegging to be worthy of Daisy",
        "D. He attended Harvard and became a movie star",
      ],
      correctAnswer:
        "C. He earned his fortune through bootlegging to be worthy of Daisy",
    },
    {
      question:
        "Which of Gatsby’s acquaintances is infamous for having fixed the 1919 World Series?",
      options: [
        "A. Meyer Wolfsheim",
        "B. George Wilson",
        "C. Dan Cody",
        "D. Owl Eyes",
      ],
      correctAnswer: "A. Meyer Wolfsheim",
    },
    {
      question: "What do Tom and Daisy Buchanan do after Gatsby’s death?",
      options: [
        "A. They are arrested for obstruction of justice",
        "B. They move to Chicago",
        "C. They leave Long Island with no forwarding address",
        "D. They attend Gatsby’s funeral",
      ],
      correctAnswer: "C. They leave Long Island with no forwarding address",
    },
    {
      question:
        "What decision does Nick Carraway make at the end of the novel?",
      options: [
        "A. He takes over Gatsby’s mansion",
        "B. He returns to the Midwest, disillusioned with the East",
        "C. He stays in New York to continue in the bond business",
        "D. He marries Jordan Baker",
      ],
      correctAnswer:
        "B. He returns to the Midwest, disillusioned with the East",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Header />

      <div className="relative bg-[url('https://i.imgur.com/Q5ARTFT.png')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 px-4 py-12">
          <h1 className="text-3xl font-bold text-center mb-8">
            How well do you know{" "}
            <span className="italic">The Great Gatsby</span>?
          </h1>

          {!showScore ? (
            <div
              className="max-w-2xl mx-auto p-6 bg-transparent backdrop-blur-sm border border-white/30
                   shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-2xl"
            >
              <h2 className="text-xl font-semibold mb-6">
                Question {currentIndex + 1} of {questions.length}
              </h2>
              <p className="mb-6">{questions[currentIndex].question}</p>
              <div className="space-y-3">
                {questions[currentIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className={`cursor-pointer w-full text-left px-4 py-2 rounded-lg transition-colors border 
                      ${
                        selected === option
                          ? option === questions[currentIndex].correctAnswer
                            ? "bg-green-600 border-green-400"
                            : "bg-red-600 border-red-400"
                          : "bg-gray-700 hover:bg-gray-600 border-gray-600"
                      }`}
                    disabled={selected !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-2xl font-bold">Quiz Complete!</h2>
              <p className="mt-4 text-lg">
                You scored{" "}
                <span className="text-yellow-400 font-semibold">
                  {((score / questions.length) * 100).toFixed(0)}%
                </span>
              </p>
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setScore(0);
                  setShowScore(false);
                }}
                className="cursor-pointer mt-6 bg-gray-900 text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:bg-gray-800 transition duration-200"
              >
                Retake
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
