import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift, Heart, Sparkles } from 'lucide-react';

interface BirthdayIntroProps {
  onStartExperience: () => void;
}

export const BirthdayIntro: React.FC<BirthdayIntroProps> = ({ onStartExperience }) => {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    }
  };

  const handleOpenSurprise = () => {
    // Trigger festive confetti burst
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb7185', '#e879f9', '#fecdd3', '#ffffff'],
    });

    setTimeout(() => {
      onStartExperience();
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col justify-between items-center p-6 bg-gradient-to-br from-[#faf0f3] via-[#f7e4eb] to-[#f2dbe5] overflow-hidden"
    >
      {/* Background Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-pink-300/30 blur-3xl animate-ambient-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-300/25 blur-3xl animate-ambient-glow" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Top Header Badge */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pt-6"
      >
        <div className="px-4 py-1.5 rounded-full glass-pill flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-pink-700 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          A Personal Birthday Experience
        </div>
      </motion.div>

      {/* Main Center Animated Cards */}
      <div className="w-full max-w-xl my-auto text-center px-4 z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/80 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-pink-100 flex items-center justify-center text-3xl shadow-inner">
                👀
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-pink-950 mb-4 font-serif-custom tracking-tight">
                Hey Shivani...
              </h1>
              <p className="text-pink-900/70 text-base md:text-lg mb-8 leading-relaxed">
                Take a deep breath and relax for a moment.
              </p>
              <button
                onClick={handleNextStep}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-pink-500/30 hover:scale-105 hover:shadow-pink-500/40 transition-all cursor-pointer flex items-center gap-2"
              >
                Continue <span className="text-lg">→</span>
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/80 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-pink-100 flex items-center justify-center text-3xl shadow-inner">
                ✨
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-pink-950 mb-4 font-serif-custom tracking-tight">
                I made something for you.
              </h2>
              <p className="text-pink-900/70 text-base md:text-lg mb-8 leading-relaxed">
                Because ordinary birthday messages just weren't enough.
              </p>
              <button
                onClick={handleNextStep}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-pink-500/30 hover:scale-105 hover:shadow-pink-500/40 transition-all cursor-pointer flex items-center gap-2"
              >
                Tell me more... <span className="text-lg">→</span>
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl border border-white/80 flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 text-white flex items-center justify-center text-2xl shadow-md shadow-pink-400/40 animate-bounce">
                <Gift className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-pink-950 mb-4 font-serif-custom tracking-tight leading-snug">
                Something a little more special than just a birthday wish.
              </h2>
              <p className="text-pink-900/70 text-sm md:text-base mb-8 leading-relaxed max-w-md">
                A digital timeline of our best memories, inside jokes, and everything that makes you extraordinary.
              </p>

              <button
                onClick={handleOpenSurprise}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white font-bold text-base tracking-wide shadow-xl shadow-pink-500/35 hover:scale-105 hover:shadow-pink-500/50 transition-all cursor-pointer flex items-center gap-3 group"
              >
                <Gift className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Open Your Surprise 🎁
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="pb-6 text-xs text-pink-900/60 font-medium flex items-center gap-1.5"
      >
        Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline animate-pulse" /> by Vaishnavi
      </motion.footer>
    </motion.div>
  );
};
