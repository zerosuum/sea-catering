const dummyMenuData = [
  {
    _id: "menu1",
    image: "/meal-1.jpg",
    title: "Classic Caprese Salad",
    description: "A timeless Italian salad...",
    price: 55000,
  },
  {
    _id: "menu2",
    image: "/meal-2.jpg",
    title: "Hearty Beef Curry",
    description: "Tender chunks of beef...",
    price: 80000,
  },
  {
    _id: "menu3",
    image: "/meal-3.jpg",
    title: "Radiant Pink Smoothie",
    description: "A vibrant and refreshing blend...",
    price: 47500,
  },
];

// TAMBAHKAN 'export' DI SINI
export const getMenuItems = async () => {
  console.log("Mengambil data dari API PALSU untuk menu...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dummyMenuData;
};
