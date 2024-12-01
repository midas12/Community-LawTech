import { firestore } from "../firebaseService.js";

export const saveLawyerRegistration = async (req, res) => {
  try {
    const data = req.body;

    // Save data to Firestore
    const collectionRef = firestore.collection("lawyerRegistrations");
    await collectionRef.add(data);

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Registration failed." });
  }
};
