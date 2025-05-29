export default function SariSariApp() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Banner with bunting */}
      <div className="relative w-full">
        <img
          src="https://i.imgur.com/vnABtBF.png"
          alt="Colorful bunting banner"
          className="w-full h-auto"
          crossOrigin="anonymous"
        />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        {/* App title and avatar */}
        <div className="flex items-center gap-3 mb-12">
          <h1 className="text-4xl font-bold text-white text-shadow-lg">Ate Ai</h1>
          <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center">
            <span className="text-2xl">👩🏻</span>
          </div>
        </div>

        {/* Get started button */}
        <button className="bg-[#E53E3E] hover:bg-[#C53030] text-white font-semibold py-4 px-12 rounded-full text-lg shadow-lg transition-colors">
          {"Simulan na'tin!"}
        </button>
      </div>

      {/* Store illustration at bottom */}
      <div className="w-full flex justify-center pb-8">
        <img
          src="https://i.imgur.com/xUySM7a.png"
          alt="Sari Sari Store illustration"
          className="w-full max-w-sm h-auto"
          crossOrigin="anonymous"
        />
      </div>
    </div>
  )
}
