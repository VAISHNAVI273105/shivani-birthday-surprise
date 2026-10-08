import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Quote } from 'lucide-react';
import { websiteContent } from '../data/content';

export const PersonalNote: React.FC = () => {
  const { personalNote } = websiteContent;

  return (
    <section id="note" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative glass-card rounded-[36px] p-8 md:p-14 shadow-2xl border border-white/90 overflow-hidden"
        >
          {/* Decorative Background Quote Icon */}
          <Quote className="absolute -top-4 -left-4 w-32 h-32 text-pink-200/40 pointer-events-none rotate-12" />

          {/* Section Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[2px] bg-pink-400 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-pink-600">
              A Personal Note
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-4">
            {personalNote.heading}
          </h2>

          {/* Subheading Quote */}
          <p className="text-xl md:text-2xl text-pink-900/80 font-serif-custom italic mb-8 leading-relaxed border-l-4 border-pink-400 pl-4 py-1">
            "{personalNote.subheading}"
          </p>

          {/* Paragraphs */}
          <div className="space-y-4 text-base md:text-lg text-pink-950/80 leading-relaxed">
            {personalNote.paragraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Footer Badge */}
          <div className="mt-10 pt-6 border-t border-pink-200/50 flex items-center justify-between text-xs text-pink-900/60 font-semibold">
            <span className="flex items-center gap-1.5 text-pink-600">
              <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
              From Vaishnavi
            </span>
            <span>Made with genuine love 💕</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
