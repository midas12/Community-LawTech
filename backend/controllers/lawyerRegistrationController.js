const { db } = require('../firebase/firebase');

exports.registerLawyer = async (req, res) => {
  try {
    const { email, barMembershipNumber, password } = req.body;
    const newLawyer = {
      email,
      barMembershipNumber,
      password, // Make sure to hash the password before saving
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    const docRef = await db.collection('registeredLawyers').add(newLawyer);
    res.status(200).json({ message: 'Lawyer registered successfully', id: docRef.id });
  } catch (error) {
    console.error('Error registering lawyer:', error);
    res.status(500).json({ message: 'Error registering lawyer', error });
  }
};
