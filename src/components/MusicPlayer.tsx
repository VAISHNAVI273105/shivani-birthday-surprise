import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';
import { musicController } from '../utils/audioSynth';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = async () => {
    const playing = await musicController.toggle();
    setIsPlaying(playing);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <div className="glass-pill rounded-full p-2 pl-3.5 shadow-xl shadow-pink-500/10 border border-white/90 flex items-center gap-3">
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-4 w-5">
            <span className="w-1 bg-pink-500 rounded-full animate-[bounce_1s_infinite_100ms]" style={{ height: '60%' }} />
            <span className="w-1 bg-rose-400 rounded-full animate-[bounce_1s_infinite_300ms]" style={{ height: '100%' }} />
            <span className="w-1 bg-purple-400 rounded-full animate-[bounce_1s_infinite_200ms]" style={{ height: '40%' }} />
            <span className="w-1 bg-pink-400 rounded-full animate-[bounce_1s_infinite_400ms]" style={{ height: '80%' }} />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
            <Music className="w-4 h-4" />
          </div>
        )}

        <div className="flex flex-col pr-1">
          <span className="text-[11px] font-semibold tracking-wide uppercase text-pink-900/60 leading-none">
            {isPlaying ? 'Now Playing' : 'Background Song'}
          </span>
          <span className="text-xs font-semibold text-pink-950 leading-tight">
            {isPlaying ? 'Shivani\'s Birthday Song' : '🎵 Play our song'}
          </span>
        </div>

        <button
          onClick={handleToggle}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white flex items-center justify-center shadow-md shadow-pink-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
        </button>
      </div>
    </motion.div>
  );
};
