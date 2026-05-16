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
  {
    slug: "lunarium",
    intro: [
      "Lunarium is a premium Android moon phase tracker built around the rhythms, folklore, and superstitions of the Victorian era — designed for anyone curious about the night sky, but crafted to feel like a leather-bound almanac rather than a weather widget.",
      "The name comes from the Latin luna — moon. A lunarium was the instrument natural philosophers used to chart the moon's movement through the heavens. That is exactly what this app is.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most moon phase apps show a percentage and a generic icon. Lunarium renders the moon as it actually appears tonight — a mathematically precise shadow terminator curving across a detailed lunar surface, waxing or waning correctly — and pairs it with a rotating almanac of authentic Victorian-voice entries drawn from the agricultural and medical superstitions of the 1880s and 1890s. The full moon triggers a Lunacy Alert. The new moon counsels rest. Every phase has something to say.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The Today screen gives you the moon's current phase, illumination, age, distance, moonrise, and moonset — all calculated on-device with no API calls or network dependency. The Calendar screen maps the full lunar cycle across any month. Legends draws on genuine historical folklore. History surfaces what happened under this same moon phase a century ago. Everything rotates daily so the almanac never repeats.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Deep navy, aged ivory, antique gold. Playfair Display for headings, IM Fell English for the almanac text — a typeface with genuine historical roots in a 1600s Italian punch-cutter. The background shifts from near-black at new moon to a rich midnight blue at full. It feels like something found in a secondhand bookshop, not downloaded from the Play Store.",
        ],
      },
    ],
  },
  {
    slug: "veracitor",
    intro: [
      "Veracitor is a fact-checking app for the age of misinformation — built for anyone who has read a headline, a social media post, or a forwarded message and wondered whether it was actually true.",
      "The name comes from the Latin verax — truthful, honest, accurate. It is the root of the word veracious. The app does exactly what the name promises.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most fact-checking tools return a link to a third-party site and leave the user to do the work. Veracitor passes the claim through Claude AI, which breaks it down component by component — identifying every sub-claim, checking each one independently, and citing its sources. The result is not just a verdict but a full explanation: what is true, what is misleading, what is fabricated, and why. Confidence is scored. Sources are named.",
          "It is also country-aware. A claim about NHS waiting times means something different to someone in Leeds than to someone in Texas. Veracitor uses the user's location to prioritise relevant sources and apply the right context — population-adjusted figures, local publication standards, regional date formats.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The user pastes or types a claim — a news headline, a statistic, a politician's quote, a WhatsApp message — and hits Check. The app returns a verdict of TRUE, PARTLY TRUE, FALSE, or MISLEADING, with a source-backed breakdown of every component. Free users get five checks a day. Pro users get unlimited checks, full history, and priority processing.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Clean white and slate grey, with verdict colours that carry clear meaning without being garish. No noise, no clutter. The result is designed to be read quickly and trusted completely.",
        ],
      },
    ],
    pricing:
      "Free — 5 fact checks per day. Veracitor Pro £2.99/month — unlimited checks, full history, and priority processing.",
  },
  {
    slug: "describr",
    intro: [
      "Describr is a premium Android accessibility app that turns a phone camera into a seeing companion — built for people with visual impairment, but designed to feel like a tool you'd choose, not one prescribed to you.",
      "The name is exactly what it does. Point. Describe.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most magnifier apps stop at zoom. Describr layers three capabilities on top of each other in a single, uncluttered screen. The camera magnifies and freezes live frames for closer inspection. Google ML Kit reads any visible text aloud entirely on-device, with no data leaving the phone. And when the user wants to know more than the words — what's in the scene, what's on the packaging, what the photo shows — Claude AI describes it in plain, natural language, spoken aloud immediately.",
          "No switching apps. No uploading to unknown servers. No learning curve.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The live viewfinder is always on. Pinch to zoom up to 8×. Tap freeze to hold a frame and examine it with independent pan and zoom. Tap Read Text to hear whatever is in shot. Tap Describe to get a full spoken description of the image from Claude, delivered in seconds.",
          "OCR runs entirely on-device via ML Kit — text is never transmitted. Images sent for AI description are compressed, anonymised, and discarded immediately after the response is returned. The device ID used for quota tracking contains no personal information.",
        ],
      },
      {
        title: "For people who need more support",
        paragraphs: [
          "Pro and Pro+ subscriptions unlock OCR and AI descriptions for users who rely on them daily. Unlimited AI descriptions are available on Pro+. A yearly plan is offered for those who want the full experience at a lower monthly cost.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Built to be used one-handed, in poor light, in a hurry. The buttons are large, the layout is sparse, and the app gets out of the way. It never feels clinical.",
        ],
      },
    ],
    pricing:
      "Free — 10 AI descriptions per month, unlimited magnification and on-device OCR. Pro £1.99/month — 100 AI descriptions. Pro+ £3.99/month — unlimited AI descriptions.",
  },
  {
    slug: "togetherly",
    intro: [
      "Togetherly is a quiet check-in app for families who worry — built for elderly or disabled people who live alone, and the relatives who think about them throughout the day. It is not a tracker, a monitoring system, or a panic button. It is a gentle, daily signal that says I'm here.",
    ],
    sections: [
      {
        title: "The name",
        paragraphs: [
          "Together, but apart. The suffix echoes the way the app works: two people in different places, connected by something small and human.",
        ],
      },
      {
        title: "What makes it different",
        paragraphs: [
          "Most family safety apps feel like surveillance. They require accounts, permissions, location sharing, and dashboards. Togetherly asks for none of that. A shared six-character code is all it takes — no login, no profile, no data beyond what matters. One person taps a button. Someone who loves them sees it.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The primary person has three buttons: I'm Okay, I Need Help, and SOS. They can also share a mood and a short needs list — a way of saying I could use some shopping or I'm having a hard week without having to say it out loud. The family member's screen updates in real time. If no check-in comes within a configurable window — six hours, twenty-four, forty-eight — a push notification goes out automatically.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Calm blue, soft white, generous text. No medical aesthetic. No red alerts unless they're needed. The primary person's screen has three large buttons and nothing else. It should feel like leaving a light on, not wearing a tag.",
        ],
      },
    ],
    pricing:
      "Free — one connection, standard check-in window. Togetherly Care £2.49/month — multiple connections, custom check-in windows, and priority SOS notifications.",
  },
];

export function getAppDetail(slug: string): AppDetail | undefined {
  return appDetails.find((d) => d.slug === slug);
}
