import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
          alt="Distillery Backdrop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6 text-amber-500 font-medium tracking-widest uppercase text-sm">
              <Star className="w-4 h-4 fill-amber-500" />
              <span>Premium Quality Spirits</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight">
              Ladha ya <span className="gold-gradient-text italic">Kipekee,</span><br />
              Ubora Usiochuja.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              Kilele Distillery ni chimbuko la vinywaji vikali vyenye ladha halisi na viwango vya kimataifa. Tunazalisha pombe kali kwa teknolojia ya kisasa na mapenzi ya kweli kwa sanaa ya kunereka.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group">
                Angalia Bidhaa Zetu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-white/20 hover:bg-white/10 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full transition-all">
                Jifunze Kuhusu Sisi
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] bottom-[15%] hidden lg:block"
      >
        <div className="glass-card p-6 rounded-3xl rotate-12">
          <div className="text-amber-500 text-xs font-bold uppercase mb-1">Est. 1998</div>
          <div className="text-white font-serif text-2xl">Kilele Gold</div>
        </div>
      </motion.div>
    </section>
  );
}
