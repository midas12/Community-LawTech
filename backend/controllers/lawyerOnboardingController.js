import { firestore } from "../firebaseService.js";

export const saveLawyerOnboarding = async (req, res) => {
  try {
    const data = req.body;
    const files = req.files;
    
    // Handle files if required (e.g., save to Firebase Storage)
    console.log("Uploaded Files:", files);

    // Save data to Firestore
    const collectionRef = firestore.collection("lawyerOnboarding");
    await collectionRef.add(data);

    res.status(201).json({ message: "Onboarding data saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save onboarding data." });
  }
};
