import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { websiteContent } from '../data/content';
import { getImageUrl } from '../utils/getImageUrl';

interface CinematicGalleryProps {
  onPhotoClick?: (image: string) => void;
}

export const CinematicGallery: React.FC<CinematicGalleryProps> = ({ onPhotoClick }) => {
  const { cinematicQuotes } = websiteContent;

  return (
    <section className="py-20 relative bg-slate-950 text-white overflow-hidden my-12">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center pt-8 pb-12 px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-pink-300 border border-white/15 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          Cinematic Moments
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-serif-custom tracking-tight">
          Moments Etched In Time ✨
        </h2>
      </div>

      <div className="space-y-24 px-4 max-w-5xl mx-auto pb-12 relative z-10">
        {cinematicQuotes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.92, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative group rounded-[36px] overflow-hidden shadow-2xl border border-white/15 bg-slate-900 cursor-pointer"
            onClick={() => onPhotoClick && onPhotoClick(item.image)}
          >
            <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden relative">
              <img
                src={getImageUrl(item.image)}
                alt={`Cinematic Moment ${idx + 1}`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.jpeg')) {
                    target.src = target.src.replace('.jpeg', '.jpg');
                  } else if (target.src.endsWith('.jpg')) {
                    target.src = target.src.replace('.jpg', '.jpeg');
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 text-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-2xl"
              >
                <span className="w-10 h-10 rounded-full bg-pink-500/20 backdrop-blur-md flex items-center justify-center text-pink-300 mx-auto mb-4 border border-pink-500/30">
                  <Heart className="w-5 h-5 fill-pink-400 text-pink-400" />
                </span>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-serif-custom tracking-tight leading-tight mb-3 text-shadow-lg">
                  "{item.quote}"
                </h3>
                <p className="text-pink-200/80 text-sm md:text-lg font-light tracking-wide">
                  {item.subtext}
                </p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
