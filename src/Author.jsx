import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, ChevronDown } from "lucide-react"
import fitzgeraldImage from "./assets/fitzgerald.jpg"

export default function Author() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/XybNimc.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <header className="bg-black py-4 px-6 relative z-10">
        <div className="container mx-auto flex justify-center items-center relative">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">
            THE GREAT GATSBY
          </h1>

          <div className="absolute right-0">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white rounded-l-full px-4 py-1 focus:outline-none"
              />
              <button type="submit" className="bg-gray-800 rounded-r-full px-2 py-1">
                <Search className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </header>

      <nav className="bg-gray-900 text-white py-3 border-t border-b border-gray-800 relative z-10">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <Link to="/quizzes" className="hover:text-yellow-400 transition-colors">
                Quizzes & Puzzles
              </Link>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link to="/character-quiz" className="block py-1 px-2 hover:bg-gray-800">
                Character Quiz
              </Link>
              <Link to="/timeline-challenge" className="block py-1 px-2 hover:bg-gray-800">
                Timeline Challenge
              </Link>
              <Link to="/roaring-20s-trivia" className="block py-1 px-2 hover:bg-gray-800">
                Roaring 20s Trivia
              </Link>
            </div>
          </div>

          <Link to="/archive" className="hover:text-yellow-400 transition-colors">
            F. Scott Fitzgerald Archive
          </Link>

          <Link to="/timeline" className="hover:text-yellow-400 transition-colors">
            Timeline
          </Link>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <span>Characters</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link to="/characters/jay-gatsby" className="block py-1 px-2 hover:bg-gray-800">
                Jay Gatsby
              </Link>
              <Link to="/characters/daisy-buchanan" className="block py-1 px-2 hover:bg-gray-800">
                Daisy Buchanan
              </Link>
              <Link to="/characters/nick-carraway" className="block py-1 px-2 hover:bg-gray-800">
                Nick Carraway
              </Link>
              <Link to="/characters/tom-buchanan" className="block py-1 px-2 hover:bg-gray-800">
                Tom Buchanan
              </Link>
              <Link to="/characters/jordan-baker" className="block py-1 px-2 hover:bg-gray-800">
                Jordan Baker
              </Link>
            </div>
          </div>

          <Link to="/history" className="hover:text-yellow-400 transition-colors">
            History
          </Link>

          <Link to="/author" className="hover:text-yellow-400 transition-colors">
            About the Author
          </Link>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-2xl">
            <div>
              <h2 className="text-5xl font-medium text-amber-300 mb-1">F. Scott Fitzgerald</h2>
              <p className="text-2xl text-amber-300 leading-relaxed">
                American Novelist,
                <br />
                Short Story Writer and Essayist
              </p>
            </div>

            <p className="text-lg font-serif">
              Francis Scott Key Fitzgerald (1896–1940) was an American novelist, essayist, and short story writer,
              widely regarded as one of the greatest American writers of the 20th century. He is best known for his
              novel <em>The Great Gatsby</em>, a masterpiece of the Jazz Age.
            </p>

            <p className="text-lg font-serif">
              In his early years, Fitzgerald attended Princeton University but left before graduating to join the army
              during World War I. His literary career began with the publication of <em>This Side of Paradise</em> in
              1920, which brought him immediate fame and success.
            </p>

            <p className="text-lg font-serif">
              Fitzgerald's tumultuous marriage to Zelda Sayre and their extravagant lifestyle came to symbolize the
              flamboyance and excess of the 1920s. Despite his early success, his later years were marked by financial
              difficulties, declining health, and struggles with alcoholism.
            </p>

            <p className="text-lg font-serif">
              Fitzgerald was recognized for his exceptional contribution to American literature, with{" "}
              <em>The Great Gatsby</em> now considered a cornerstone of American fiction and required reading in many
              educational institutions.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={fitzgeraldImage || "/placeholder.svg"}
              alt="F. Scott Fitzgerald"
              className="w-full max-w-lg h-auto rounded-t-full rounded-b-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}