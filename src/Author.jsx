import { useState } from "react";
import Header from "./Header"; 

export default function Author() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
       <Header />
 {/*animation*/}
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
    <div className="bg-black text-gray-300 px-6 py-12 md:px-12 lg:px-24 xl:px-48 slide-in-left">
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