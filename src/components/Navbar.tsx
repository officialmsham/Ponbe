import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center bg-black/50 backdrop-blur-lg border-b border-white/5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2"
      >
        <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center font-serif text-2xl font-bold text-black border-2 border-white/20">
          K
        </div>
        <span className="text-2xl font-serif font-bold text-white tracking-tight">KILELE <span className="text-amber-500 text-sm font-sans tracking-widest align-top mt-1 ml-1 font-bold">DISTILLERY</span></span>
      </motion.div>

      <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
        <a href="#vinywaji" className="hover:text-white transition-colors">Vinywaji</a>
        <a href="#vizalisho" className="hover:text-white transition-colors">Uzalishaji</a>
        <a href="#sayansi" className="hover:text-white transition-colors">Sayansi Yetu</a>
        <a href="#mawasiliano" className="hover:text-white transition-colors">Mawasiliano</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-amber-600/10 text-amber-500 border border-amber-600/30 font-bold px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-amber-600 hover:text-black transition-all">
          Enquiry
        </button>
      </div>
    </nav>
  );
}
