import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import fitzgeraldImage from "./assets/fitzgerald.jpg";

export default function Author() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
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
              <Link
                to="/character-quiz"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Which Character Are You?
              </Link>
              <Link
                to="/timeline-challenge"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Timeline Challenge
              </Link>
              <Link
                to="/roaring-20s-trivia"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Roaring 20s Trivia
              </Link>
            </div>
          </div>

          <Link
            to="/archive"
            className="hover:text-yellow-400 transition-colors"
          >
            F. Scott Fitzgerald Archive
          </Link>

          <Link
            to="/timeline"
            className="hover:text-yellow-400 transition-colors"
          >
            Timeline
          </Link>

          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-400 transition-colors">
              <span>Characters</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute hidden group-hover:block bg-gray-900 p-2 min-w-40 z-10">
              <Link
                to="/characters/jay-gatsby"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Jay Gatsby
              </Link>
              <Link
                to="/characters/daisy-buchanan"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Daisy Buchanan
              </Link>
              <Link
                to="/characters/nick-carraway"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Nick Carraway
              </Link>
              <Link
                to="/characters/tom-buchanan"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Tom Buchanan
              </Link>
              <Link
                to="/characters/jordan-baker"
                className="block py-1 px-2 hover:bg-gray-800"
              >
                Jordan Baker
              </Link>
            </div>
          </div>

          <Link
            to="/author"
            className="hover:text-yellow-400 transition-colors"
          >
            About the Author
          </Link>
        </div>
      </nav>

      {/* Main content */}
      {/* Hero section with overlay */}
      <div className="relative w-full h-[50vh] flex items-end justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://i.imgur.com/wAq5yHo.jpeg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10"></div>

        <div className="relative z-20 mb-12 px-4">
          <h1 className="text-6xl font-bold text-white drop-shadow-md">
            F. Scott Fitzgerald
          </h1>
          <p className="text-2xl mt-4 text-white font-semibold drop-shadow-md">
            American novelist and essayist
          </p>
          <p className="text-md mt-2 text-gray-300">1896 - 1940</p>
        </div>
      </div>

      {/* Content section*/}
      <div className="bg-black text-gray-300 px-6 py-12 md:px-12 lg:px-24 xl:px-48">
        <div className="max-w-3xl mx-auto text-lg leading-relaxed">
          <p className="mb-6">
            Francis Scott Key Fitzgerald (1896–1940) was an American novelist,
            essayist, and short story writer, widely regarded as one of the
            greatest American writers of the 20th century. He is best known for
            his novel <em>The Great Gatsby</em>, a masterpiece of the Jazz Age.
          </p>
          <p className="mb-6">
            In his early years, Fitzgerald attended Princeton University but
            left before graduating to join the army during World War I. His
            literary career began with the publication of{" "}
            <em>This Side of Paradise</em> in 1920, which brought him immediate
            fame and success.
          </p>
          <p className="mb-6">
            Fitzgerald's tumultuous marriage to Zelda Sayre and their
            extravagant lifestyle came to symbolize the flamboyance and excess
            of the 1920s. Despite his early success, his later years were marked
            by financial difficulties, declining health, and struggles with
            alcoholism.
          </p>
          <p>
            Fitzgerald was recognized for his exceptional contribution to
            American literature, with <em>The Great Gatsby</em> now considered a
            cornerstone of American fiction and required reading in many
            educational institutions.
          </p>
        </div>
      </div>
    </div>
  );
}
