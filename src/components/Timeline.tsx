import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar } from 'lucide-react';
import { websiteContent } from '../data/content';
import { getImageUrl } from '../utils/getImageUrl';

interface TimelineProps {
  onPhotoClick?: (image: string) => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onPhotoClick }) => {
  const { timelineItems } = websiteContent;

  return (
    <section id="timeline" className="py-24 px-4 max-w-6xl mx-auto relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill text-xs font-semibold text-pink-700 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-500" />
          Our Memory Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3"
        >
          Little Moments, Big Memories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-pink-900/70 text-lg md:text-xl font-medium max-w-lg mx-auto"
        >
          A look back at how we got here.
        </motion.p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-purple-300 rounded-full" />
        <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-rose-400 to-purple-300 rounded-full" />

        <div className="space-y-12 md:space-y-20">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-4 border-pink-400 shadow-lg flex items-center justify-center text-pink-500 font-bold text-xs">
                  0{item.id}
                </div>

                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10">
                  <div
                    className={`glass-card rounded-3xl p-6 md:p-8 shadow-xl border border-white/90 group hover:shadow-2xl transition-all duration-300 ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-3 text-xs font-bold text-pink-600 uppercase tracking-widest ${
                        isEven ? 'md:justify-end' : 'md:justify-start'
                      }`}
                    >
                      <span className="px-2.5 py-1 rounded-full bg-pink-100/80">
                        {item.year}
                      </span>
                      <span className="flex items-center gap-1 text-pink-900/60 font-medium">
                        <Calendar className="w-3 h-3 text-pink-400" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-pink-950 font-serif-custom tracking-tight mb-3 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>

                    <div
                      onClick={() => onPhotoClick && onPhotoClick(item.image)}
                      className="mb-4 overflow-hidden rounded-2xl aspect-[16/9] bg-pink-100 cursor-pointer relative group/img shadow-md"
                    >
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.endsWith('.jpeg')) {
                            target.src = target.src.replace('.jpeg', '.jpg');
                          } else if (target.src.endsWith('.jpg')) {
                            target.src = target.src.replace('.jpg', '.jpeg');
                          }
                        }}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold">
                        View Photo 🔍
                      </div>
                    </div>

                    <p className="text-pink-950/80 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
