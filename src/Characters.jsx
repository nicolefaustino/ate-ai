import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header"; 

export default function Characters() {
  const { id } = useParams()
  const [selectedCharacter, setSelectedCharacter] = useState(id || "gatsby")

  useEffect(() => {
    if (id) {
      setSelectedCharacter(id)
    }
  }, [id])

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
      quote: "So we beat on, boats against the current, borne back ceaselessly into the past",
    },
    {
      id: "daisy",
      name: "Daisy Buchanan",
      shortName: "Daisy",
      description:
        "Beautiful and shallow, Daisy is Gatsby's long-lost love. She is married to Tom Buchanan but remains the object of Gatsby's obsession.",
      image: "https://i.imgur.com/XzI2zbh.png",
      quote: "I hope she'll be a fool — that's the best thing a girl can be in this world, a beautiful little fool.",
    },
    {
      id: "nick",
      name: "Nick Carraway",
      shortName: "Nick",
      description:
        "The novel's narrator, Nick is Gatsby's neighbor and Daisy's cousin. He offers an outsider's perspective on the events of the story.",
      image: "https://i.imgur.com/XzI2zbh.png",
      quote: "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.",
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
      image: "https://i.imgur.com/3sN48sw.png",
       relationships:
        "Jordan's brief romance with Nick highlights the casual nature of relationships in their social circle. Her friendship with Daisy connects her to the novel's central conflicts.",
      quote: "I hate careless people. That's why I like you.",
    },
  ]

  const character = characters.find((char) => char.id === selectedCharacter) || characters[0]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header/>

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
      `}</style>

     {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute top-0 left-0 h-full w-48 bg-black/80 border-r border-gray-800 z-10 ">
          {characters.map((char) => (
            <div
              key={char.id}
              className= {`flex items-center p-3 cursor-pointer hover:bg-gray-800 ${selectedCharacter === char.id ? "bg-gray-800" : ""} `}
              onClick={() => setSelectedCharacter(char.id)}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src={char.image || "/placeholder.svg"} alt={char.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-sm">{char.shortName}</span>
            </div>
          ))}
        </div>

         {/* Character Display */}
        <div className="flex-1 relative">
          <div className="w-full h-full">
            <img
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/80"></div>
          </div>

          {/* Character Details */}
          <div className="absolute top-0 right-0 h-full w-2/5 flex items-center">
            <div className="h-5/6 overflow-y-auto pr-8 pl-4 py-4 scrollbar-thin scrollbar-thumb-yellow-500/30 scrollbar-track-transparent">
                <div key={selectedCharacter} className="pl-6 slide-in-left">
                <h2 className="text-4xl font-bold text-yellow-500 mb-6">{character.name}</h2>
                <p className="text-gray-200 leading-relaxed mb-6 text-lg">{character.description}</p>
                <p className="text-gray-200 leading-relaxed mb-8">{character.details}</p>
                <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Key Relationships</h3>
                <p className="text-gray-200 leading-relaxed">{character.relationships}</p>

                <div className="mt-8 border-t border-gray-700 pt-4">
                  <h3 className="text-2xl font-semibold text-yellow-500 mb-4">Quote</h3>
                  <blockquote className="text-gray-300 text-lg italic">"{character.quote}"</blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}