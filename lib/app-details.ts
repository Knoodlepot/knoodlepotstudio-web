export interface AppSection {
  title: string;
  paragraphs: string[];
}

export interface AppDetail {
  slug: string;
  intro: string[];
  sections: AppSection[];
  pricing?: string;
}

export const appDetails: AppDetail[] = [
  {
    slug: "floriography",
    intro: [
      "Floriography is a Victorian flower identification and journaling app — point your camera at any flower and receive its name, its hidden meaning in the language of flowers, and a hand-crafted poetic story written in the spirit of the age. Every flower you find is pressed into a personal garden journal, yours to keep forever.",
      "The name comes from the Victorian practice of communicating through flowers — a secret language spoken not in words, but in petals. A red rose meant one thing. A sprig of rosemary in a mourning glove said what grief could not.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most plant identification apps return a name and a Wikipedia paragraph. Floriography passes every identification through Claude AI, which generates a full narrative — the flower's Victorian symbolism, its history, and a verse written as if from the era itself. The result reads like a page from a naturalist's journal, not a database entry.",
        ],
      },
      {
        title: "Beyond identification",
        paragraphs: [
          "The Dark Bouquet Builder lets you compose arrangements with intent — grief, warning, contempt, farewell — drawing on flowers the Victorians used to say the unsayable. A Garden Map tracks 49 historic gardens worldwide, each with a collectible stamp earned by visiting in person. Poison gardens, mourning gardens, and legendary botanical sites across 11 regions.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Cream, deep green, and gold. Playfair Display and Lora throughout. Every screen feels like a page from a Victorian botanical press. It never feels like a utility app.",
        ],
      },
    ],
    pricing:
      "Free — 5 flower stories per month. Bloom subscription £3.99/month — unlimited identifications, full journal, location tagging, PDF export, and audio narration mode.",
  },
];

export function getAppDetail(slug: string): AppDetail | undefined {
  return appDetails.find((d) => d.slug === slug);
}
