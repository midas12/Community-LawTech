import { firestore } from "../firebaseService.js";
import bcrypt from "bcrypt";

export const registerLawyer = async (req, res) => {
  try {
    const { email, barMembershipNumber, password } = req.body;

    // Check for duplicate email or barMembershipNumber
    const snapshot = await firestore
      .collection("lawyers")
      .where("email", "==", email)
      .get();

    if (!snapshot.empty) {
      return res.status(400).json({ message: "Email already registered!" });
    }

    const barNumberSnapshot = await firestore
      .collection("lawyers")
      .where("barMembershipNumber", "==", barMembershipNumber)
      .get();

    if (!barNumberSnapshot.empty) {
      return res.status(400).json({
        message: "Bar Membership Number already registered!",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save to Firestore
    const newLawyer = {
      email,
      barMembershipNumber,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    await firestore.collection("lawyers").add(newLawyer);

    res.status(201).json({ message: "Lawyer registered successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
