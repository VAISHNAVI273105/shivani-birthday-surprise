// Web Audio Synthesizer fallback + HTML5 Audio Player for birthday-song.mp3

class BackgroundMusicController {
  private audio: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private isSynthesizing = false;
  private synthInterval: number | null = null;
  private isPlaying = false;
  private currentNoteIndex = 0;

  // Gentle acoustic music box notes (Happy Birthday melody transposed to pastel soft frequencies)
  private melodyNotes = [
    { note: 261.63, duration: 0.4 }, // C4
    { note: 261.63, duration: 0.4 }, // C4
    { note: 293.66, duration: 0.8 }, // D4
    { note: 261.63, duration: 0.8 }, // C4
    { note: 349.23, duration: 0.8 }, // F4
    { note: 329.63, duration: 1.2 }, // E4

    { note: 261.63, duration: 0.4 }, // C4
    { note: 261.63, duration: 0.4 }, // C4
    { note: 293.66, duration: 0.8 }, // D4
    { note: 261.63, duration: 0.8 }, // C4
    { note: 392.00, duration: 0.8 }, // G4
    { note: 349.23, duration: 1.2 }, // F4

    { note: 261.63, duration: 0.4 }, // C4
    { note: 261.63, duration: 0.4 }, // C4
    { note: 523.25, duration: 0.8 }, // C5
    { note: 440.00, duration: 0.8 }, // A4
    { note: 349.23, duration: 0.8 }, // F4
    { note: 329.63, duration: 0.8 }, // E4
    { note: 293.66, duration: 1.2 }, // D4

    { note: 466.16, duration: 0.4 }, // Bb4
    { note: 466.16, duration: 0.4 }, // Bb4
    { note: 440.00, duration: 0.8 }, // A4
    { note: 349.23, duration: 0.8 }, // F4
    { note: 392.00, duration: 0.8 }, // G4
    { note: 349.23, duration: 1.4 }, // F4
  ];

  constructor() {
    if (typeof window !== 'undefined') {
      this.audio = new Audio('/music/birthday-song.mp3');
      this.audio.loop = true;
      this.audio.volume = 0.6;
    }
  }

  public async play(): Promise<boolean> {
    if (!this.audio) return false;

    try {
      // Try playing mp3 file first
      await this.audio.play();
      this.isPlaying = true;
      this.isSynthesizing = false;
      return true;
    } catch (e) {
      console.warn("MP3 playback fallback to Web Audio Synth", e);
      // Fallback to soothing Web Audio synth melody
      this.startSynthMelody();
      this.isPlaying = true;
      return true;
    }
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
    if (this.isSynthesizing) {
      this.stopSynthMelody();
    }
    this.isPlaying = false;
  }

  public toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.pause();
      return Promise.resolve(false);
    } else {
      return this.play();
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private startSynthMelody() {
    if (typeof window === 'undefined') return;
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new AudioCtx();
    }

    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    this.isSynthesizing = true;
    this.playNextSynthNote();
  }

  private playNextSynthNote = () => {
    if (!this.isSynthesizing || !this.audioContext) return;

    const item = this.melodyNotes[this.currentNoteIndex];
    this.playChimeNote(item.note, item.duration);

    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melodyNotes.length;

    // Schedule next note
    this.synthInterval = window.setTimeout(() => {
      if (this.isSynthesizing) {
        this.playNextSynthNote();
      }
    }, item.duration * 1000 + 100);
  };

  private playChimeNote(freq: number, duration: number) {
    if (!this.audioContext) return;

    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    osc.type = 'sine'; // Soft sine wave for music box / piano chime feel
    osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

    // Envelope for soft chime decay
    gain.gain.setValueAtTime(0.01, this.audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, this.audioContext.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.audioContext.destination);

    osc.start();
    osc.stop(this.audioContext.currentTime + duration);
  }

  private stopSynthMelody() {
    this.isSynthesizing = false;
    if (this.synthInterval !== null) {
      clearTimeout(this.synthInterval);
      this.synthInterval = null;
    }
  }
}

export const musicController = new BackgroundMusicController();
