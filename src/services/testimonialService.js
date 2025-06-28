const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getTestimonials = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    if (!response.ok) {
      throw new Error("Failed to fetch testimonials");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postTestimonial = async (testimonialData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/testimonials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testimonialData),
    });
    if (!response.ok) {
      throw new Error("Failed to post testimonial");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
