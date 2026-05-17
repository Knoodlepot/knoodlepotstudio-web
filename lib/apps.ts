export type AppStatus = "live" | "coming-soon" | "in-development";
export type AppCategory = "nature" | "lore" | "utility" | "fun";

export interface App {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  status: AppStatus;
  category: AppCategory;
  platform: string;
  link?: string;
  linkLabel?: string;
  productHuntPostId?: string;
  productHuntSlug?: string;
  playStoreUrl?: string;
  alternativeToUrl?: string;
  privacyPath?: string;
  termsPath?: string;
}

export interface Section {
  id: AppCategory;
  label: string;
  tagline: string;
}

export const sections: Section[] = [
  { id: "nature", label: "Nature", tagline: "Apps rooted in the living world" },
  { id: "lore", label: "Lore", tagline: "Myth, place, and the patterns of the sky" },
  { id: "utility", label: "Utility", tagline: "Tools built with purpose and craft" },
  { id: "fun", label: "Fun", tagline: "For the joy of it" },
];

/* Status sort order for within-section hierarchy */
export const statusOrder: Record<AppStatus, number> = {
  live: 0,
  "in-development": 1,
  "coming-soon": 2,
};

export const apps: App[] = [
  /* ── Nature ── */
  {
    name: "Floriography",
    slug: "floriography",
    tagline: "The language of flowers",
    description:
      "Photograph a flower and discover its Victorian meaning. AI-powered identification with poetic stories and a personal garden journal.",
    status: "live",
    category: "nature",
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.knoodlepotstudio.floriography",
    alternativeToUrl: "https://alternativeto.net/software/floriography/about/",
    privacyPath: "/floriography/privacy",
    termsPath: "/floriography/terms",
  },
  {
    name: "Naturlore",
    slug: "naturlore",
    tagline: "Nature's hidden knowledge",
    description:
      "Explore the folklore, mythology, and natural history woven into the plants, creatures, and landscapes around you.",
    status: "in-development",
    category: "nature",
    platform: "Android",
    privacyPath: "/naturlore/privacy",
    termsPath: "/naturlore/terms",
  },

  /* ── Lore ── */
  {
    name: "Greenman",
    slug: "greenman",
    tagline: "Folk craft & the old tradition",
    description:
      "A British folk craft reference app — a working grimoire of herbs, spells, crystals, and lore drawn from the tradition as it was actually practised in these islands.",
    status: "live",
    category: "lore",
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.greenman.app",
    alternativeToUrl: "https://alternativeto.net/software/greenman/about/",
    productHuntPostId: "1147540",
    productHuntSlug: "greenman",
    privacyPath: "/greenman/privacy",
    termsPath: "/greenman/terms",
  },
  {
    name: "Lunarium",
    slug: "lunarium",
    tagline: "Moon, myth & sky",
    description:
      "A moon phase and celestial lore app steeped in mythology and the rhythms of the natural world.",
    status: "coming-soon",
    category: "lore",
    platform: "Android",
    privacyPath: "/lunarium/privacy",
    termsPath: "/lunarium/terms",
  },

  /* ── Utility ── */
  {
    name: "Lunettes",
    slug: "lunettes",
    tagline: "Every book, given a voice",
    description:
      "A premium AI reading app for dyslexia, visual impairment, and ADHD — built to feel like a luxury product. Claude reads emotional context; ElevenLabs delivers it with matching pitch, pace, and tone. A chase scene sounds like a chase scene.",
    status: "in-development",
    category: "utility",
    platform: "Android",
    privacyPath: "/lunettes/privacy",
    termsPath: "/lunettes/terms",
  },
  {
    name: "Describr",
    slug: "describr",
    tagline: "See the world described",
    description:
      "An Android app that uses AI to generate rich descriptions of the world around you.",
    status: "in-development",
    category: "utility",
    platform: "Android",
    privacyPath: "/describr/privacy",
    termsPath: "/describr/terms",
  },
  {
    name: "Veracitor",
    slug: "veracitor",
    tagline: "Truth, examined",
    description:
      "Submit any claim and receive a clear AI-powered verdict. Fact-checking made simple and accessible.",
    status: "coming-soon",
    category: "utility",
    platform: "Android",
    privacyPath: "/veracitor/privacy",
    termsPath: "/veracitor/terms",
  },
  {
    name: "Togetherly",
    slug: "togetherly",
    tagline: "Stay connected, stay coordinated",
    description:
      "A shared planning app for families and groups. Coordinate schedules, share updates, and stay in sync — wherever you are.",
    status: "coming-soon",
    category: "utility",
    platform: "Android",
    privacyPath: "/togetherly/privacy",
    termsPath: "/togetherly/terms",
  },

  /* ── Fun ── */
  {
    name: "Plain English, Please.",
    slug: "plain-english-please",
    tagline: "Clarity from complexity",
    description:
      "Paste any dense, jargon-filled text and get it translated into plain, readable English — instantly.",
    status: "live",
    category: "fun",
    platform: "Android",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.knoodlepotstudio.plainenglish",
    privacyPath: "/plain-english-please/privacy",
    termsPath: "/plain-english-please/terms",
  },
];

export const statusLabel: Record<AppStatus, string> = {
  live: "Available",
  "in-development": "In Development",
  "coming-soon": "In Design",
};

export const statusColour: Record<AppStatus, string> = {
  live: "#2d6a4f",
  "in-development": "#4a3a6b",
  "coming-soon": "#6b4e2a",
};
