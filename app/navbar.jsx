"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `text-[#3b2f2f] font-bold text-sm md:text-lg transition hover:text-[#5c4033]
     ${pathname === path ? "underline underline-offset-8 decoration-2" : ""}`;

  return (
    <div className='w-full h-24 bg-white/10 shadow-[inset_0_1px_3px_0_rgba(255,255,255,0.95),inset_0_-1px_3px_0_rgba(255,255,255,0.7),inset_0_0_20px_0_rgba(255,255,255,0.35),inset_0_0_40px_0_rgba(255,255,255,0.15)]
    backdrop-blur-2xl border-b border-white/50 flex items-center justify-between px-8 md:px-20 shadow-lg hover:scale-[1.02] transition-transform duration-300'>

      <Link href="/" className='text-[#3b2f2f] font-extrabold text-md md:text-2xl hover:text-[#5c4033] transition'>
        <span className="md:hidden flex flex-col leading-tight">
          <span>Plate</span>
          <span>&</span>
          <span>Palette</span>
        </span>
        <span className="hidden md:inline">
          Plate & Palette
        </span>
      </Link>

      <div className='flex gap-8'>
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/menu" className={linkClass("/menu")}>Menu</Link>
        <Link href="/contact" className={linkClass("/contact")}>Contact</Link>
      </div>
    </div>
  );
}
