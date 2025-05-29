import {
  ArrowRightIcon,
  Bars3Icon,
  ShareIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  QrCodeIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline"

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <div className="bg-[#E53E3E] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bars3Icon className="w-6 h-6 text-white" />
          <div>
            <h1 className="text-white font-bold text-lg">Ate Ai</h1>
            <p className="text-white text-xs opacity-90">Your Suki helper!</p>
          </div>
        </div>
        <ShareIcon className="w-6 h-6 text-white" />
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center">
            <span className="text-2xl">👩🏻</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-800">AI para sa</h2>
            <h2 className="font-semibold text-gray-800">Tindahan ng Masa</h2>
          </div>
        </div>

        {/* Features Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 text-lg">⭐</span>
            <h3 className="text-orange-500 font-bold text-lg">Features</h3>
          </div>

          <div className="space-y-3">
            {/* Track your Kita */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ChartBarIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Track your Kita</h4>
                  <p className="text-xs text-gray-500">Negosyo tips ni Ate Ai</p>
                  <p className="text-xs text-gray-500">Your smart business mentor</p>
                </div>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            </div>

            {/* Ate Ai Chatbot */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Ate Ai Chatbot</h4>
                  <p className="text-xs text-gray-500">Negosyo tips ni Ate Ai</p>
                  <p className="text-xs text-gray-500">Your smart business mentor</p>
                </div>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            </div>

            {/* Scan Inventory */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <QrCodeIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Scan Inventory</h4>
                  <p className="text-xs text-gray-500">Negosyo tips ni Ate Ai</p>
                  <p className="text-xs text-gray-500">Your smart business mentor</p>
                </div>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            </div>

            {/* Sales Log */}
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MicrophoneIcon className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sales Log</h4>
                  <p className="text-xs text-gray-500">Negosyo tips ni Ate Ai</p>
                  <p className="text-xs text-gray-500">Your smart business mentor</p>
                </div>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Store illustration at bottom */}
      <div className="mt-auto pt-6">
        <div className="max-w-sm w-full">
          <img src="https://i.imgur.com/xUySM7a.png" alt="Sari Sari Store illustration" className="w-full h-auto" crossOrigin="anonymous" />
        </div>
      </div>
    </div>
  )
}
