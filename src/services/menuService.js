const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getMenuItems = async () => {
  const fetchUrl = `${API_BASE_URL}/menu`;
  console.log("Frontend mencoba mengambil data dari:", fetchUrl); // <-- TAMBAHKAN INI

  try {
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch menu items");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
