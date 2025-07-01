export const postSubscription = async (subscriptionData) => {
  console.log("Mengirim data langganan ke API PALSU:", subscriptionData);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { message: "Subscription successful! (This is a fake response)" };
};
