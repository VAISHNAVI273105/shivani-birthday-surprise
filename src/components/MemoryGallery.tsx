import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import { memories } from '../data/memories';
import type { Memory } from '../data/memories';

interface MemoryGalleryProps {
  onSelectMemory: (memory: Memory) => void;
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ onSelectMemory }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredMemories = filter === 'all'
    ? memories
    : memories.filter((m) => m.category === filter);

  const categories = [
    { id: 'all', label: 'All 25 Memories' },
    { id: 'special', label: '✨ Special' },
    { id: 'funny', label: '😂 Pure Chaos' },
    { id: 'unplanned', label: '☕ Unplanned' },
    { id: 'travel', label: '🚗 Adventures' },
  ];

  return (
    <section id="memories" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          Interactive Polaroid Gallery
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          25 Little Pieces of Us 📸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg md:text-xl font-medium max-w-lg mx-auto"
        >
          Every picture has a story. Tap any memory to view it fullscreen.
        </motion.p>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all cursor-pointer ${
              filter === cat.id
                ? 'bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-lg shadow-pink-500/25 scale-105'
                : 'glass-pill text-pink-900 hover:bg-pink-100/70'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {filteredMemories.map((item, index) => {
          const numStr = item.id < 10 ? `0${item.id}` : `${item.id}`;
          const rotDeg = item.rotation || (index % 2 === 0 ? 1.5 : -1.5);

          return (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              style={{ rotate: `${rotDeg}deg` }}
              onClick={() => onSelectMemory(item)}
              className="polaroid-frame rounded-2xl cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] font-bold tracking-wider">
                {numStr}
              </div>

              <div className="w-full aspect-[4/5] overflow-hidden rounded-lg bg-pink-100 relative mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.jpeg')) {
                      target.src = target.src.replace('.jpeg', '.jpg');
                    } else if (target.src.endsWith('.jpg')) {
                      target.src = target.src.replace('.jpg', '.jpeg');
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-pink-300 mb-1">
                    <span>{item.date || 'Memory'}</span>
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs text-slate-200 line-clamp-2 leading-snug">
                    "{item.caption}"
                  </p>
                </div>
              </div>

              <div className="text-center px-1">
                <h3 className="font-semibold text-pink-950 text-sm md:text-base tracking-tight font-serif-custom group-hover:text-pink-600 transition-colors">
                  {numStr} — {item.title}
                </h3>
                {item.date && (
                  <span className="text-[11px] text-pink-900/60 font-medium block mt-0.5">
                    {item.date}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
