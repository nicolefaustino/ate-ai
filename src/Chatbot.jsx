import {
  ArrowLeftIcon,
  PlusIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Chatbot() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8E1]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center">
        <Link to="/" className="mr-3">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <div className="flex items-center gap-2">
          <div>
            <h1 className="text-white font-bold text-lg">Ate Ai</h1>
            <p className="text-white text-xs opacity-90">Your Suki helper!</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center ml-1">
            <span className="text-xl">👩🏻</span>
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-4 flex flex-col">
        {/* Quick questions */}
        <div className="mb-4">
          <p className="text-gray-700 font-medium mb-2">Quick Questions:</p>
          <div className="space-y-2">
            <div className="border border-orange-300 rounded-full px-4 py-2 bg-white">
              <p className="text-gray-700">
                Paano ko ma-increase ang sales ko?
              </p>
            </div>
            <div className="border border-orange-300 rounded-full px-4 py-2 bg-white">
              <p className="text-gray-700">Ano-ano ang mga mabenta ngayon?</p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="flex-1">
          {/* AI message */}
          <div className="flex mb-4">
            <div className="w-8 h-8 rounded-full bg-[#8B4513] flex items-center justify-center mr-2 flex-shrink-0">
              <span className="text-lg">👩🏻</span>
            </div>
            <div className="bg-[#D6F87A] rounded-2xl rounded-tl-none p-3 max-w-[80%]">
              <p className="text-gray-800 text-sm">
                Kumusta! I'm your AI business mentor. Tutlong mo lang kung may
                kailangan kang negosyo tips!
              </p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="text-right text-xs text-gray-500 mb-4">
          <p>32, C Jeeva street sivagiri</p>
          <p>sivagiri (TP) erode - 638109</p>
        </div>
      </div>

      {/* Input area */}
      <div className="bg-white p-3 flex items-center gap-2">
        <button className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
          <PlusIcon className="w-6 h-6 text-white" />
        </button>
        <div className="flex-1 h-10"></div>
        <button className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
          <PaperAirplaneIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
