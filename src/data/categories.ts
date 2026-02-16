export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  bgColor: string;
  accentColor: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Action Figures",
    slug: "action-figures",
    icon: "🦸",
    description: "Superheroes, characters & collectible figures",
    bgColor: "hsl(0, 85%, 95%)",
    accentColor: "hsl(0, 85%, 65%)",
  },
  {
    id: "2",
    name: "Educational & STEM",
    slug: "educational-stem",
    icon: "🧪",
    description: "Learning toys, science kits & brain teasers",
    bgColor: "hsl(200, 85%, 95%)",
    accentColor: "hsl(200, 85%, 55%)",
  },
  {
    id: "3",
    name: "Outdoor & Sports",
    slug: "outdoor-sports",
    icon: "⚽",
    description: "Bikes, balls, sports gear & outdoor fun",
    bgColor: "hsl(120, 70%, 93%)",
    accentColor: "hsl(120, 65%, 45%)",
  },
  {
    id: "4",
    name: "Building & Construction",
    slug: "building-construction",
    icon: "🧱",
    description: "Blocks, LEGO sets & construction kits",
    bgColor: "hsl(35, 85%, 93%)",
    accentColor: "hsl(35, 85%, 55%)",
  },
  {
    id: "5",
    name: "Dolls & Playsets",
    slug: "dolls-playsets",
    icon: "🏠",
    description: "Dolls, playhouses & pretend play sets",
    bgColor: "hsl(330, 70%, 95%)",
    accentColor: "hsl(330, 70%, 60%)",
  },
  {
    id: "6",
    name: "Board Games & Puzzles",
    slug: "board-games-puzzles",
    icon: "🧩",
    description: "Family games, puzzles & card games",
    bgColor: "hsl(260, 70%, 95%)",
    accentColor: "hsl(260, 70%, 60%)",
  },
  {
    id: "7",
    name: "Remote Control",
    slug: "remote-control",
    icon: "🏎️",
    description: "RC cars, drones & electronic toys",
    bgColor: "hsl(14, 80%, 94%)",
    accentColor: "hsl(14, 80%, 55%)",
  },
  {
    id: "8",
    name: "Baby & Toddler",
    slug: "baby-toddler",
    icon: "👶",
    description: "Safe & colorful toys for little ones",
    bgColor: "hsl(180, 60%, 93%)",
    accentColor: "hsl(180, 60%, 45%)",
  },
  {
    id: "9",
    name: "Arts & Crafts",
    slug: "arts-crafts",
    icon: "🎨",
    description: "Paint sets, craft kits & creative supplies",
    bgColor: "hsl(45, 85%, 93%)",
    accentColor: "hsl(45, 85%, 50%)",
  },
  {
    id: "10",
    name: "Vehicles & Ride-Ons",
    slug: "vehicles",
    icon: "🚗",
    description: "Toy cars, trains & ride-on toys",
    bgColor: "hsl(220, 70%, 95%)",
    accentColor: "hsl(220, 70%, 55%)",
  },
];
