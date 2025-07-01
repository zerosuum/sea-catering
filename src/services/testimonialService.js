let dummyTestimonials = [
  {
    _id: "testi1",
    name: "Emily Williams",
    review: "The variety and taste are incredible!...",
    rating: 5,
  },
  {
    _id: "testi2",
    name: "William Jackson",
    review: "Perfectly portioned and macro-friendly...",
    rating: 5,
  },
];

export const getTestimonials = async () => {
  console.log("Mengambil data dari API PALSU untuk testimoni...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...dummyTestimonials].reverse();
};

export const postTestimonial = async (testimonialData) => {
  console.log("Mengirim testimoni ke API PALSU...");
  await new Promise((resolve) => setTimeout(resolve, 500));
  const newTestimonial = {
    _id: `testi${Date.now()}`,
    ...testimonialData,
  };
  dummyTestimonials.push(newTestimonial);
  return newTestimonial;
};
