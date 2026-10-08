import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { heroPhoto } from '../data/memories';

interface BirthdayHeroProps {
  onPhotoClick?: (image: string) => void;
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({ onPhotoClick }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 px-4 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl h-[400px] bg-gradient-to-tr from-pink-300/30 via-rose-200/40 to-purple-200/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <div className="px-5 py-2 rounded-full glass-pill text-xs font-semibold uppercase tracking-widest text-pink-700 shadow-sm flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
            The Main Event Is Here
            <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="block text-xl md:text-3xl font-extrabold text-pink-900/70 tracking-widest uppercase font-serif-custom mb-1">
            HAPPY BIRTHDAY
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 font-serif-custom drop-shadow-sm py-2">
            SHIVANI <span className="text-pink-500 inline-block animate-pulse">💗</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-pink-950/80 font-medium max-w-2xl leading-relaxed"
        >
          Today is all about celebrating <span className="text-pink-600 font-semibold underline decoration-pink-300 underline-offset-4">YOU</span> — your smile, your energy, and all our crazy memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', damping: 20 }}
          className="mt-10 relative group cursor-pointer"
          onClick={() => onPhotoClick && onPhotoClick(heroPhoto)}
        >
          <div className="absolute -top-6 -left-6 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center text-pink-500 animate-float-slow">
            <Heart className="w-6 h-6 fill-pink-500" />
          </div>
          <div className="absolute -bottom-6 -right-6 z-10 w-14 h-14 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-xl flex items-center justify-center text-xl animate-float-slow" style={{ animationDelay: '-3s' }}>
            ✨
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

          <div className="relative z-0 p-3 bg-white/80 backdrop-blur-xl rounded-[32px] shadow-2xl border border-white/90 transform group-hover:scale-[1.02] transition-transform duration-500">
            <div className="overflow-hidden rounded-[24px] max-w-md w-full aspect-[4/5] bg-pink-100 relative">
              <img
                src={heroPhoto}
                alt="Birthday Girl Shivani"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.jpeg')) {
                    target.src = target.src.replace('.jpeg', '.jpg');
                  } else if (target.src.endsWith('.jpg')) {
                    target.src = target.src.replace('.jpg', '.jpeg');
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-pink-950 font-semibold text-xs tracking-wider uppercase">
                  Click to Expand 🔍
                </span>
              </div>
            </div>
            <div className="py-3 px-4 flex items-center justify-between text-xs text-pink-900/70 font-medium">
              <span>Birthday Girl Shivani 👑</span>
              <span>Photo of the Day ✨</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2 text-pink-900/60 font-medium text-sm animate-bounce"
        >
          <span>Scroll down, birthday girl ↓</span>
          <ChevronDown className="w-5 h-5 text-pink-500" />
        </motion.div>
      </div>
    </section>
  );
};
