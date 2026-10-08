import fs from 'fs';
import path from 'path';

const photosDir = path.join(process.cwd(), 'public', 'photos');

if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

const colors = [
  ['#ffecd2', '#fcb69f'],
  ['#ff9a9e', '#fecfef'],
  ['#a1c4fd', '#c2e9fb'],
  ['#e0c3fc', '#8ec5fc'],
  ['#f093fb', '#f5576c'],
  ['#f6d365', '#fda085'],
  ['#5ee7df', '#b490ca'],
  ['#d4fc79', '#96e6a1'],
  ['#ff9a9e', '#fecfef'],
  ['#fbc2eb', '#a6c1ee'],
];

const quotes = [
  "That unforgettable smile ✨",
  "Unplanned adventures 🚗",
  "Best moments with Shivani 💗",
  "Pure chaos & endless laughter 😂",
  "Coffee & deep talks ☕",
  "Golden hour memories 🌅",
  "Late night ice cream runs 🍦",
  "The iconic side-eye 👁️",
  "Forever memory saved 📸",
  "Double trouble duo 👯‍♀️",
  "Sunsets & soft music 🎵",
  "That one crazy story 🤫",
  "Bestie vibe check 💯",
  "Radiant energy ✨",
  "Making memories every day 🌸",
  "Inside jokes only we get 😂",
  "Laughter therapy session 💖",
  "Road trips & loud singing 🎤",
  "Grateful for this human 💕",
  "Unfiltered happiness 😊",
  "Partner in crime 🕵️‍♀️",
  "Sweetest soul 🌷",
  "A memory for a lifetime ⏳",
  "Smiles that brighten the room 🌟",
  "To Shivani, with love ❤️"
];

for (let i = 1; i <= 25; i++) {
  const numStr = i < 10 ? `0${i}` : `${i}`;
  const filename = `photo${numStr}.jpg`;
  const filePath = path.join(photosDir, filename);

  const gradient = colors[(i - 1) % colors.length];
  const quote = quotes[i - 1];

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${gradient[0]}" />
      <stop offset="100%" stop-color="${gradient[1]}" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="800" height="1000" fill="url(#grad${i})"/>
  <!-- Decorative floating circles -->
  <circle cx="150" cy="200" r="80" fill="#ffffff" opacity="0.2"/>
  <circle cx="650" cy="750" r="120" fill="#ffffff" opacity="0.15"/>
  <circle cx="700" cy="250" r="50" fill="#ffffff" opacity="0.2"/>
  
  <!-- Inner Polaroid Card -->
  <g filter="url(#shadow)">
    <rect x="80" y="100" width="640" height="800" rx="24" fill="#ffffff" opacity="0.92"/>
    <rect x="110" y="130" width="580" height="600" rx="16" fill="url(#grad${i})" opacity="0.85"/>
  </g>
  
  <!-- Icon / Photo Graphic Illustration -->
  <g transform="translate(400, 410)" text-anchor="middle">
    <text font-family="'Segoe UI', Roboto, sans-serif" font-size="90" fill="#ffffff" opacity="0.9" y="10">📸</text>
    <text font-family="'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="600" fill="#333333" y="140" letter-spacing="2">MEMORY #${numStr}</text>
  </g>

  <!-- Quote & Caption -->
  <text x="400" y="810" font-family="'Segoe UI', Roboto, sans-serif" font-size="32" font-weight="700" fill="#2d3748" text-anchor="middle">${quote}</text>
  <text x="400" y="855" font-family="'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="500" fill="#718096" text-anchor="middle">Shivani &amp; Vaishnavi • Photo ${numStr}</text>

  <!-- Sparkles -->
  <path d="M 160 170 Q 160 190 180 190 Q 160 190 160 210 Q 160 190 140 190 Q 160 190 160 170 Z" fill="#ffffff" opacity="0.8"/>
  <path d="M 640 680 Q 640 700 660 700 Q 640 700 640 720 Q 640 700 620 700 Q 640 700 640 680 Z" fill="#ffffff" opacity="0.8"/>
</svg>`;

  fs.writeFileSync(filePath, svgContent);
}

console.log('Successfully created 25 placeholder photos in public/photos/');
