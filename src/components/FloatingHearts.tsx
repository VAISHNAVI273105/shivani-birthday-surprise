import React from 'react';

export const FloatingHearts: React.FC = () => {
  const elements = [
    { id: 1, left: '5%', duration: '18s', delay: '0s', size: '18px', icon: '💖' },
    { id: 2, left: '15%', duration: '22s', delay: '3s', size: '14px', icon: '✨' },
    { id: 3, left: '25%', duration: '16s', delay: '5s', size: '20px', icon: '🌸' },
    { id: 4, left: '40%', duration: '25s', delay: '1s', size: '16px', icon: '💗' },
    { id: 5, left: '55%', duration: '19s', delay: '7s', size: '22px', icon: '✨' },
    { id: 6, left: '70%', duration: '21s', delay: '2s', size: '15px', icon: '💕' },
    { id: 7, left: '85%', duration: '17s', delay: '4s', size: '18px', icon: '💖' },
    { id: 8, left: '92%', duration: '24s', delay: '6s', size: '14px', icon: '✨' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-pink-200/40 via-rose-100/30 to-transparent blur-3xl animate-ambient-glow" />
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-purple-200/30 via-pink-100/30 to-transparent blur-3xl animate-ambient-glow" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-t from-rose-200/30 via-orange-100/20 to-transparent blur-3xl animate-ambient-glow" style={{ animationDelay: '-2s' }} />

      {/* Floating Gentle Icons */}
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-[-50px] opacity-0 animate-[floatUp_20s_linear_infinite]"
          style={{
            left: el.left,
            animationDuration: el.duration,
            animationDelay: el.delay,
            fontSize: el.size
          }}
        >
          {el.icon}
        </div>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) scale(1.1) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
