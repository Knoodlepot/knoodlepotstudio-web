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
          "Most text-to-speech apps just read words aloud in a flat, robotic voice. Lunettes passes the text through Claude AI first, which detects the emotional context of what's being read — tension, grief, romance, humour, panic — and generates delivery instructions. ElevenLabs then narrates with matching pitch, pace, and tone. A chase scene sounds like a chase scene. A quiet moment sounds quiet. No other TTS app does this.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Overlay mode sits invisibly on top of Kindle or any ebook app. The user presses Play, the screen dims to near-black (appearing off, but keeping the reading service running), and the app reads whatever is on screen — turning pages automatically, completely hands-free. No DRM is touched; it reads only what's already displayed, which is fully legal under the Marrakesh Treaty 2018.",
          "Import mode lets users bring their own DRM-free EPUBs or PDFs — Project Gutenberg titles, sideloaded books — directly into the app.",
        ],
      },
      {
        title: "For people who need more support",
        paragraphs: [
          "A Family Helper account lets a carer, parent, or friend remotely set up the next book and adjust voice settings from anywhere, with the reader's explicit real-time consent before anything changes. Real-time translation into any language is also built in — useful for non-native speakers and the Japanese manga community.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Dark navy, warm cream, soft gold. Cormorant Garamond for headings and reading text, DM Sans for controls. Literary, calm, and confident. The hand can find the play button in the dark. It never feels like a medical device.",
        ],
      },
    ],
  },
  {
    slug: "greenman",
    intro: [
      "Greenman is a British folk craft reference app — a grimoire for the tradition as it was actually practised in these islands, not the generic Wicca exported everywhere else. It is built for people who take the craft seriously: a working reference, not a novelty.",
      "The name comes from the carved foliate faces found in medieval English churches — a figure neither fully human nor fully wild, watching from the margins of the sacred. That tension between the old world and the present one is what the app lives in.",
    ],
    sections: [
      {
        title: "What makes it different",
        paragraphs: [
          "Most witchcraft apps are spell generators or mood boards. Greenman is a library. The herb section covers 130 plants with folk names, magical properties, historical uses in British craft, and cautions. The crystal library runs to 150 entries. The spells section holds over 300 workings drawn from documented tradition. There is a written history of British witchcraft from the Neolithic to the present day — nine eras, no hagiography. None of this is invented. If the tradition does not record it, the app does not include it.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "The Grimoire is the reference library — herbs, crystals, spells, folk beliefs, omens, symbolism, witch marks, historic witches, and artefacts. The Wheel covers the sabbats, moon phases, and the Triple Goddess. The Trail gives GPS coordinates and directions to ten real sacred sites across Britain, from Pendle to Avebury. The Cunning adds AI guidance grounded strictly in the sources within the app — it will not invent folklore, and it redirects non-British queries to British equivalents.",
        ],
      },
      {
        title: "Pricing",
        paragraphs: [
          "Free access is genuinely useful — 10 spells per category, 20 herbs, 30 crystals, all eight sabbats, the full history, all ten trail locations, and the Beginner's Path. No upsell banners. Free users are not second class.",
          "Hedgewalker (£4.99 one-off) unlocks the full library — all 300+ spells, the complete herb and crystal entries, full sabbat rituals, moon workings, rites of passage, and solitary practice framework. One payment, permanent access.",
          "The Cunning (£2.00/month, add-on) unlocks the AI features: Ask the Hedgewitch, Plant Recognition, Ritual Builder, Crystal & Spell Matcher, Seasonal Guidance, Triple Goddess Guidance, and the Charging Station.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Deep forest green, aged gold, dark bark. The content is spare and direct — no romantic padding, no invented atmosphere. The tradition has enough of its own.",
        ],
      },
    ],
  },
  {
    slug: "naturlore",
    intro: [
      "Naturlore is a nature folklore app for Android — point your camera at any plant, creature, fungus, or insect, and discover the myths, history, and living lore that surrounds it. Not a field guide. Not a species database. Something older.",
    ],
    sections: [
      {
        title: "The name",
        paragraphs: [
          "Lore is the body of knowledge passed down through generations — not textbooks, but stories. The things your grandmother knew about elderflowers. What sailors believed about albatrosses. Why oak trees appear in a hundred English place names. Naturlore gathers that living tradition and puts it in your pocket.",
        ],
      },
      {
        title: "What makes it different",
        paragraphs: [
          "Most nature apps tell you what something is. Naturlore tells you what it means. When you photograph a common oak, you don't get a Wikipedia summary — you get its mythology, its historical uses, the superstitions attached to it, the misconceptions people have carried for centuries, and a verse of poetry. Then the oak itself speaks to you in a short, vivid message written as if the species has a voice.",
          "Every entry is written in the style of a regional literary tradition — British entries read like Bill Bryson meets Robert Macfarlane. Japanese entries carry the quiet of Bashō. Arabic entries draw from Al-Jahiz. The same oak, told in French, is an entirely different cultural experience.",
        ],
      },
      {
        title: "How it works",
        paragraphs: [
          "Photograph something, or pick from your camera roll. Claude AI identifies the species and generates a full lore entry — true facts, mythology, folklore, historical stories, a poem, and seasonal notes — then caches it permanently. The second person to find the same species anywhere in the world gets it instantly, from the archive. First discoveries are credited by username, permanently.",
        ],
      },
      {
        title: "The Field Journal",
        paragraphs: [
          "Every species you identify is saved to your personal Field Journal, sorted by rarity — Common through to Exceptional. The Browse tab is a growing encyclopedia of everything the community has discovered, organised by category: Flowers, Trees, Fungi, Buggie Boo's. It starts sparse and fills as people explore.",
        ],
      },
      {
        title: "The feel",
        paragraphs: [
          "Deep forest green, warm aged cream, burnt amber. Serif headings, mono labels, hand-press sensibility. It should feel like a Victorian naturalist's notebook, not a utility app. The rarity system — with its coloured badges and first-discovery credits — quietly makes wandering outside feel like an adventure.",
        ],
      },
    ],
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
  },
];

export function getAppDetail(slug: string): AppDetail | undefined {
  return appDetails.find((d) => d.slug === slug);
}
