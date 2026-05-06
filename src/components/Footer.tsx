import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 md:px-12" id="mawasiliano">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center font-serif text-xl font-bold text-black">K</div>
            <span className="text-xl font-serif font-bold text-white tracking-tight uppercase">Kilele Spirits</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Tunajivunia kuwa kiwanda kinachoongoza kwa ubunifu na ubora wa vinywaji vikali nchini. Ladha asili, viwango vya hali ya juu.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-600 transition-colors group">
              <Instagram className="w-4 h-4 text-slate-300 group-hover:text-black" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-600 transition-colors group">
              <Facebook className="w-4 h-4 text-slate-300 group-hover:text-black" />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-amber-600 transition-colors group">
              <Twitter className="w-4 h-4 text-slate-300 group-hover:text-black" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-6 border-b border-amber-500/20 pb-2 w-fit">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-amber-500 transition-colors">Bidhaa Zetu</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Mchakato wa Kiwandani</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Taarifa za Uzalishaji</a></li>
            <li><a href="#" className="hover:text-amber-500 transition-colors">Tuzo na Vyeti</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-6 border-b border-amber-500/20 pb-2 w-fit">Tufikie</h4>
          <div className="space-y-4 text-slate-400 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
              <span>Plot 45, Barabara ya Viwanda,<br />Dar es Salaam, Tanzania</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-amber-500" />
              <span>+255 700 000 000</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-500" />
              <span>pata@kilelespirits.co.tz</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-sans text-sm font-bold uppercase tracking-widest mb-6 border-b border-amber-500/20 pb-2 w-fit">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4 italic">Pata taarifa za matoleo mapya ya bidhaa zetu.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Barua pepe" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-full"
            />
            <button className="bg-amber-600 text-black font-bold p-2 px-4 rounded-lg hover:bg-amber-500 transition-colors">Ok</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-slate-500 text-xs">
        <p>&copy; 2026 Kilele Spirits Distillery Ltd. Haki zote zimehifadhiwa. <br /> Kunywa kistaarabu, hairuhusiwi kwa wenye umri chini ya miaka 18.</p>
      </div>
    </footer>
  );
}
