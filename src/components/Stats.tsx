import { motion } from 'motion/react';
import { Beer, Package, FlaskConical, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Uzalishaji wa Siku',
    value: '25,000+',
    unit: 'Lita',
    icon: FlaskConical,
    description: 'Tunahakikisha ubora kila tone.'
  },
  {
    label: 'Uzalishaji wa Wiki',
    value: '175,000+',
    unit: 'Lita',
    icon: TrendingUp,
    description: 'Kasi ya ajabu kukidhi soko.'
  },
  {
    label: 'Jumla ya Katoni',
    value: '4,500',
    unit: 'Kwa Wiki',
    icon: Package,
    description: 'Mzigo uliopakiwa tayari kwa usafirishaji.'
  },
  {
    label: 'Aina za Vileo',
    value: '12',
    unit: 'Bidhaa Pekee',
    icon: Beer,
    description: 'Kutoka Gin hadi Whiskey ya hali ya juu.'
  }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black relative overflow-hidden" id="vizalisho">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Uzalishaji Usio na Mfano</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Teknolojia yetu ya kisasa inatuwezesha kuzalisha mzigo mkubwa huku tukizingatia ubora wa hali ya juu uliothibitishwa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-amber-500/50 transition-colors"
              id={`stat-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-white">{stat.value}</span>
                <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">{stat.unit}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 font-sans">{stat.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
