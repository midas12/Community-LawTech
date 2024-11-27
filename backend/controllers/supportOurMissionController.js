import { addSubscription } from "../firebaseService.js";

export const handleSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Save email subscription to Firebase
    const subscription = await addSubscription("subscriptions", { email });

    res.status(201).json({ message: "Subscription successful", subscription });
  } catch (error) {
    console.error("Failed to handle subscription", error);
    res.status(500).json({ message: "Failed to process subscription" });
  }
};
