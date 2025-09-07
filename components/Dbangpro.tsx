export default function DabangPro() {
  return (

      <div  style={{backgroundColor:'#5D5FEF',borderRadius:'20px'}} className="relative w-[238px] h-[261px]   flex flex-col items-center justify-between p-8 overflow-hidden">
        {/* Background decoration circles */}
        <div className="absolute   top-[-140px]  right-[-75px] w-[242px] h-[242px] bg-white/10 rounded-full"></div>
        <div className="absolute bottom-[-200px] left-[-160px]  w-[306px] h-[303px]  bg-white/10 rounded-full"></div>
      
        
        {/* Logo container */}
        <div className="flex flex-col items-center mt-0">
          <div className="size-[48px] bg-white rounded-2xl flex items-center justify-center mb-0 shadow-lg">
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
          
          <h1 className="text-white text-[20px] font-semibold mb-3">
            Dabang Pro
          </h1>
          
          <p className="text-white/90  text-center  text-[12px] w-[145px] leading-relaxed max-w-48">
            Get access to all features on tetumbas
          </p>
        </div>
        
        {/* Get Pro Button */}
        <button style={{borderRadius:'8px'}} className="w-[136px] bg-white  text-indigo-600 font-semibold text-base p-[8px]  hover:bg-gray-50 transition-colors duration-200 shadow-lg">
          Get Pro
        </button>

    </div>
  );
}