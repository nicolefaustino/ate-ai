import { ArrowLeftIcon, CameraIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

export default function ScanInventory() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center gap-3">
        <Link to="/landing">
        <ArrowLeftIcon className="w-6 h-6 text-white" />
        </Link>
        <div>
          <h1 className="text-white font-bold text-lg flex items-center gap-1">
            Scan Inventory <CameraIcon className="w-5 h-5 text-white" />
          </h1>
          <p className="text-white text-xs opacity-90">Your Suki helper!</p>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Scan Card */}
        <div className="bg-[#FFF5E6] rounded-2xl p-4 shadow-sm border border-[#FFE0B2]">
          <h2 className="text-[#E53E3E] font-medium text-center mb-4">I-scan and iyong mga tinda!</h2>

          {/* Camera Preview Area */}
          <div className="bg-[#FFECE8] rounded-lg h-48 flex items-center justify-center mb-4">
            <CameraIcon className="w-16 h-16 text-[#E53E3E]" />
          </div>

          {/* Camera Button */}
          <button className="w-full bg-[#E53E3E] text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition">
            Open Camera
          </button>
        </div>
      </div>
    </div>
  )
}
