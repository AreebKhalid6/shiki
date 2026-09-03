export const aboutHero = {
  label: "About Us",
  title: "Rooted in Respect\nfor Tradition.",
  italicLine: "Inspired by Innovation.",
  paragraphs: [
    "At Shiki, our journey is rooted in respect for tradition and a passion for innovation. Inspired by the rich heritage of sushi craftsmanship, we honor time-tested techniques while embracing modern creativity.",
    "Every detail is designed to help you slow down, savor, and stay awhile.",
  ],
  image: "/images/newhbg.png",
  imageAlt: "Shiki dining room with cherry blossom canopy",
} as const;

export const aboutHistory = {
  label: "Shiki History",
  title: "Where Wishes Leave\nImprints on Flavor",
  paragraphs: [
    "Shiki is an Asian-inspired restaurant and bar featuring sushi, libations, and hot Japanese food with a twist.",
    "The menu offers something for everyone—from sashimi, nigiri, sushi-maki, small plates, and entrees, to creative blends of Japanese and American cuisine with Cajun, Korean, Thai, Italian, and Indian influences.",
    "With a curated wine selection, house-made cocktails, and Chef Tom Buder's vision, Shiki delivers an Asian fusion experience that feels both familiar and new.",
  ],
} as const;

export const aboutChef = {
  label: "Our Chef",
  title: "Meet Our Chef",
  name: "Tom Buder",
  image: "/images/endctaone.png",
  imageAlt: "Chef Tom Buder of Shiki",
  paragraphs: [
    "With over three decades of dedication to his craft, Chef Tom Buder is recognized as a pioneer of sushi in Nebraska and the longest active sushi chef and mentor in Omaha.",
    "His culinary journey began at Sushi Ichiban, where he mastered sushi techniques under Chef Tony Asanuma.",
    "In 2002, Chef Tom co-founded Blue Sushi and Sake Grill and mentored many chefs throughout his career.",
  ],
  traits: [
    {
      title: "Approachable",
      description: "Enjoys teaching, catering, and connecting with guests.",
      icon: "users" as const,
    },
    {
      title: "Passionate",
      description: "Deep love for sushi, creativity, and craftsmanship.",
      icon: "heart" as const,
    },
    {
      title: "Committed",
      description: "Dedicated and hardworking in every aspect of his craft.",
      icon: "flower" as const,
    },
  ],
} as const;

export const aboutTeam = {
  label: "Meet the Team",
  title: "Learn More About Our Team",
  members: [
    {
      name: "Diana Beeson",
      role: "General Manager",
      image: "/images/aone.jpeg",
      imageAlt: "Diana Beeson, General Manager",
      bio: "Diana's hospitality journey began at a young age and developed through years of restaurant leadership. Her passion is creating memorable experiences where guests feel welcomed and teams feel supported.",
    },
    {
      name: "Rocendo Rodriguez",
      role: "Kitchen Manager",
      image: "/images/atwo.jpeg",
      imageAlt: "Rocendo Rodriguez, Kitchen Manager",
      bio: "Rocendo's culinary journey began over 24 years ago. His passion for sushi craftsmanship and dedication helped shape his career from sushi chef to culinary leadership.",
    },
  ],
} as const;

export const aboutValues = [
  {
    title: "Tradition & Innovation",
    description:
      "Honoring classic techniques while embracing modern creativity in every dish.",
    icon: "torii" as const,
  },
  {
    title: "Warm Hospitality",
    description:
      "Welcoming guests with genuine care so every visit feels personal and memorable.",
    icon: "handshake" as const,
  },
  {
    title: "Craftsmanship",
    description:
      "Precision, patience, and pride in sushi, hot dishes, and house-made cocktails.",
    icon: "knife" as const,
  },
  {
    title: "Community",
    description:
      "Building connections with guests, neighbors, and the chefs we mentor.",
    icon: "community" as const,
  },
  {
    title: "Historic Dundee",
    description:
      "Proudly rooted in Omaha's Dundee neighborhood and its lasting spirit.",
    icon: "building" as const,
  },
] as const;

export const aboutGallery = {
  label: "Gallery Highlights",
  title: "Moments That Inspire",
  items: [
    { image: "/images/gallery-3.jpeg", alt: "Signature cocktail at Shiki" },
    { image: "/images/gallery-1.jpeg", alt: "Sushi presentation" },
    { image: "/images/gallery-4.jpeg", alt: "Shiki dining room" },
    { image: "/images/gallery-8.jpeg", alt: "Team and hospitality" },
    { image: "/images/gallery-2.jpeg", alt: "Artfully plated dish" },
  ],
} as const;

export const aboutDundee = {
  titleLead: "Proudly Part of",
  titleAccent: "Historic Dundee",
  text: "Proudly part of historic Dundee, Shiki brings people together over flavor, atmosphere, and memorable hospitality — celebrating the past while creating new memories.",
  image: "/images/spaces-bg.jpg",
  imageAlt: "Historic Dundee neighborhood illustration",
} as const;
