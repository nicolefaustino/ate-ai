import { useState } from "react";
import Header from "./Header"; 

export default function GatsbyLanding() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="flex flex-col min-h-screen">
       <Header />

      {/* Main content */}
      <main className="flex-grow relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://i.imgur.com/TGcNthy.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Featured content */}
        <div className="container mx-auto px-4 py-12 relative">
          <div className="max-w-4xl text-white text-left pl-8">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white bg-clip-text">
              THE ROARING <br /> TWENTIES
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl">
              Step into the glittering world of wealth, ambition, and the
              American Dream. Explore the iconic novel that defined an era.
            </p>
            <button className="cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-3 rounded-4xl font-medium hover:from-amber-600 hover:to-yellow-700 transition-all text-sm">
              Read More
            </button>
          </div>

          {/* Featured sections */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                The Green Light
              </h3>
              <p className="text-gray-300 mb-4">
                Discover the symbolism behind Gatsby's distant green light and
                what it represents in the novel.
              </p>
              <a href="#" className="text-amber-400 hover:text-amber-300">
                Read more →
              </a>
            </div>

            <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                Gatsby's Parties
              </h3>
              <p className="text-gray-300 mb-4">
                Explore the lavish celebrations that made Gatsby famous and
                their significance to the story.
              </p>
              <a href="#" className="text-amber-400 hover:text-amber-300">
                Read more →
              </a>
            </div>

            <div className="bg-gray-900 bg-opacity-80 p-6 rounded-lg border border-amber-500/30 hover:border-amber-500 transition-all">
              <h3 className="text-xl font-bold mb-3 text-amber-400">
                The Valley of Ashes
              </h3>
              <p className="text-gray-300 mb-4">
                Understand the stark contrast between wealth and poverty in this
                symbolic setting.
              </p>
              <a href="#" className="text-amber-400 hover:text-amber-300">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} The Great Gatsby | A F. Scott
            Fitzgerald Experience
          </p>
        </div>
      </footer>
    </div>
  );
}
