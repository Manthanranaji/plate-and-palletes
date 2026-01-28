import Navbar from "../navbar";
import Link from "next/link";

export default function Contact(){
    return(
        <>
        <div className="min-h-screen w-full bg-gradient-to-b from-[#f7e7ce] via-[#cdb891] to-[#f7e7ce]">
            <Navbar/>
            <div className="grid grid-cols-1 gap-8 md:gap-16 mt-16 ml-8">
                <Link href='https://www.instagram.com/manthan.web.dev/' className="text-blue-500 font-bold underline text-xl">
                    Instagram
                </Link>
                <Link href="https://wa.me/919876634626" className="text-green-600 font-bold underline text-xl">
                    WhatsApp
                </Link>
                <h1 className="text-[#3b2f2f] font-bold text-xl underline">
                    Email ID - manthanrana2010@gmail.com
                </h1>
                <h2 className="text-[#3b2f2f] font-bold text-2xl">
                    Contact me to get your website made.
                </h2>
            </div>
        </div>
        </>
    )
}