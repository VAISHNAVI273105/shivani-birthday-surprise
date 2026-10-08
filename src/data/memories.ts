export interface Memory {
  id: number;
  image: string;
  title: string;
  caption: string;
  date?: string;
  category?: 'classic' | 'funny' | 'unplanned' | 'special' | 'travel';
  rotation?: number; // Polaroid angle tilt
  highlight?: boolean;
}

/**
 * CENTRALIZED PHOTO CONFIGURATION FILE
 * Updated to point to Shivani & Vaishnavi's real photos (.jpeg) in /public/photos/
 */
export const memories: Memory[] = [
  {
    id: 1,
    image: "/photos/photo01.jpeg",
    title: "That Infectious Smile ❤️",
    caption: "The beginning of one of my absolute favorite memories together.",
    date: "The Early Days",
    category: "classic",
    rotation: -2,
    highlight: true
  },
  {
    id: 2,
    image: "/photos/photo02.jpeg",
    title: "Pure Unfiltered Chaos 😂",
    caption: "When we promised to be sane for 5 minutes and failed in 5 seconds.",
    date: "A Crazy Weekend",
    category: "funny",
    rotation: 3
  },
  {
    id: 3,
    image: "/photos/photo03.jpeg",
    title: "Unplanned Coffee Run ☕",
    caption: "Came for 15 minutes of coffee, stayed for 3 hours of deep gossip.",
    date: "Sunny Afternoon",
    category: "unplanned",
    rotation: -1
  },
  {
    id: 4,
    image: "/photos/photo04.jpeg",
    title: "The Iconic Reaction 😭",
    caption: "That exact face Shivani makes whenever something unbelievable happens.",
    date: "Random Memory",
    category: "funny",
    rotation: 2
  },
  {
    id: 5,
    image: "/photos/photo05.jpeg",
    title: "Golden Hour Glow ✨",
    caption: "Sunsets hit different when you're laughing until your stomach hurts.",
    date: "Golden Evening",
    category: "special",
    rotation: -3,
    highlight: true
  },
  {
    id: 6,
    image: "/photos/photo06.jpeg",
    title: "Late Night Secrets 🌙",
    caption: "Talking about everything and nothing until 2 AM in the morning.",
    date: "Late Night Vibes",
    category: "special",
    rotation: 1
  },
  {
    id: 7,
    image: "/photos/photo07.jpeg",
    title: "Road Trip Madness 🚗",
    caption: "Screaming the wrong lyrics to our favorite song with 100% confidence.",
    date: "Weekend Gateway",
    category: "travel",
    rotation: -2
  },
  {
    id: 8,
    image: "/photos/photo08.jpeg",
    title: "Always Hungry Duo 🍦",
    caption: "Food is 90% of our friendship motivation, no cap!",
    date: "Foodie Diaries",
    category: "funny",
    rotation: 4
  },
  {
    id: 9,
    image: "/photos/photo09.jpeg",
    title: "Effortlessly Cute 🌸",
    caption: "Just a candid shot of Shivani being her adorable natural self.",
    date: "Candid Moment",
    category: "classic",
    rotation: -1
  },
  {
    id: 10,
    image: "/photos/photo10.jpeg",
    title: "Double Trouble 👯‍♀️",
    caption: "When two chaotic minds combine, history is made.",
    date: "Bestie Day Out",
    category: "funny",
    rotation: 2,
    highlight: true
  },
  {
    id: 11,
    image: "/photos/photo11.jpeg",
    title: "The Laugh That Cures Everything 💖",
    caption: "No matter how tough a day is, your laugh makes everything lighter.",
    date: "Heartfelt Memory",
    category: "special",
    rotation: -3
  },
  {
    id: 12,
    image: "/photos/photo12.jpeg",
    title: "Random Shopping Spree 🛍️",
    caption: "We bought nothing useful, but had the absolute best time.",
    date: "Mall Adventures",
    category: "unplanned",
    rotation: 1
  },
  {
    id: 13,
    image: "/photos/photo13.jpeg",
    title: "The Overthinker in Action 🤔",
    caption: "Captured right when Shivani was analyzing a 2-word text message.",
    date: "Classic Shivani",
    category: "funny",
    rotation: -2
  },
  {
    id: 14,
    image: "/photos/photo14.jpeg",
    title: "Rainy Day Memories 🌧️",
    caption: "Warm chai, cozy weather, and endless conversations.",
    date: "Monsoon Magic",
    category: "special",
    rotation: 3
  },
  {
    id: 15,
    image: "/photos/photo15.jpeg",
    title: "Stunning & Slaying ✨",
    caption: "Dressed up and ready to take over the world!",
    date: "Celebration Night",
    category: "classic",
    rotation: -1,
    highlight: true
  },
  {
    id: 16,
    image: "/photos/photo16.jpeg",
    title: "Inside Joke #47 😂",
    caption: "Nobody else in the room understood why we couldn't stop wheezing.",
    date: "Secret Joke",
    category: "funny",
    rotation: 2
  },
  {
    id: 17,
    image: "/photos/photo17.jpeg",
    title: "Soft Sunset Strolls 🌅",
    caption: "Walking slowly and feeling thankful for having a friend like you.",
    date: "Peaceful Evening",
    category: "travel",
    rotation: -3
  },
  {
    id: 18,
    image: "/photos/photo18.jpeg",
    title: "The Comfort Zone 💕",
    caption: "Where silence is never awkward and being silly is compulsory.",
    date: "Bestie Energy",
    category: "classic",
    rotation: 1
  },
  {
    id: 19,
    image: "/photos/photo19.jpeg",
    title: "Photobomb Masterpiece 📸",
    caption: "Trying to take a serious photo and ending up with pure comedy.",
    date: "Silly Moments",
    category: "funny",
    rotation: -2
  },
  {
    id: 20,
    image: "/photos/photo20.jpeg",
    title: "Radiant Vibes 🌟",
    caption: "You bring so much light and joy into every room you step into.",
    date: "Pure Joy",
    category: "special",
    rotation: 3,
    highlight: true
  },
  {
    id: 21,
    image: "/photos/photo21.jpeg",
    title: "Unfiltered Reality 🙈",
    caption: "100 photos taken, 1 selected, 99 funny bloopers stored forever.",
    date: "Behind the Scenes",
    category: "funny",
    rotation: -1
  },
  {
    id: 22,
    image: "/photos/photo22.jpeg",
    title: "Sweetest Soul 🌷",
    caption: "Kind, caring, genuine, and always there when needed most.",
    date: "Precious Moment",
    category: "special",
    rotation: 2
  },
  {
    id: 23,
    image: "/photos/photo23.jpeg",
    title: "Unplanned Celebration 🎉",
    caption: "Who needs an occasion when we have good vibes and ice cream?",
    date: "Random Tuesday",
    category: "unplanned",
    rotation: -3
  },
  {
    id: 24,
    image: "/photos/photo24.jpeg",
    title: "The Main Character Energy 👑",
    caption: "Looking like a movie poster without even trying!",
    date: "Iconic Frame",
    category: "classic",
    rotation: 1
  },
  {
    id: 25,
    image: "/photos/photo25.jpeg",
    title: "Forever Memory ❤️",
    caption: "Here's to a lifetime of more laughs, adventures, and nonsense together.",
    date: "To Infinity & Beyond",
    category: "special",
    rotation: -2,
    highlight: true
  }
];

export const heroPhoto = "/photos/photo15.jpeg"; // Main featured photo for birthday reveal hero
