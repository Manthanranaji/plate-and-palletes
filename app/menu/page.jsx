import Navbar from '../navbar';
import Link from 'next/link';

export default function Menu(){
    return(
        <>
        <div className="min-h-screen w-full bg-gradient-to-b from-[#f7e7ce] via-[#cdb891] to-[#f7e7ce]">
            <Navbar/>
            <div className="flex items-center justify-center">
            <div className='grid grid-cols-1 w-[300px] h-[350px] md:w-[700px] md:h-[300px] mt-32 rounded-3xl bg-white/30 shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.9),inset_0_-2px_4px_0_rgba(0,0,0,0.15),inset_2px_0_20px_0_rgba(255,255,255,0.4),inset_-2px_0_4px_0_rgba(255,255,255,0.4),inset_0_0_20px_0_rgba(255,205,64,0.2)] backdrop-blur-2xl flex items-center justify-between px-8 md:px-20 border-b border-white/40 shadow-lg hover:scale-[1.02] transition-transform duration-300'>
                <h1 className='mt-4 ml-2 text-xl text-[#3b2f2f] font-extrabold'>
                    This is a fictional cafe website for portfolio so it doesn't contain any menu to get a working website like this contact me
                </h1>
                <Link className='ml-14 md:ml-32 h-20 w-32 md:w-64 flex items-center justify-center border-4 border-[#1b1516] text-white font-extrabold text-xl rounded-xl bg-[#3b2f2f]'
                    href={'../contact'}
                >
                  Contact  
                </Link>
            </div>
            </div>
        </div>
        </>
    )
}