import { useState, useRef } from "react";
import {
  ArrowLeftIcon,
  MicrophoneIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SalesLog() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    setTranscript("");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) chunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        setLoading(true);

        // Prepare FormData with the audio blob
        const formData = new FormData();
        formData.append("audio", blob, "voice.webm");

        try {
          const res = await fetch("http://localhost:5000/speech-to-text", {
            method: "POST",
            body: formData,
          });
          const data = await res.json();
          setTranscript(data.transcript || "No transcript returned");
        } catch (error) {
          console.error(error);
          setTranscript("Error recognizing speech");
        } finally {
          setLoading(false);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Could not start recording:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center gap-3">
        <Link to="/landing">
          <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white font-bold text-lg">Sales Log 💎</h1>
          <p className="text-white text-xs opacity-90">Your Suki helper!</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Today's Sales Summary */}
        <div className="bg-white rounded-2xl p-4 border-2 border-green-200 shadow-sm">
          <div className="text-center">
            <h2 className="text-green-600 font-semibold text-sm mb-1">
              Today's Sales
            </h2>
            <div className="text-green-600 font-bold text-3xl">₱285</div>
            <p className="text-green-600 text-sm">3 transactions</p>
          </div>
        </div>

        {/* Voice Entry */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <MicrophoneIcon className="w-5 h-5 text-red-500" />
            <h3 className="text-red-500 font-bold text-lg">Voice Entry</h3>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Say: "Nabenta ko [product] ₱[amount]"
          </p>

          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`w-full font-semibold py-3 rounded-lg transition ${
              isRecording
                ? "bg-red-600 text-white"
                : "bg-[#E53E3E] text-white hover:bg-red-600"
            }`}
          >
            {isRecording ? "Stop Recording" : "Start Voice Recording"}
          </button>

          {/* Show loading & transcript */}
          <div className="mt-4 min-h-[2rem] text-center text-gray-700">
            {loading ? "Transcribing..." : transcript}
          </div>
        </div>

        {/* Manual Entry */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <PencilIcon className="w-5 h-5 text-red-500" />
            <h3 className="text-red-500 font-bold text-lg">Manual Entry</h3>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Product Name (Itlog, Kape, etc.)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <input
              type="text"
              placeholder="Amount (Php)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Today's Sales List */}
        <div>
          <h3 className="text-[#E53E3E] font-bold text-lg mb-4">
            Today's Sales
          </h3>
          <div className="space-y-2">
            {/* Sales Item 1 */}
            <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-800">Itlog</h4>
                <p className="text-xs text-gray-500">8:30AM</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-semibold">₱30</span>
                <TrashIcon className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-700 transition" />
              </div>
            </div>

            {/* Sales Item 2 */}
            <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
              <div>
                <h4 className="font-semibold text-gray-800">Kape</h4>
                <p className="text-xs text-gray-500">9:00AM</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-semibold">₱30</span>
                <TrashIcon className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-700 transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
