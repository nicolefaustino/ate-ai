import { ArrowLeftIcon, ChartBarIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

export default function TrackKita() {
  const weeklyData = [
    { day: "Mon", amount: 220, percentage: 44 },
    { day: "Tue", amount: 180, percentage: 36 },
    { day: "Wed", amount: 250, percentage: 50 },
    { day: "Thu", amount: 190, percentage: 38 },
    { day: "Fri", amount: 290, percentage: 58 },
    { day: "Sat", amount: 245, percentage: 49 },
    { day: "Sun", amount: 285, percentage: 57 },
  ]

  const topProducts = [
    { rank: "#1", name: "Instant Noodles", sold: 45, amount: 540 },
    { rank: "#2", name: "Soft Drinks", sold: 32, amount: 480 },
    { rank: "#3", name: "Bread", sold: 28, amount: 280 },
  ]

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center gap-3">
        <Link to="/landing">
        <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white font-bold text-lg flex items-center gap-1">
            Track your kita! <ChartBarIcon className="w-5 h-5 text-white" />
          </h1>
          <p className="text-white text-xs opacity-90">Your Suki helper!</p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          {/* Today Card */}
          <div className="bg-white rounded-2xl p-4 border-2 border-green-200 shadow-sm">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-green-600 text-xs">📅</span>
                <span className="text-green-600 font-semibold text-sm">Today</span>
              </div>
              <div className="text-green-600 font-bold text-2xl">₱285</div>
              <div className="flex items-center justify-center gap-1 text-green-600 text-xs">
                <span>📈</span>
                <span>+18.8%</span>
              </div>
            </div>
          </div>

          {/* This Week Card */}
          <div className="bg-white rounded-2xl p-4 border-2 border-blue-200 shadow-sm">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-blue-600 text-xs">📅</span>
                <span className="text-blue-600 font-semibold text-sm">This week</span>
              </div>
              <div className="text-blue-600 font-bold text-2xl">₱285</div>
              <div className="flex items-center justify-center gap-1 text-blue-600 text-xs">
                <span>📈</span>
                <span>+18.8%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Sales Trend */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-[#E53E3E] font-bold text-lg mb-4">Weekly Sales Trend</h3>
          <div className="space-y-3">
            {weeklyData.map((item, index) => (
              <div key={item.day} className="flex items-center gap-3">
                <span className="text-gray-600 text-sm w-8">{item.day}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.day === "Fri" ? "bg-[#E53E3E]" : "bg-orange-400"}`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <span className="text-[#E53E3E] font-semibold text-sm w-12">₱{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products Today */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-[#E53E3E] font-bold text-lg mb-4">Top Products Today</h3>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-gray-500 font-semibold text-sm w-6">{product.rank}</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">{product.name}</h4>
                    <p className="text-xs text-gray-500">{product.sold} sold</p>
                  </div>
                </div>
                <span className="text-purple-600 font-bold">₱{product.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
