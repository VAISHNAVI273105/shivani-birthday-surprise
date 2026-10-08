import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Laugh } from 'lucide-react';
import { websiteContent } from '../data/content';

interface FunFactsProps {
  onPhotoClick?: (image: string) => void;
}

export const FunFacts: React.FC<FunFactsProps> = ({ onPhotoClick }) => {
  const { funSideCards } = websiteContent;

  return (
    <section id="fun-facts" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Laugh className="w-4 h-4 text-pink-500" />
          Inside Jokes & Pure Humor
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          Things That Are Soooo Shivani 😂
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg md:text-xl font-medium max-w-md mx-auto"
        >
          If you know her, you know these are 100% facts!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {funSideCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass-card rounded-3xl p-6 shadow-xl border border-white/90 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
            onClick={() => card.image && onPhotoClick && onPhotoClick(card.image)}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl transform group-hover:scale-125 transition-transform duration-300">
                {card.emoji}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-100/90 text-pink-700">
                {card.tag}
              </span>
            </div>

            {card.image && (
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-pink-50 relative shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.jpeg')) {
                      target.src = target.src.replace('.jpeg', '.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = target.src.replace('.jpg', '.jpeg');
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                  Click to Expand 🔍
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-2 group-hover:text-pink-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-pink-900/80 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] text-pink-400 font-semibold">
              <span>Verified by Vaishnavi</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
