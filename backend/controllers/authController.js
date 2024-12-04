import { admin, db } from "../firebaseService.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch user record from Firebase by email
    const userRecord = await admin.auth().getUserByEmail(email);

    // Check if user record exists
    if (!userRecord) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Retrieve user data from Firestore
    const userDoc = await db.collection("users").doc(userRecord.uid).get();

    if (!userDoc.exists) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userData = userDoc.data();

    // Verify password using bcrypt
    const isPasswordValid = await bcrypt.compare(password, userData.passwordHash);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate a Firebase custom token
    const token = await admin.auth().createCustomToken(userRecord.uid);

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Authentication failed", error: error.message });
  }
};
