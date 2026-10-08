import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Sun, Smile, Camera, Crown } from 'lucide-react';
import { websiteContent } from '../data/content';

export const ReasonsSection: React.FC = () => {
  const { reasons } = websiteContent;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-pink-500" />;
      case 'Sun': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'Smile': return <Smile className="w-5 h-5 text-purple-500" />;
      case 'Camera': return <Camera className="w-5 h-5 text-pink-600" />;
      case 'Crown': return <Crown className="w-5 h-5 text-amber-500 fill-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-500" />;
    }
  };

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          7 Reasons Why
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          Reasons You're One of My Favorite People
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg md:text-xl font-medium max-w-lg mx-auto"
        >
          Just a few out of a thousand reasons why you're irreplaceable.
        </motion.p>
      </div>

      {/* Grid of Reasons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {reasons.map((item, index) => {
          const isLast = index === reasons.length - 1;

          return (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card rounded-3xl p-6 shadow-xl border border-white/90 flex flex-col justify-between relative overflow-hidden group ${
                isLast ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-pink-50/90 to-rose-100/80 border-pink-300/80' : ''
              }`}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-pink-400/80 tracking-wider">
                  {item.number}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-2 group-hover:text-pink-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-pink-900/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Accent bottom line */}
              <div className="mt-6 pt-3 border-t border-pink-100/60 flex items-center justify-between text-[11px] font-semibold text-pink-400">
                <span>Reason #{item.number}</span>
                <span className="group-hover:translate-x-1 transition-transform">💕</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
