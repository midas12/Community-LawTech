import { firestore } from "../firebaseService.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Lawyers CRUD
export const getLawyers = async (req, res) => {
    try {
      const snapshot = await firestore.collection("lawyers").get();
      const lawyers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      res.status(200).json(lawyers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching lawyers" });
    }
  };
  
  export const createLawyer = async (req, res) => {
    try {
      const newLawyer = req.body;
      await firestore.collection("lawyers").add(newLawyer);
      res.status(201).json({ message: "Lawyer created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error creating lawyer" });
    }
  };
  
  export const updateLawyer = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      await firestore.collection("lawyers").doc(id).update(updatedData);
      res.status(200).json({ message: "Lawyer updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating lawyer" });
    }
  };
  
  export const deleteLawyer = async (req, res) => {
    try {
      const { id } = req.params;
      await firestore.collection("lawyers").doc(id).delete();
      res.status(200).json({ message: "Lawyer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting lawyer" });
    }
  };
  
  // Similar functions for Cases, Funders, Users, Trainings, etc.
  


export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Fetch admin from Firestore
    const snapshot = await firestore.collection("admins").where("email", "==", email).get();

    if (snapshot.empty) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const adminData = snapshot.docs[0].data();

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, adminData.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: snapshot.docs[0].id, email: adminData.email, role: adminData.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });

}



};
