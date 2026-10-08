import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, X } from 'lucide-react';
import { websiteContent } from '../data/content';

export const BirthdayLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { letter } = websiteContent;

  return (
    <section id="letter" className="py-24 px-4 max-w-4xl mx-auto relative overflow-hidden">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Mail className="w-3.5 h-3.5 text-pink-500" />
          A Personal Message
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          There's One More Thing... 💌
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg font-medium max-w-md mx-auto"
        >
          A handwritten letter straight from my heart to yours.
        </motion.p>
      </div>

      <div className="relative flex justify-center">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => setIsOpen(true)}
            className="w-full max-w-xl glass-card rounded-[32px] p-8 md:p-12 shadow-2xl border border-white/90 text-center cursor-pointer relative group overflow-hidden"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-400/40 group-hover:rotate-12 transition-transform duration-300">
              <Mail className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-pink-950 font-serif-custom mb-3">
              Confidential Birthday Letter
            </h3>
            <p className="text-pink-900/70 text-sm mb-8">
              To: Shivani 💗 • From: Vaishnavi
            </p>

            <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all flex items-center gap-2 mx-auto">
              Open This 💌
            </button>
          </motion.div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="w-full max-w-2xl bg-[#fffefc] rounded-[36px] p-8 md:p-14 shadow-2xl border-2 border-pink-200/80 relative text-pink-950 overflow-hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Close letter"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute top-6 left-6 px-3 py-1 rounded-md border-2 border-dashed border-pink-300 text-pink-500 text-[10px] font-mono tracking-widest uppercase">
                AIR MAIL • 100% LOVE
              </div>

              <div className="mt-8 mb-6">
                <h3 className="text-3xl sm:text-4xl font-extrabold font-handwriting text-pink-600 tracking-wide">
                  {letter.greeting}
                </h3>
              </div>

              <div className="space-y-4 font-handwriting text-xl sm:text-2xl text-slate-800 leading-relaxed">
                {letter.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-handwriting text-2xl text-pink-600">
                <span>{letter.closing}</span>
                <span className="font-bold text-pink-700 text-3xl">
                  {letter.signature}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
