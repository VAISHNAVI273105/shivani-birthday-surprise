import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { memories } from './data/memories';
import type { Memory } from './data/memories';
import { Navigation } from './components/Navigation';
import { MusicPlayer } from './components/MusicPlayer';
import { CursorSparkles } from './components/CursorSparkles';
import { FloatingHearts } from './components/FloatingHearts';
import { Lightbox } from './components/Lightbox';

import { BirthdayIntro } from './components/BirthdayIntro';
import { BirthdayHero } from './components/BirthdayHero';
import { PersonalNote } from './components/PersonalNote';
import { MemoryGallery } from './components/MemoryGallery';
import { Timeline } from './components/Timeline';
import { FunFacts } from './components/FunFacts';
import { ReasonsSection } from './components/ReasonsSection';
import { CinematicGallery } from './components/CinematicGallery';
import { BirthdayLetter } from './components/BirthdayLetter';
import { PhotoWall } from './components/PhotoWall';
import { FinalSurprise } from './components/FinalSurprise';
import { Footer } from './components/Footer';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  const handleOpenPhotoByUrl = (imageUrl: string) => {
    const found = memories.find((m) => m.image === imageUrl);
    if (found) {
      setSelectedMemory(found);
    } else {
      setSelectedMemory({
        id: 999,
        image: imageUrl,
        title: "Special Photo 💗",
        caption: "One of our absolute favorite memories together.",
        date: "Shivani & Vaishnavi"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6f7] text-[#2b2327] relative selection:bg-pink-200 selection:text-pink-900 font-sans overflow-x-hidden">
      <CursorSparkles />
      <FloatingHearts />

      <AnimatePresence>
        {showIntro && (
          <BirthdayIntro onStartExperience={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {!showIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Navigation onReopenIntro={() => setShowIntro(true)} />
          <MusicPlayer />

          <main className="space-y-12">
            <BirthdayHero onPhotoClick={handleOpenPhotoByUrl} />
            <PersonalNote />
            <MemoryGallery onSelectMemory={(m) => setSelectedMemory(m)} />
            <Timeline onPhotoClick={handleOpenPhotoByUrl} />
            <FunFacts onPhotoClick={handleOpenPhotoByUrl} />
            <ReasonsSection />
            <CinematicGallery onPhotoClick={handleOpenPhotoByUrl} />
            <BirthdayLetter />
            <PhotoWall onSelectMemory={(m) => setSelectedMemory(m)} />
            <FinalSurprise />
          </main>

          <Footer onReopenIntro={() => setShowIntro(true)} />
        </motion.div>
      )}

      <Lightbox
        memory={selectedMemory}
        memories={memories}
        onClose={() => setSelectedMemory(null)}
        onSelectMemory={(m) => setSelectedMemory(m)}
      />
    </div>
  );
}

export default App;
