import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

export const registerLawyer = async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    // Save the lawyer details to the database (assuming a Firestore setup)
    const docRef = await db.collection('lawyers').add({
      name,
      email,
      password: hashedPassword
    });
    res.status(201).send({ success: true, lawyerId: docRef.id });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
