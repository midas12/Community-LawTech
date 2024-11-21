const { db, bucket } = require('../config/firebaseConfig');

// Create Lawyer Onboarding Entry
exports.createOnboarding = async (req, res) => {
  try {
    const { body, file } = req;

    // Upload file to Firebase Storage
    let barMembershipProofUrl = '';
    if (file) {
      const fileName = `bar_memberships/${Date.now()}_${file.originalname}`;
      const firebaseFile = bucket.file(fileName);

      await firebaseFile.save(file.buffer, { metadata: { contentType: file.mimetype } });
      barMembershipProofUrl = await firebaseFile.getSignedUrl({ action: 'read', expires: '03-01-2030' });
    }

    // Save to Firestore
    const docRef = db.collection('lawyersOnboarding').doc();
    await docRef.set({
      ...body,
      barMembershipProofUrl,
      createdAt: new Date(),
    });

    res.status(201).json({ message: 'Onboarding entry created successfully', id: docRef.id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create onboarding entry', error: error.message });
  }
};

// Get All Onboarding Entries
exports.getAllOnboardings = async (req, res) => {
  try {
    const snapshot = await db.collection('lawyersOnboarding').get();
    const onboardings = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(onboardings);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch onboardings', error: error.message });
  }
};

// Get Single Onboarding Entry by ID
exports.getOnboardingById = async (req, res) => {
  try {
    const doc = await db.collection('lawyersOnboarding').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ message: 'Onboarding entry not found' });

    res.status(200).json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch onboarding entry', error: error.message });
  }
};

// Update Onboarding Entry
exports.updateOnboarding = async (req, res) => {
  try {
    const { body, file } = req;

    // Upload updated file (if provided)
    let barMembershipProofUrl = '';
    if (file) {
      const fileName = `bar_memberships/${Date.now()}_${file.originalname}`;
      const firebaseFile = bucket.file(fileName);

      await firebaseFile.save(file.buffer, { metadata: { contentType: file.mimetype } });
      barMembershipProofUrl = await firebaseFile.getSignedUrl({ action: 'read', expires: '03-01-2030' });
    }

    // Update Firestore document
    const updateData = { ...body, ...(file && { barMembershipProofUrl }) };
    await db.collection('lawyersOnboarding').doc(req.params.id).update(updateData);

    res.status(200).json({ message: 'Onboarding entry updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update onboarding entry', error: error.message });
  }
};

// Delete Onboarding Entry
exports.deleteOnboarding = async (req, res) => {
  try {
    const docRef = db.collection('lawyersOnboarding').doc(req.params.id);
    const doc = await docRef.get();

    if (!doc.exists) return res.status(404).json({ message: 'Onboarding entry not found' });

    const data = doc.data();
    if (data.barMembershipProofUrl) {
      const fileName = data.barMembershipProofUrl.split('/').pop().split('?')[0];
      await bucket.file(`bar_memberships/${fileName}`).delete();
    }

    await docRef.delete();
    res.status(200).json({ message: 'Onboarding entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete onboarding entry', error: error.message });
  }
};
