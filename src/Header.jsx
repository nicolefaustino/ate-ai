import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 py-4 px-6 relative z-10">
        <div className="container mx-auto flex justify-center items-center relative">
          <Link to="/" className="flex justify-center">
            <img
              src="https://i.imgur.com/P3MUhr9.png"
              alt="THE GREAT GATSBY"
              className="h-16 object-contain"
            />
          </Link>

          <div className="absolute right-0">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-800 text-white rounded-l-full px-4 py-1 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gray-800 rounded-r-full px-2 py-1"
              >
                <Search className="h-5 w-5 text-white" />
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-3 border-t border-b border-gray-800 z-20 relative">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <Link
                to="/quizzes"
                className="hover:text-yellow-400 transition-colors"
              >
                Quizzes & Puzzles
              </Link>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link to="/character-quiz" className="block py-1 px-2 hover:bg-gray-800">
                Which Character Are You?
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
              <Link to="/characters/gatsby" className="block py-1 px-2 hover:bg-gray-800">
                Jay Gatsby
              </Link>
              <Link to="/characters/daisy" className="block py-1 px-2 hover:bg-gray-800">
                Daisy Buchanan
              </Link>
              <Link to="/characters/nick" className="block py-1 px-2 hover:bg-gray-800">
                Nick Carraway
              </Link>
              <Link to="/characters/tom" className="block py-1 px-2 hover:bg-gray-800">
                Tom Buchanan
              </Link>
              <Link to="/characters/jordan" className="block py-1 px-2 hover:bg-gray-800">
                Jordan Baker
              </Link>
            </div>
          </div>

          <Link to="/author" className="hover:text-yellow-400 transition-colors">
            About the Author
          </Link>
        </div>
      </nav>
    </div>
  );
}
