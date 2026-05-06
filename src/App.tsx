/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[var(--color-dark-surface)] selection:bg-amber-500 selection:text-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-amber-500 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Separator / Quote */}
        <section className="py-20 flex justify-center items-center px-6">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl italic font-light text-slate-300 leading-tight">
              "Kilele ni zaidi ya kinywaji; ni sherehe ya mafanikio na tunda la kazi ngumu."
            </h2>
            <div className="mt-6 flex justify-center gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-amber-500 rounded-full" />
              ))}
            </div>
          </div>
        </section>

        <Stats />
        
        <Products />

        {/* Call to Action Section */}
        <section className="py-32 px-6 bg-gradient-to-b from-black to-[var(--color-dark-surface)] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1569058242253-92a9c71f9867?auto=format&fit=crop&q=80&w=1920" 
              className="w-full h-full object-cover" 
              alt="Distillery Texture"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl mb-8">Uko tayari kushirikiana nasi?</h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                Tunakaribisha mawakala na wasambazaji kutoka nchi nzima. Jiunge na familia ya Kilele Distillery na upeleke bidhaa bora kwa wateja wako.
              </p>
              <button className="bg-amber-600 hover:bg-amber-500 text-black font-bold px-12 py-5 rounded-full text-lg shadow-xl shadow-amber-500/10 transition-all hover:scale-105 active:scale-95">
                Wasiliana kwa Biashara
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
