const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postSubscription = async (subscriptionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriptionData),
    });
    if (!response.ok) {
      throw new Error("Failed to create subscription");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
