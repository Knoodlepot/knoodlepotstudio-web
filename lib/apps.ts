export type AppStatus = "live" | "coming-soon" | "in-development";

export interface App {
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  link?: string;
  linkLabel?: string;
  platform: string;
  productHuntPostId?: string;
  productHuntSlug?: string;
}

export const apps: App[] = [
  {
    name: "Floriography",
    tagline: "The language of flowers",
    description:
      "Photograph a flower and discover its Victorian meaning. AI-powered identification with poetic stories and a personal garden journal.",
    status: "in-development",
    platform: "Android",
  },
  {
    name: "Greenman",
    tagline: "Trails & wilderness, mapped",
    description:
      "A hiking trail reference app with location mapping and route information for walkers and explorers.",
    status: "live",
    platform: "Android",
    productHuntPostId: "1147540",
    productHuntSlug: "greenman",
  },
  {
    name: "Describr",
    tagline: "See the world described",
    description:
      "An Android app that uses AI to generate rich descriptions of the world around you.",
    status: "in-development",
    platform: "Android",
  },
  {
    name: "Veracitor",
    tagline: "Truth, examined",
    description:
      "Submit any claim and receive a clear AI-powered verdict. Fact-checking made simple and accessible.",
    status: "live",
    platform: "Android",
  },
  {
    name: "Plain English, Please",
    tagline: "Clarity from complexity",
    description:
      "Paste any dense, jargon-filled text and get it translated into plain, readable English — instantly.",
    status: "live",
    platform: "Android",
  },
  {
    name: "Lunarium",
    tagline: "Moon, myth & sky",
    description:
      "A moon phase and celestial lore app steeped in mythology and the rhythms of the natural world.",
    status: "coming-soon",
    platform: "Android",
  },
  {
    name: "Naturlore",
    tagline: "Nature's hidden knowledge",
    description:
      "Explore the folklore, mythology, and natural history woven into the plants, creatures, and landscapes around you.",
    status: "coming-soon",
    platform: "Android",
  },
];

export const statusLabel: Record<AppStatus, string> = {
  live: "Available",
  "coming-soon": "Coming Soon",
  "in-development": "In Development",
};

export const statusColour: Record<AppStatus, string> = {
  live: "#2d6a4f",
  "coming-soon": "#6b4e2a",
  "in-development": "#4a3a6b",
};
