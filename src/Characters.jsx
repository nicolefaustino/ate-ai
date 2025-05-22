import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import { ChevronRight } from "lucide-react";

export default function Characters() {
  const { id } = useParams();
  const [selectedCharacter, setSelectedCharacter] = useState(id || "gatsby");

  useEffect(() => {
    if (id) {
      setSelectedCharacter(id);
    }
  }, [id]);

  const characters = [
    {
      id: "gatsby",
      name: "Jay Gatsby",
      shortName: "Gatsby",
      description:
        "A mysterious millionaire known for his lavish parties and unrelenting love for Daisy Buchanan. Gatsby is driven by ambition and the illusion of the American Dream.",
      image: "https://i.imgur.com/SmLQ4ck.png",
      relationships:
        "Gatsby's relationship with Daisy drives the plot. His idealization of her represents his broader idealization of wealth and status.",
      quote:
        "So we beat on, boats against the current, borne back ceaselessly into the past",
    },
    {
      id: "daisy",
      name: "Daisy Buchanan",
      shortName: "Daisy",
      description:
        "Beautiful and shallow, Daisy is Gatsby's long-lost love. She is married to Tom Buchanan but remains the object of Gatsby's obsession.",
      image: "https://i.imgur.com/WKM9iog.png",
      quote:
        "I hope she'll be a fool — that's the best thing a girl can be in this world, a beautiful little fool.",
    },
    {
      id: "nick",
      name: "Nick Carraway",
      shortName: "Nick",
      description:
        "The novel's narrator, Nick is Gatsby's neighbor and Daisy's cousin. He offers an outsider's perspective on the events of the story.",
      image: "https://i.imgur.com/GDuB53n.png",
      quote:
        "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.",
    },
    {
      id: "tom",
      name: "Tom Buchanan",
      shortName: "Tom",
      description:
        "Daisy's wealthy, arrogant, and aggressive husband. Tom represents old money and is deeply prejudiced and unfaithful.",
      image: "https://i.imgur.com/XzI2zbh.png",
      relationships:
        "Tom's relationships with Daisy and his mistress Myrtle reveal his sense of entitlement and disregard for others' feelings.",
      quote:
        "Civilization's going to pieces… It's up to us, the dominant race, to watch out or these other races will have control of things.",
    },
    {
      id: "jordan",
      name: "Jordan Baker",
      shortName: "Jordan",
      description:
        "A cynical and self-centered golfer who is Daisy's friend and Nick's brief love interest. She is dishonest and enigmatic.",
      image: "https://i.imgur.com/rmnWGLp.png",
      relationships:
        "Jordan's brief romance with Nick highlights the casual nature of relationships in their social circle. Her friendship with Daisy connects her to the novel's central conflicts.",
      quote: "I hate careless people. That's why I like you.",
    },
  ];

  const character =
    characters.find((char) => char.id === selectedCharacter) || characters[0];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-serif">
      <Header />

      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Custom scrollbar */
        .gatsby-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .gatsby-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        
        .gatsby-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(212, 175, 55, 0.4);
          border-radius: 3px;
        }
        
        .gatsby-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(212, 175, 55, 0.6);
        }
      `}</style>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Sidebar */}
        <div className="absolute top-0 left-0 h-full w-52 bg-black/80 border-r border-amber-900/30 z-10">
          {characters.map((char) => (
            <div
              key={char.id}
              className={`flex items-center p-3 cursor-pointer transition-all duration-300 hover:bg-amber-900/20 ${
                selectedCharacter === char.id
                  ? "bg-amber-900/30 border-l-4 border-amber-500"
                  : ""
              }`}
              onClick={() => setSelectedCharacter(char.id)}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-amber-500/60 shadow-lg">
                <img
                  src={char.image || "/placeholder.svg"}
                  alt={char.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-sm ${
                  selectedCharacter === char.id
                    ? "text-amber-400"
                    : "text-amber-100/80"
                }`}
              >
                {char.shortName}
              </span>
              {selectedCharacter === char.id && (
                <ChevronRight className="ml-auto h-4 w-4 text-amber-500" />
              )}
            </div>
          ))}

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        {/* Character Display */}
        <div className="flex-1 relative">
          <div className="w-full h-full">
            <img
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              className="w-full h-full object-cover object-center"
              style={{ animation: "fadeIn 1s ease-out" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-black/90"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>

          {/* Character Details */}
          <div className="absolute top-0 right-0 h-full w-2/5 flex items-center">
            <div className="h-5/6 overflow-y-auto pr-10 pl-6 py-8 gatsby-scrollbar">
              <div key={selectedCharacter} className="pl-6 slide-in-left">
                <div className="mb-2 text-amber-400/70 tracking-widest text-sm">
                  THE GREAT GATSBY
                </div>
                <h2 className="text-5xl font-bold text-amber-500 mb-8 tracking-wide">
                  {character.name}
                </h2>

                <div className="mb-10 relative">
                  <p className="text-amber-50 leading-relaxed mb-6 text-lg first-letter:text-3xl first-letter:font-bold first-letter:text-amber-400 first-letter:mr-1 first-letter:float-left">
                    {character.description}
                  </p>
                  <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/0 via-amber-500/50 to-amber-500/0"></div>
                </div>

                {character.relationships && (
                  <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-amber-500 mb-4 flex items-center">
                      <span className="inline-block w-8 h-px bg-amber-500 mr-3"></span>
                      Key Relationships
                    </h3>
                    <p className="text-amber-50/90 leading-relaxed">
                      {character.relationships}
                    </p>
                  </div>
                )}

                <div className="mt-10 pt-6 relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-700/50 to-transparent"></div>
                  <h3 className="text-2xl font-semibold text-amber-500 mb-5 flex items-center">
                    <span className="inline-block w-8 h-px bg-amber-500 mr-3"></span>
                    Notable Quote
                  </h3>
                  <blockquote className="text-amber-50/80 text-xl italic relative pl-6">
                    <span className="absolute left-0 top-0 text-4xl text-amber-500/40">
                      "
                    </span>
                    {character.quote}
                    <span className="text-4xl text-amber-500/40">"</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
