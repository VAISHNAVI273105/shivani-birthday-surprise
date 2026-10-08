import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  onReopenIntro?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onReopenIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Note', href: '#note' },
    { label: 'Memories', href: '#memories' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Shivani Specials', href: '#fun-facts' },
    { label: 'Letter', href: '#letter' },
    { label: 'Final Wish', href: '#final-surprise' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-pink-100/50 z-50 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Floating Glass Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-3.5'
        }`}
      >
        <div className="glass-pill rounded-full px-5 py-2.5 flex items-center justify-between shadow-lg shadow-pink-500/5">
          {/* Logo / Title */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white shadow-md shadow-pink-400/30 group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <span className="font-semibold text-pink-950 text-base tracking-tight group-hover:text-pink-600 transition-colors">
              Shivani <span className="text-pink-500 font-normal">💗</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-1.5 text-xs font-medium text-pink-900/80 hover:text-pink-600 hover:bg-pink-50/80 rounded-full transition-all"
              >
                {item.label}
              </a>
            ))}

            {onReopenIntro && (
              <button
                onClick={onReopenIntro}
                className="ml-2 px-3 py-1.5 text-xs font-medium text-pink-700 bg-pink-100/70 hover:bg-pink-200/80 rounded-full transition-all flex items-center gap-1.5"
                title="Replay intro card"
              >
                <Sparkles className="w-3 h-3 text-pink-500" />
                Intro
              </button>
            )}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-pink-900 hover:text-pink-600 rounded-full hover:bg-pink-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-card rounded-3xl p-6 shadow-2xl border border-white/80"
          >
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center pb-3 border-b border-pink-100">
                <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold">Navigation</span>
                <span className="text-xs text-pink-400">Made by Vaishnavi ❤️</span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 text-sm font-medium text-pink-950 hover:bg-pink-100/60 rounded-2xl transition-colors flex items-center justify-between"
                >
                  {item.label}
                  <span className="text-pink-300">→</span>
                </a>
              ))}
              {onReopenIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReopenIntro();
                  }}
                  className="mt-2 w-full py-3 text-sm font-medium text-pink-700 bg-pink-100/80 hover:bg-pink-200/90 rounded-2xl transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  Replay Intro Animation
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
