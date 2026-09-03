export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "lunch-specials",
    title: "Lunch Specials",
    subtitle: "Mon – Fri · 11:30am – 3:00pm",
    items: [
      {
        name: "Wagyu Beef Slider",
        description: "American wagyu, caramelized onion, shiso aioli, brioche bun",
        price: "$14",
        tag: "Popular",
      },
      {
        name: "Saffron Linguini with Chicken",
        description: "Saffron cream, grilled chicken, cherry tomatoes, basil",
        price: "$16",
      },
      {
        name: "Bento Box",
        description: "Choice of chicken or salmon, rice, salad, gyoza & daily side",
        price: "$18",
      },
    ],
  },
  {
    id: "happy-hour",
    title: "Happy Hour",
    subtitle: "Mon – Fri · 3:00pm – 6:00pm",
    items: [
      {
        name: "Nachos & Beer",
        description: "Crispy wonton chips, spicy tuna, avocado, beer pairing",
        price: "$12",
      },
      {
        name: "Steak & Peppers",
        description: "Sliced ribeye, bell peppers, yuzu ponzu",
        price: "$15",
      },
      {
        name: "Drink Specials",
        description: "Select cocktails & wine — $2 off your favorite",
        price: "Special",
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        name: "Edamame",
        description: "Sea salt, togarashi, sesame",
        price: "$7",
      },
      {
        name: "Gyoza",
        description: "Pan-seared pork & ginger dumplings, chili oil",
        price: "$10",
      },
      {
        name: "Shishito Peppers",
        description: "Blistered peppers, bonito flakes, citrus salt",
        price: "$9",
      },
      {
        name: "Tuna Tataki",
        description: "Seared tuna, micro greens, ponzu, crispy garlic",
        price: "$16",
        tag: "Chef's Pick",
      },
      {
        name: "Crispy Brussels Sprouts",
        description: "Miso glaze, toasted almonds, furikake",
        price: "$11",
      },
    ],
  },
  {
    id: "sushi-sashimi",
    title: "Sushi & Sashimi",
    items: [
      {
        name: "Chef's Nigiri (2pc)",
        description: "Ask your server for today's fresh selection",
        price: "MP",
      },
      {
        name: "Salmon Sashimi",
        description: "Fresh Atlantic salmon, wasabi, pickled ginger",
        price: "$15",
      },
      {
        name: "Tuna Sashimi",
        description: "Bluefin tuna, citrus soy, micro shiso",
        price: "$17",
      },
      {
        name: "Yellowtail Jalapeño",
        description: "Thin-sliced hamachi, jalapeño, yuzu kosho",
        price: "$16",
      },
    ],
  },
  {
    id: "rolls",
    title: "Signature Rolls",
    items: [
      {
        name: "Shiki Roll",
        description: "Spicy tuna, avocado, cucumber, eel sauce, tobiko",
        price: "$16",
        tag: "Signature",
      },
      {
        name: "Cherry Blossom Roll",
        description: "Shrimp tempura, cream cheese, pink soy paper, sakura tobiko",
        price: "$18",
      },
      {
        name: "Spicy Tuna Roll",
        description: "Spicy tuna, cucumber, sesame, spicy mayo",
        price: "$14",
      },
      {
        name: "Dragon Roll",
        description: "Eel, avocado, cucumber, unagi glaze",
        price: "$17",
      },
      {
        name: "Veggie Roll",
        description: "Avocado, cucumber, asparagus, carrot, sweet soy",
        price: "$12",
      },
    ],
  },
  {
    id: "entrees",
    title: "Entrées",
    items: [
      {
        name: "Miso Black Cod",
        description: "48-hour marinated cod, baby bok choy, ginger dashi",
        price: "$32",
        tag: "Popular",
      },
      {
        name: "Teriyaki Salmon",
        description: "Grilled salmon, seasonal vegetables, steamed rice",
        price: "$28",
      },
      {
        name: "Chicken Katsu",
        description: "Panko chicken, tonkatsu sauce, shredded cabbage",
        price: "$24",
      },
      {
        name: "Wagyu Fried Rice",
        description: "Wagyu beef, egg, scallion, house fried rice",
        price: "$26",
      },
    ],
  },
  {
    id: "favorites",
    title: "Familiar Favorites",
    items: [
      {
        name: "Smash Burger",
        description: "Double patty, American cheese, shiso pickles, special sauce",
        price: "$18",
      },
      {
        name: "Chicken Pasta",
        description: "Grilled chicken, garlic cream, sun-dried tomato, parmesan",
        price: "$22",
      },
      {
        name: "Shiki Fried Rice",
        description: "Egg, peas, carrot, scallion, soy butter",
        price: "$16",
      },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    items: [
      {
        name: "Shiki Old Fashioned",
        description: "Bourbon, black sugar, angostura, orange peel",
        price: "$14",
      },
      {
        name: "Sakura Martini",
        description: "Vodka, cherry blossom liqueur, lemon, rose water",
        price: "$13",
      },
      {
        name: "Yuzu Highball",
        description: "Japanese whisky, yuzu, soda, shiso leaf",
        price: "$12",
      },
      {
        name: "Sake Flight",
        description: "Three 2oz pours of premium sake",
        price: "$18",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      {
        name: "Soft Drinks",
        description: "Coke, Sprite, ginger ale, iced tea",
        price: "$3",
      },
      {
        name: "Hot Sake",
        description: "House warm sake, 8oz",
        price: "$8",
      },
      {
        name: "Green Tea",
        description: "Hot or iced Japanese green tea",
        price: "$4",
      },
    ],
  },
];
