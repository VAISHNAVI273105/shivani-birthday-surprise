import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export const CursorSparkles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Only run on desktop/devices with mouse pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const colors = ['#f472b6', '#fb7185', '#e879f9', '#c084fc', '#f43f5e'];
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle creation
      if (Math.random() > 0.3) return;

      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)]
      };

      setParticles((prev) => [...prev.slice(-15), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full animate-[ping_0.8s_ease-out_forwards]"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};
