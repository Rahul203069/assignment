export default function DabangPro() {
  return (

      <div className="relative w-[238px] h-[261px] bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 rounded-3xl flex flex-col items-center justify-between p-8 overflow-hidden">
        {/* Background decoration circles */}
        <div className="absolute   top-[-120px]  right-[-80px] w-[242px] h-[242px] bg-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-4 w-12 h-12 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/2 -right-6 w-20 h-20 bg-white/5 rounded-full"></div>
        
        {/* Logo container */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-[145px] bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path 
                d="M8 24C8 24 8 16 16 16C24 16 24 8 24 8" 
                stroke="#6366f1" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
              <circle cx="24" cy="8" r="2" fill="#6366f1"/>
              <circle cx="8" cy="24" r="2" fill="#6366f1"/>
            </svg>
          </div>
          
          <h1 className="text-white text-2xl font-semibold mb-3">
            Dabang Pro
          </h1>
          
          <p className="text-white/90 text-center text-base leading-relaxed max-w-48">
            Get access to all features on tetumbas
          </p>
        </div>
        
        {/* Get Pro Button */}
        <button className="w-full bg-white text-indigo-600 font-medium text-base py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 shadow-lg">
          Get Pro
        </button>

    </div>
  );
}