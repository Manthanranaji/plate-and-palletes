import Navbar from './navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f3e0c0] via-[#bfa77a] to-[#f3e0c0]">
      <Navbar/>
      
      {/* Hero */}
      <div className="flex items-center justify-center h-[300px]">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#3b2f2f]">
          Plate & Palette
        </h1>        
      </div>
      
      {/* Feature Cards */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-32 max-w-5xl mx-auto'>
        
        <div className='w-full h-32 bg-white/10 shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.95),inset_0_-1px_3px_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.35),inset_0_0_40px_0_rgba(255,255,255,0.15)]
    backdrop-blur-2xl border-sm border-white/3 hover:scale-105 transition-all duration-300 rounded-xl flex items-center justify-center'>
          <h1 className='text-[#3b2f2f] font-bold text-xl'>☕ Cozy Ambience</h1>
        </div>
        
        <div className='w-full h-32 bg-white/10 shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.95),inset_0_-1px_3px_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.35),inset_0_0_40px_0_rgba(255,255,255,0.15)]
    backdrop-blur-2xl border-sm border-white/3 hover:scale-105 transition-all duration-300 rounded-xl flex items-center justify-center'>
          <h1 className='text-[#3b2f2f] font-bold text-xl'>🍽️ Gourmet Food</h1>
        </div>
        
        <div className='w-full h-32 bg-white/10 shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.95),inset_0_-1px_3px_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.35),inset_0_0_40px_0_rgba(255,255,255,0.15)]
    backdrop-blur-2xl border-sm border-white/3 hover:scale-105 transition-all duration-300 rounded-xl flex items-center justify-center'>
          <h1 className='text-[#3b2f2f] font-bold text-xl'>⚡ Fast Service</h1>
        </div>
        
        <div className='w-full h-32 bg-white/10 shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.95),inset_0_-1px_3px_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.35),inset_0_0_40px_0_rgba(255,255,255,0.15)]
    backdrop-blur-2xl border-sm border-white/3 hover:scale-105 transition-all duration-300 rounded-xl flex items-center justify-center'>
          <h1 className='text-[#3b2f2f] font-bold text-xl'>✨ Quality Food</h1>
        </div>
        
      </div>
     
    <div className='flex items-center justify-center h-32 w-full mt-16'> 
    <Link className='h-20 w-64 flex items-center justify-center border-4 border-[#1b1516] text-white font-extrabold text-xl rounded-xl bg-[#3b2f2f] hover:scale-105 transform-all duration-300'
     href={'/contact'}
    >
      Contact  
    </Link>
    </div>      
    </div>
  );
}