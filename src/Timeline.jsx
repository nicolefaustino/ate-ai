import { useState } from "react"
import Header from "./Header"

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null)
  const [hoveredEvent, setHoveredEvent] = useState(null)

  const displayEvent = activeEvent || hoveredEvent

  // Timeline data
  const timelineEvents = [
    {
      year: 1851,
      title: "Carraway Family Business Begins",
      description: "Nick Carraway's grandfather's brother starts the hardware business that his family owns.",
      quote:
        "the actual founder of my line was my grandfather's brother who came here in fifty-one, sent a substitute to the Civil War and started the wholesale hardware business that my father carries on today",
      citation: "(1.5)",
    },
    {
      year: 1857,
      title: "Dan Cody is Born",
      description: "Dan Cody, who will later become Gatsby's mentor, is born.",
      quote: "",
      citation: "",
    },
    {
      year: 1890,
      title: "James Gatz is Born",
      description: "James Gatz (later known as Jay Gatsby) is born in North Dakota to Henry C. Gatz.",
      quote:
        "His parents were shiftless and unsuccessful farm people—his imagination had never really accepted them as his parents at all.",
      citation: "(6.7)",
    },
    {
      year: 1892,
      title: "Nick Carraway and Tom Buchanan are Born",
      description:
        "Nick Carraway is born in a Midwestern city. Tom Buchanan is born to a very prominent family in Chicago.",
      quote:
        "My family have been prominent, well-to-do people in this middle-western city for three generations. The Carraways are something of a clan",
      citation: "(1.5)",
    },
    {
      year: 1899,
      title: "Daisy Fay is Born",
      description: "Daisy Fay is born in Louisville, Kentucky.",
      quote: "Our white girlhood was passed together there. Our beautiful white...",
      citation: "(1.140)",
    },
    {
      year: 1901,
      title: "Jordan Baker is Born",
      description: "Jordan Baker is born in Louisville, Kentucky.",
      quote:
        "The largest of the banners and the largest of the lawns belonged to Daisy Fay's house. She was just eighteen, two years older than me, and by far the most popular of all the young girls in Louisville.",
      citation: "(4.130)",
    },
    {
      year: 1907,
      title: "James Gatz Becomes Jay Gatsby",
      description:
        "James Gatz, 17 years old, meets Dan Cody in Little Girl Bay on Lake Superior and changes his name to Jay Gatsby.",
      quote:
        "James Gatz—that was really, or at least legally, his name. He had changed it at the age of seventeen and at the specific moment that witnessed the beginning of his career—when he saw Dan Cody's yacht drop anchor over the most insidious flat on Lake Superior...",
      citation: "(6.6-6.7)",
    },
    {
      year: 1912,
      title: "Dan Cody Dies",
      description:
        "Dan Cody dies in Boston. He leaves $25,000 to Gatsby, but Ella Kaye uses legal means to take away this inheritance.",
      quote: "",
      citation: "",
    },
    {
      year: 1917,
      title: "Gatsby Meets Daisy",
      description:
        "Gatsby is stationed at Camp Taylor in Louisville, where he meets Daisy Fay. They are together for a month.",
      quote: "He knew that Daisy was extraordinary... He felt married to her, that was all.",
      citation: "(8.13)",
    },
    {
      year: 1919,
      title: "Daisy Marries Tom",
      description: "Despite some reluctance, Daisy marries Tom Buchanan.",
      quote:
        "\"Tell 'em all Daisy's change' her mine. Say 'Daisy's change' her mine!'\" She began to cry—she cried and cried...Next day at five o'clock she married Tom Buchanan without so much as a shiver",
      citation: "(4.140-142)",
    },
    {
      year: 1922,
      title: "The Summer of Gatsby",
      description:
        "The main events of the novel take place, including Gatsby and Daisy's reunion, their affair, and Gatsby's death.",
      quote:
        "Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter—tomorrow we will run faster, stretch out our arms farther....",
      citation: "(9.149)",
    },
    {
      year: 1924,
      title: "Nick Writes The Great Gatsby",
      description:
        "Nick writes the story about Gatsby and that fateful summer - this story is the novel that we are reading.",
      quote:
        "When I came back from the East last autumn I felt that I wanted the world to be in uniform and at a sort of moral attention forever; I wanted no more riotous excursions with privileged glimpses into the human heart.",
      citation: "(9.1-4)",
    },
  ]

  const handleEventClick = (index) => {
    if (activeEvent === index) {
      setActiveEvent(null)
    } else {
      setActiveEvent(index)
    }
  }

  const calculatePosition = (year) => {
    const minYear = 1850
    const maxYear = 1925
    const range = maxYear - minYear
    return ((year - minYear) / range) * 100
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `url(https://i.imgur.com/TGcNthy.png)`,
      }}
    >
      <Header />

      {/* Main content*/}
      <div className="bg-black/70 min-h-screen pt-8">
        <h1 className="text-4xl font-bold mb-8 text-amber-300 font-serif tracking-wide text-center mt-8">
          The Great Gatsby Timeline
        </h1>

        {/* Timeline Container */}
        <div className="w-full max-w-6xl mx-auto relative px-4">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-500/70"></div>

          {/* Timeline Events */}
          <div className="relative pb-32">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative mb-16"
                style={{
                  marginTop: index === 0 ? "40px" : "0",
                  marginLeft: index % 2 === 0 ? "0" : "50%",
                  width: "50%",
                  paddingLeft: index % 2 === 0 ? "0" : "20px",
                  paddingRight: index % 2 === 0 ? "20px" : "0",
                  textAlign: index % 2 === 0 ? "right" : "left",
                }}
              >
                {/* Year Marker */}
                <div
                  className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full cursor-pointer z-10
                    ${activeEvent === index ? "bg-amber-300 ring-4 ring-amber-500" : "bg-amber-500 hover:bg-amber-300"}`}
                  style={{ marginLeft: index % 2 === 0 ? "0" : "0" }}
                  onClick={() => handleEventClick(index)}
                  onMouseEnter={() => setHoveredEvent(index)}
                  onMouseLeave={() => setHoveredEvent(null)}
                ></div>

                {/* Year Label */}
                <div
                  className={`absolute top-0 ${index % 2 === 0 ? "right-0 pr-10" : "left-0 pl-10"} font-bold text-amber-300`}
                  style={{ marginTop: "-10px" }}
                >
                  {event.year}
                </div>

                {/* Event Card */}
                <div
                  className={`${
                    activeEvent === index || hoveredEvent === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  } transition-all duration-300 ease-in-out
                  bg-gray-900/90 backdrop-blur-sm p-4 rounded-lg border border-amber-500/50 shadow-lg
                  ${index % 2 === 0 ? "mr-10" : "ml-10"}`}
                >
                  <h3 className="text-xl font-bold text-amber-300 mb-2">{event.title}</h3>
                  <p className="text-gray-200 mb-3">{event.description}</p>
                  {event.quote && (
                    <div className="border-l-4 border-amber-500 pl-4 italic text-gray-300 mt-2">
                      "{event.quote}" <span className="text-amber-400 not-italic">{event.citation}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel*/}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-amber-500/50 p-6 transform transition-transform duration-500 ease-in-out ${displayEvent !== null ? "translate-y-0" : "translate-y-full"}`}
        >
          {displayEvent !== null && (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-amber-300 text-2xl font-bold">{timelineEvents[displayEvent].year}</span>
                  <h2 className="text-3xl font-bold text-white">{timelineEvents[displayEvent].title}</h2>
                </div>
                {activeEvent !== null && (
                  <button onClick={() => setActiveEvent(null)} className="text-gray-400 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <p className="text-gray-200 text-lg mb-4">{timelineEvents[displayEvent].description}</p>
              {timelineEvents[displayEvent].quote && (
                <div className="bg-gray-800/70 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="italic text-gray-300 text-lg">"{timelineEvents[displayEvent].quote}"</p>
                  <p className="text-amber-400 text-right mt-2">{timelineEvents[displayEvent].citation}</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="fixed top-40 right-8 bg-gray-900/80 p-4 rounded-lg border border-amber-500/30 max-w-xs">
          <h3 className="text-amber-300 font-bold mb-2">How to Use</h3>
          <p className="text-gray-300 text-sm">
            Hover over timeline points to preview events. Click a point to lock the view and see full details.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Timeline
