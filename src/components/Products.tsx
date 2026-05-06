import { motion } from 'motion/react';

const products = [
  {
    name: "Kilele Premium Gin",
    category: "Gin",
    description: "Ladha tulivu ya mimea asilia kutoka milima ya Kaskazini.",
    image: "https://images.unsplash.com/photo-1594911776735-269bf697926c?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500/20"
  },
  {
    name: "Mlimani Vodka",
    category: "Vodka",
    description: "Inayosafishwa mara tano kwa usafi uliozidi kiwango.",
    image: "https://images.unsplash.com/photo-1592947945242-69312358628b?auto=format&fit=crop&q=80&w=800",
    color: "from-slate-400/20"
  },
  {
    name: "Sunset Brandy",
    category: "Brandy",
    description: "Rangi ya kahawia iliyokolea na harufu nzuri ya mibuyu.",
    image: "https://images.unsplash.com/photo-1527281400828-ac737aeba5ca?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-600/20"
  },
  {
    name: "Spark Whiskey",
    category: "Whiskey",
    description: "Whiskey kali yenye mguso wa moshi na ladha ya kipekee.",
    image: "https://images.unsplash.com/photo-1582819509237-d5b75f20ff7c?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-500/20"
  }
];

export default function Products() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[var(--color-dark-surface)]" id="bidhaa">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-white">Mkusanyiko Wetu</h2>
            <p className="text-slate-400 max-w-md">
              Kila chupa inasimulia hadithi ya uvumbuzi na ubora wa kipekee.
            </p>
          </motion.div>
          <motion.button 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="text-amber-500 font-semibold border-b border-amber-500/30 hover:border-amber-500 transition-all pb-1"
          >
            Tazama Bidhaa Zote
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              id={`product-${index}`}
            >
              <div className={`relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-gradient-to-br ${product.color}`}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <span className="bg-amber-600 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Quick View
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-1">{product.category}</span>
                <h3 className="text-2xl mb-2 group-hover:text-amber-400 transition-colors">{product.name}</h3>
                <p className="text-slate-400 text-sm italic font-sans">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
