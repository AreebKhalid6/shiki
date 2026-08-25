export const restaurant = {
  name: "Shiki",
  tagline: "Where art meets flavor in an unforgettable dining experience.",
  addressLine1: "1100 First Colony Road",
  addressLine2: "Sugar Land, TX 77479",
  address: "1100 First Colony Road, Sugar Land, TX 77479",
  phone: "(281) 313-9688",
  phoneHref: "tel:+12813139688",
  email: "info@shikisugarland.com",
  emailHref: "mailto:info@shikisugarland.com",
  mapsHref: "https://maps.google.com/?q=1100+First+Colony+Road+Sugar+Land+TX+77479",
  hours: [
    { days: "Mon – Thu", time: "11:30am – 10:00pm" },
    { days: "Fri – Sat", time: "11:30am – 11:00pm" },
    { days: "Sunday", time: "11:30am – 9:30pm" },
  ],
  menuUrl: "https://shiki.toast.site/menu/shiki-4900-dodge-street",
};

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/menu" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Private Events", href: "/#private-events" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Gifts", href: "/#gifts" },
  { label: "Contact", href: "/#contact" },
] as const;

export const experienceItems = [
  {
    title: "Sushi",
    description:
      "Fresh, artfully crafted, and beautifully presented sushi, nigiri & sashimi.",
    image: "/images/imageone.jpeg",
    alt: "Sushi, nigiri and sashimi plated at Shiki",
  },
  {
    title: "Familiar Favorites",
    description:
      "Smash burgers, fried rice, chicken, pasta … come discover your favorite.",
    image: "/images/homesectionimage.png",
    alt: "Chicken pasta and familiar favorites at Shiki",
  },
  {
    title: "Cocktails",
    description: "Handmade cocktails that enhance every moment.",
    image: "/images/imagetwo.jpeg",
    alt: "Handmade cocktails at Shiki",
  },
  {
    title: "Hospitality",
    description:
      "Elevated interactions where guests feel welcome, comfortable, and valued.",
    image: "/images/imagefour.jpeg",
    alt: "Welcoming dining room hospitality at Shiki",
  },
] as const;

export const spaceItems = [
  {
    title: "Cherry Blossom Dining Room",
    description:
      "Dine beneath an elegant canopy of cherry blossoms in our main room and vibrant bar.",
    image: "/images/imagefour.jpeg",
    alt: "Cherry blossom dining room and bar at Shiki",
  },
  {
    title: "Tea Room",
    description:
      "Celebrate in our modern take on traditional tea rooms. Perfect for special occasions.",
    image: "/images/tearoom.png",
    alt: "Tea room at Shiki",
  },
  {
    title: "Bamboo Garden",
    description:
      "Enjoy a more relaxed atmosphere with just the right amount of energy.",
    image: "/images/BambooPrivate Dining.png",
    alt: "Bamboo Garden dining at Shiki",
  },
  {
    title: "Date Night",
    description:
      "Escape to “Date Night Alley” with our cozy, window-side tables just for two.",
    image: "/images/gallery-8.jpeg",
    alt: "Window-side Date Night Alley tables at Shiki",
  },
] as const;

export const lunchSpecials = [
  "Wagyu Beef Slider",
  "Saffron Linguini with Chicken",
  "Bento Box with optional Chicken",
] as const;

export const happyHourSpecials = [
  "Nachos & Beer",
  "Steak & Peppers",
  "Drink Specials or $2 off your Favorite",
] as const;

export const galleryItems = [
  {
    image: "/images/gallery-1.jpeg",
    alt: "Shiki dining moment",
  },
  {
    image: "/images/gallery-2.jpeg",
    alt: "Artfully plated dishes at Shiki",
  },
  {
    image: "/images/gallery-3.jpeg",
    alt: "Signature cocktail and cuisine",
  },
  {
    image: "/images/gallery-4.jpeg",
    alt: "Restaurant ambiance at Shiki",
  },
  {
    image: "/images/gallery-5.jpeg",
    alt: "Private dining and interiors",
  },
  {
    image: "/images/gallery-6.jpeg",
    alt: "Shiki table details",
  },
  {
    image: "/images/gallery-8.jpeg",
    alt: "Evening dining atmosphere",
  },
  {
    image: "/images/gallery-9.jpeg",
    alt: "Signature Shiki presentation",
  },
] as const;
