import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onReopenIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReopenIntro }) => {
  return (
    <footer className="py-12 px-4 border-t border-pink-200/60 bg-pink-50/50 text-center relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-pink-950 font-bold text-lg font-serif-custom">
          <span>To My Favorite Human, Shivani</span>
          <span className="text-pink-500">💗</span>
        </div>

        <p className="text-sm text-pink-900/70 font-medium">
          Made with <Heart className="w-4 h-4 fill-pink-500 text-pink-500 inline mx-0.5 animate-pulse" /> by Vaishnavi for Shivani's Special Birthday.
        </p>

        {onReopenIntro && (
          <button
            onClick={onReopenIntro}
            className="mt-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-pink-700 hover:bg-pink-100 transition-colors flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            Replay Introductory Surprise
          </button>
        )}

        <div className="text-[11px] text-pink-900/40 font-mono mt-2">
          © {new Date().getFullYear()} • Personal Birthday Gift Website
        </div>
      </div>
    </footer>
  );
};
