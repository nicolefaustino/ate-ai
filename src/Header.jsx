import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
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
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white py-3 border-t border-b border-gray-800 z-20 relative">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <span>About</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link
                to="/summary"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Summary
              </Link>
              <Link
                to="/characters"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Characters
              </Link>
            </div>
          </div>

          <Link
            to="/timeline"
            className="hover:text-yellow-400 transition-colors"
          >
            Timeline
          </Link>

          <Link
            to="/author"
            className="hover:text-yellow-400 transition-colors"
          >
            Author
          </Link>

          <Link
            to="/archive"
            className="hover:text-yellow-400 transition-colors"
          >
            F. Scott Fitzgerald Archive
          </Link>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <span>Quizzes & Puzzles</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link
                to="/character-quiz"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Which Character Are You?
              </Link>
              <Link
                to="/plotquiz"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Plot Quiz
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}