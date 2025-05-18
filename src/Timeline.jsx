import React from "react";

const Timeline = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white font-serif relative">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage:
            "url('https://i.imgur.com/4TrQHKD.jpeg')", // <-- Replace with your actual image path
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">Werewolves</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">By J.K. Rowling</h2>
        <p className="mt-6 text-lg md:text-xl">
          Originally published on{" "}
          <span className="italic text-white">Pottermore</span> on Aug 10th 2015
        </p>
      </div>

      {/* Body text */}
      <div className="relative z-10 px-6 md:px-20 py-10 max-w-5xl mx-auto">
        <p className="text-white text-lg leading-relaxed">
          <span className="text-indigo-500 text-5xl font-bold float-left leading-none mr-2">T</span>
          here are werewolves worldwide and they have traditionally been pariahs in the wizarding
          communities from which they often...
        </p>
      </div>

      {/* Share icon (static mockup) */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 text-sm">
        <span>SHARE</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.03-.47-.09-.7l7.02-4.11a2.996 2.996 0 10-.91-1.64L8.1 9.76A2.996 2.996 0 106 12c0 .24.03.47.09.7l7.11 4.14c.5.45 1.15.74 1.88.74 1.66 0 3-1.34 3-3s-1.34-3-3-3z" />
        </svg>
      </div>
    </div>
  );
};

export default Timeline;
