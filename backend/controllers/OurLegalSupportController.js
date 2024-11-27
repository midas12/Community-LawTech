import { firestore } from '../firebaseService.js';

const supportCollection = firestore.collection('OurLegalSupport');

export const addSupport = async (req, res) => {
  try {
    const data = req.body;
    const docRef = await supportCollection.add(data);
    res.status(200).json({ success: true, id: docRef.id, message: 'Support added successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSupport = async (req, res) => {
  try {
    const snapshot = await supportCollection.get();
    const supportData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json({ success: true, data: supportData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
