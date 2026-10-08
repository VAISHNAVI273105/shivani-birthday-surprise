import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Flame } from 'lucide-react';

export const FinalSurprise: React.FC = () => {
  const [step, setStep] = useState(0);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleMakeWish = () => {
    setStep(1);

    const end = Date.now() + 3.5 * 1000;
    const colors = ['#f472b6', '#fb7185', '#e879f9', '#c084fc', '#ffffff', '#fcd34d'];

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleBlowCandle = () => {
    setCandlesBlown(true);
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#f472b6', '#fcd34d', '#ffffff']
    });
  };

  return (
    <section id="final-surprise" className="py-24 px-4 min-h-[90vh] flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-pink-950 text-white rounded-[40px] my-12 max-w-6xl mx-auto shadow-2xl border border-white/10">
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {step === 1 && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[10%] bottom-[-100px] text-4xl animate-[floatBalloon_8s_ease-in-out_infinite]">🎈</div>
          <div className="absolute left-[30%] bottom-[-100px] text-5xl animate-[floatBalloon_10s_ease-in-out_infinite_2s]">💖</div>
          <div className="absolute left-[50%] bottom-[-100px] text-4xl animate-[floatBalloon_7s_ease-in-out_infinite_1s]">🎈</div>
          <div className="absolute left-[70%] bottom-[-100px] text-5xl animate-[floatBalloon_9s_ease-in-out_infinite_3s]">✨</div>
          <div className="absolute left-[88%] bottom-[-100px] text-4xl animate-[floatBalloon_11s_ease-in-out_infinite_1.5s]">🎈</div>
        </div>
      )}

      <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="pre-surprise"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="glass-card-dark rounded-3xl p-8 md:p-14 border border-white/20 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center mx-auto mb-6 border border-pink-500/30">
                <Sparkles className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold font-serif-custom mb-3 text-pink-200">
                Wait...
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-serif-custom italic mb-4">
                One last thing.
              </p>
              <p className="text-pink-300/80 text-sm md:text-base mb-8">
                Ready for the big birthday wish?
              </p>

              <button
                onClick={handleMakeWish}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-extrabold text-lg tracking-wide shadow-xl shadow-pink-500/40 hover:scale-105 transition-all cursor-pointer flex items-center gap-3 mx-auto"
              >
                <Sparkles className="w-5 h-5" />
                Make A Wish ✨
              </button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="post-surprise"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', damping: 20 }}
              className="space-y-8"
            >
              <div
                onClick={handleBlowCandle}
                className="relative inline-block cursor-pointer group"
                title="Tap to blow out candles!"
              >
                <div className="text-7xl md:text-8xl transform group-hover:scale-110 transition-transform">
                  🎂
                </div>
                {!candlesBlown ? (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <Flame className="w-6 h-6 text-amber-400 fill-amber-400 animate-bounce" />
                    <span className="text-[11px] font-semibold bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded-full border border-amber-400/40">
                      Tap to blow candle! 🕯️
                    </span>
                  </div>
                ) : (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-bold text-pink-300 bg-pink-500/30 px-3 py-1 rounded-full border border-pink-400">
                    Wish Made! ✨
                  </div>
                )}
              </div>

              <div>
                <span className="text-lg md:text-2xl font-bold uppercase tracking-widest text-pink-400 font-serif-custom block mb-2">
                  HAPPY BIRTHDAY
                </span>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-200 font-serif-custom tracking-tight leading-none drop-shadow-lg">
                  SHIVANI 💗
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                May this year be full of happiness, success, crazy adventures, beautiful memories, and everything you deserve.
              </p>

              <div className="pt-6 border-t border-white/15 inline-block">
                <span className="text-sm uppercase tracking-widest text-slate-400 block mb-1">
                  With lots of love &amp; best wishes
                </span>
                <span className="text-2xl md:text-3xl font-bold font-handwriting text-pink-400">
                  Vaishnavi ❤️
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes floatBalloon {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(-110vh) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};
