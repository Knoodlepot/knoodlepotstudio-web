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
  {
    slug: "lunettes",
    intro: [
      "Lunettes is a premium Android reading app that gives every book a voice — designed specifically for people with dyslexia, visual impairment, ADHD, or any print disability, but built to feel like a luxury product rather than a medical tool.",
      "The name comes from the French word for spectacles, rooted in lune — moon. In architecture, a lunette is the small semicircular window above a door that lets light into a dark space. That is exactly what the app does.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most text-to-speech apps read words. Lunettes reads meaning. Every page is first analysed by Claude AI, which identifies the emotional register of the text — tension, grief, tenderness, urgency — and passes that context to ElevenLabs, which generates speech to match. A chase scene sounds like a chase scene. A letter of farewell is read as one.",
          "This is not a feature. It is the entire premise of the app.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Overlay mode works across any app on your phone — your Kindle, your browser, your email. Tap the Lunettes overlay, and whatever is on screen is read aloud with full emotional intelligence.",
          "Import mode lets you bring in your own documents, EPUBs, or PDFs. The app processes the full text, applies emotional analysis chapter by chapter, and reads the whole book from start to finish without interruption.",
        ],
      },
      {
        title: "For people who need more support",
        paragraphs: [
          "Lunettes includes a dyslexia-friendly font mode, adjustable reading speed, highlighted word tracking, and a sleep timer. Everything is adjustable. Nothing is buried.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Deep navy, warm cream, and soft gold. The interface is calm, uncluttered, and designed to feel like an expensive object. Because the people who need this app deserve something that treats them that way.",
        ],
      },
    ],
    pricing:
      "Free — 3 chapters per month with standard voice. Lunettes Premium £4.99/month — unlimited reading, emotional voice synthesis, overlay mode, import mode, and all voice profiles.",
  },
  {
    slug: "greenman",
    intro: [
      "Greenman is an Android hiking and trail reference app — a companion for walkers, explorers, and anyone who wants to understand the land beneath their feet. It combines location-aware trail mapping with route information, difficulty ratings, and curated notes on the natural and historical character of each path.",
      "The name is taken from the ancient figure of the Green Man — the leafy face carved into the stonework of medieval churches across Britain and Europe. Half wild, half sacred. A presence in the wood that knows every path.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most trail apps are databases. Greenman is a field companion. Routes are presented not just as lines on a map but with written character — the kind of path it is, what you will find there, what the land was once used for. Walking a route with Greenman feels like walking with someone who knows the area well.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Open the app and your location is shown against a curated map of nearby trails. Tap a route for full details — length, elevation, difficulty, surface type, and a written description. Save routes to your collection for offline access. Track your walk in real time with the live map view.",
        ],
      },
      {
        title: "Pricing",
        paragraphs: [
          "Free — access to all trail listings, basic map view, and route details.",
          "Greenman Trail Pass £2.99/month — offline maps, live GPS tracking, route saving, and elevation profiles.",
          "Lifetime pass available at £14.99.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Deep forest green, warm stone, and weathered gold. The typography is legible in direct sunlight. The interface is designed to work with muddy hands and a low battery. It feels like a well-made piece of outdoor kit.",
        ],
      },
    ],
  },
  {
    slug: "naturlore",
    intro: [
      "Naturlore is an Android app about the hidden knowledge layered into the natural world — the folklore, mythology, and ancient meaning woven into the plants, creatures, and landscapes that most people walk past without a second thought. Point your camera at what you find, and Naturlore tells you what the world once believed about it.",
    ],
    sections: [
      {
        title: "The name",
        paragraphs: [
          "Naturlore is a compound of nature and lore — the old English word for knowledge passed down through story, practice, and lived experience. Not the knowledge of textbooks, but the knowledge of people who lived close to the land for centuries and paid careful attention to what they found there.",
        ],
      },
      {
        title: "What makes it different",
        paragraphs: [
          "Plant and creature identification apps tell you what something is. Naturlore tells you what it meant. Every identification is passed through Claude AI, which draws on a deep library of folklore, mythology, herbalism, and natural history to generate a full lore entry — the beliefs attached to this plant across different cultures, the stories told about this creature, the uses it was put to, the warnings associated with it.",
          "The result is not a Wikipedia summary. It reads like a page from an old field guide written by someone who believed the world was full of meaning.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Photograph anything — a plant, a mushroom, an insect, a bird, a landscape feature. Naturlore identifies it and generates a lore entry. Each entry is saved to your Field Journal, building a personal record of everything you have found and what it once meant to the people who named it.",
        ],
      },
      {
        title: "The Field Journal",
        paragraphs: [
          "Every entry you collect is stored in a growing personal journal, organised by category and location. Over time it becomes a record of the places you have walked and the knowledge you have gathered — a lore-keeper's compendium, built one photograph at a time.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Aged parchment, forest green, and deep amber. Hand-drawn botanical illustration style throughout. The app is designed to feel like an artefact — something that belongs in a leather satchel alongside a field notebook and a compass.",
        ],
      },
    ],
    pricing:
      "Free — 5 lore entries per month. Naturlore Full Access £3.49/month — unlimited identifications, full Field Journal, location tagging, and offline lore library.",
  },
];

export function getAppDetail(slug: string): AppDetail | undefined {
  return appDetails.find((d) => d.slug === slug);
}
