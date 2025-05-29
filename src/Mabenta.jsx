import { useState } from "react";
import {
  ArrowLeftIcon,
  ShoppingCartIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function AnoAngMabenta() {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleGetRecommendations = async () => {
    setLoading(true);
    setRecommendations([]);

    try {
      const requestBody = {
        weather: "Umuulan", 
        timeOfDay: "Morning Rush",
        location: "UST Sampaloc, Manila",
      };

      console.log("Sending request with body:", requestBody);

      const res = await fetch("http://localhost:5000/api/recommend-trends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      if (data.recommendations) {
        setRecommendations(data.recommendations);
      } else if (data.message) {
        setRecommendations([data.message]);
      } else {
        setRecommendations(["Walang nakuha na rekomendasyon."]);
      }
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setRecommendations([
        `May error sa pagkuha ng suhestiyon: ${err.message}`,
      ]);
    } finally {
      setLoading(false);
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
          <h1 className="text-white font-bold text-lg flex items-center gap-1">
            Ano ang Mabenta? <ShoppingCartIcon className="w-5 h-5 text-white" />
          </h1>
          <p className="text-white text-xs opacity-90">Your Suki helper!</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Current Context Card */}
        <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-blue-600 text-lg">🔵</span>
            <h3 className="text-blue-600 font-semibold">Current Context</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-medium">Umuulan</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-medium">Morning Rush</span>
            </div>
          </div>
        </div>

        {/* AI Recommendations Card */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-[#E53E3E] font-medium text-center mb-4">
            Ano ang mabenta ngayon?
          </h2>

          <button
            onClick={handleGetRecommendations}
            className="w-full bg-[#E53E3E] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
            disabled={loading}
          >
            {loading ? "Nag-iisip si Ate AI..." : "Get AI Recommendations"}
          </button>

          {/* Display Recommendations */}
          <div className="mt-4 space-y-2">
            {recommendations.map((item, index) => (
              <div
                key={index}
                className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 text-sm text-[#E53E3E]"
              >
                🛒 {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
