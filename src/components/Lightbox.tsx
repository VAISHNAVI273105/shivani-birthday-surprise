import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Heart, Calendar } from 'lucide-react';
import type { Memory } from '../data/memories';

interface LightboxProps {
  memory: Memory | null;
  memories: Memory[];
  onClose: () => void;
  onSelectMemory: (memory: Memory) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  memory,
  memories,
  onClose,
  onSelectMemory,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!memory) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [memory, memories]);

  if (!memory) return null;

  const currentIndex = memories.findIndex((m) => m.id === memory.id);
  const total = memories.length;

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + total) % total;
    onSelectMemory(memories[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % total;
    onSelectMemory(memories[nextIdx]);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full max-h-[90vh] glass-card-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/80 flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="md:w-3/5 bg-black/40 flex items-center justify-center p-4 relative min-h-[300px] md:min-h-[500px]">
            <motion.img
              key={memory.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={memory.image}
              alt={memory.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80';
              }}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-mono tracking-wider">
              {currentIndex + 1} / {total}
            </div>
          </div>

          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-white bg-slate-900/60 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  {memory.category || 'Memory'}
                </span>
                {memory.date && (
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3 text-pink-400" />
                    {memory.date}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight font-serif-custom">
                {memory.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                "{memory.caption}"
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-pink-300">
                <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                Shivani &amp; Vaishnavi
              </span>
              <span className="text-slate-500 font-mono">Use ← → keys</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
