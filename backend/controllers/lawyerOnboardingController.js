const { db } = require('../firebase/firebase');

exports.onboardLawyer = async (req, res) => {
  try {
    const { name, email, specialization, experience } = req.body;
    const newLawyer = {
      name,
      email,
      specialization,
      experience,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const docRef = await db.collection('lawyers').add(newLawyer);
    res.status(200).json({ message: 'Lawyer onboarded successfully', id: docRef.id });
  } catch (error) {
    console.error('Error onboarding lawyer:', error);
    res.status(500).json({ message: 'Error onboarding lawyer', error });
  }
};
