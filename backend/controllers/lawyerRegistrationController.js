import { addLawyer } from "../firebaseService.js";

export const registerLawyer = async (req, res) => {
  try {
    const lawyerData = req.body;

    // Save data to Firebase or any other database
    const newLawyer = await addLawyer("lawyers", lawyerData);

    res.status(201).json({ message: "Lawyer registered successfully!", data: newLawyer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to register lawyer." });
  }
};
