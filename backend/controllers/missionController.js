import { db } from '../firebaseService.js'; // Ensure firebaseService.js is configured correctly

// Get mission data
export const getMission = async (req, res) => {
    try {
        const snapshot = await db.collection('missions').get();
        const missions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(missions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve missions', details: error.message });
    }
};

// Post mission data
export const postMission = async (req, res) => {
    try {
        const newMission = req.body;
        const docRef = await db.collection('missions').add(newMission);
        res.status(201).json({ id: docRef.id, ...newMission });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create mission', details: error.message });
    }
};

// Update mission data by ID
export const updateMission = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        await db.collection('missions').doc(id).update(updates);
        res.status(200).json({ id, ...updates });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update mission', details: error.message });
    }
};

// Delete mission data by ID
export const deleteMission = async (req, res) => {
    try {
        const { id } = req.params;
        await db.collection('missions').doc(id).delete();
        res.status(200).json({ message: 'Mission deleted successfully', id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete mission', details: error.message });
    }
};
