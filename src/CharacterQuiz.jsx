import { useState } from "react";
import { Link } from "react-router-dom";

const bgImage = "https://i.imgur.com/4TrQHKD.jpeg";

const questions = [
  {
    text: "What motivates you the most?",
    options: [
      {
        text: "Love and dreams of a better life",
        points: { Gatsby: 2, Daisy: 1 },
      },
      { text: "Loyalty and observing others", points: { Nick: 2 } },
      { text: "Power and dominance", points: { Tom: 2, Myrtle: 1 } },
      { text: "Social climbing and wealth", points: { Jordan: 2, Myrtle: 1 } },
    ],
  },
  {
    text: "What’s your ideal weekend activity?",
    options: [
      { text: "Hosting a glamorous party", points: { Gatsby: 2, Jordan: 1 } },
      {
        text: "Quiet time reading or reflecting",
        points: { Nick: 2, Gatsby: 1 },
      },
      { text: "Shopping and being seen", points: { Daisy: 2, Jordan: 1 } },
      { text: "Watching or playing sports", points: { Tom: 2, Jordan: 1 } },
    ],
  },
  {
    text: "How do you handle conflict?",
    options: [
      { text: "Avoid it and retreat inward", points: { Nick: 2, Daisy: 1 } },
      {
        text: "Face it head-on, maybe with aggression",
        points: { Tom: 2, Myrtle: 1 },
      },
      {
        text: "Try to impress or win someone over",
        points: { Gatsby: 2, Daisy: 1 },
      },
      { text: "Use charm or manipulation", points: { Jordan: 2 } },
    ],
  },
  {
    text: "Which quote speaks to you most?",
    options: [
      {
        text: "“Can’t repeat the past? Why of course you can!”",
        points: { Gatsby: 2 },
      },
      {
        text: "“I was within and without, simultaneously enchanted and repelled.”",
        points: { Nick: 2 },
      },
      {
        text: "“I hope she’ll be a fool — that’s the best thing a girl can be in this world.”",
        points: { Daisy: 2 },
      },
      {
        text: "“They’re a rotten crowd. You’re worth the whole damn bunch put together.”",
        points: { Nick: 1, Gatsby: 1 },
      },
    ],
  },
  {
    text: "Which flaw best describes you?",
    options: [
      { text: "Naïve and idealistic", points: { Gatsby: 2, Nick: 1 } },
      { text: "Shallow and indecisive", points: { Daisy: 2 } },
      { text: "Arrogant and controlling", points: { Tom: 2 } },
      { text: "Dishonest or secretive", points: { Jordan: 2, Myrtle: 1 } },
    ],
  },
  {
    text: "What role do you usually play in your friend group?",
    options: [
      { text: "The dreamer with a plan", points: { Gatsby: 2 } },
      { text: "The loyal listener", points: { Nick: 2 } },
      { text: "The confident leader", points: { Tom: 2, Jordan: 1 } },
      {
        text: "The one who’s always chasing something more",
        points: { Myrtle: 2, Daisy: 1 },
      },
    ],
  },
];

const results = {
  Gatsby: {
    name: "Jay Gatsby",
    description:
      "You're a visionary and a romantic. You chase big dreams and are driven by love and ambition, but you may overlook reality in the process.",
  },
  Daisy: {
    name: "Daisy Buchanan",
    description:
      "You're charming and complex. You crave beauty and comfort but may struggle with making hard choices or staying grounded.",
  },
  Nick: {
    name: "Nick Carraway",
    description:
      "You're observant, reflective, and honest (mostly). You watch the drama unfold but try to stay morally aware and balanced.",
  },
  Tom: {
    name: "Tom Buchanan",
    description:
      "You're bold and forceful, sometimes to a fault. You take charge but may ignore the feelings of others.",
  },
  Jordan: {
    name: "Jordan Baker",
    description:
      "You're smart, stylish, and self-reliant. You know how to work the system, but your detachment may keep people at a distance.",
  },
  Myrtle: {
    name: "Myrtle Wilson",
    description:
      "You're hungry for more in life — status, love, recognition. You’re determined, but your desires can sometimes lead you into dangerous territory.",
  },
};

export default function GatsbyQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({});
  const [finalCharacter, setFinalCharacter] = useState(null);

  const handleAnswer = (points) => {
    const updatedScores = { ...scores };
    for (let char in points) {
      updatedScores[char] = (updatedScores[char] || 0) + points[char];
    }
    setScores(updatedScores);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      const topCharacter = Object.entries(updatedScores).sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
      )[0][0];
      setFinalCharacter(topCharacter);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/60 min-h-screen flex flex-col items-center justify-center p-8">
        {!started ? (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              Which The Great Gatsby character are you?
            </h1>
            <button
              className="cursor-pointer px-5 py-2 text-white font-semibold rounded-full bg-gray-900 shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:bg-gray-800 transition duration-200"
              onClick={() => setStarted(true)}
            >
              Start
            </button>
          </div>
        ) : finalCharacter ? (
          <div className="text-center space-y-4 max-w-xl relative">
            <h2 className="text-3xl font-bold mb-4">
              🎭 You are {results[finalCharacter].name}!
            </h2>
            <p className="text-lg mb-8">
              {results[finalCharacter].description}
            </p>

            <Link
              to="/"
              className="inline-block px-6 py-3 bg-white/10 border border-white/30 rounded-4xl
                text-white font-semibold hover:bg-white/20 transition-colors
                shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
            >
              Home
            </Link>
          </div>
        ) : (
          /* Questions */
          <div className="w-full max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8">{`Question ${
              currentQ + 1
            }: ${questions[currentQ].text}`}</h2>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQ].options.map((opt, i) => (
                <button
                  key={i}
                  className="cursor-pointer rounded-xl p-6 text-lg font-semibold transition-all transform hover:scale-105 active:scale-95
                   bg-transparent backdrop-blur-sm border border-white/30
                   shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
                   hover:bg-white/10"
                  onClick={() => handleAnswer(opt.points)}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
