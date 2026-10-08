import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { memories } from '../data/memories';
import type { Memory } from '../data/memories';
import { getImageUrl } from '../utils/getImageUrl';

interface PhotoWallProps {
  onSelectMemory: (memory: Memory) => void;
}

export const PhotoWall: React.FC<PhotoWallProps> = ({ onSelectMemory }) => {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Camera className="w-3.5 h-3.5 text-pink-500" />
          Full Memory Collection
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          One Last Look At Our Memories 📸
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg md:text-xl font-medium max-w-lg mx-auto"
        >
          All 25 snapshots of joy, laughter, and friendship in one place.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {memories.map((item, idx) => {
          const aspectClasses = [
            'aspect-square',
            'aspect-[3/4]',
            'aspect-square',
            'aspect-[4/3]',
            'aspect-square'
          ];
          const aspectClass = aspectClasses[idx % aspectClasses.length];
          const numStr = item.id < 10 ? `0${item.id}` : `${item.id}`;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
              whileHover={{ scale: 1.04, zIndex: 10 }}
              onClick={() => onSelectMemory(item)}
              className={`relative overflow-hidden rounded-2xl bg-pink-100 cursor-pointer shadow-md group border border-white/60 ${aspectClass}`}
            >
              <img
                src={getImageUrl(item.image)}
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
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-pink-300">
                  <span>#{numStr}</span>
                  <Maximize2 className="w-3 h-3" />
                </div>
                <h4 className="text-xs font-semibold truncate mt-0.5">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
