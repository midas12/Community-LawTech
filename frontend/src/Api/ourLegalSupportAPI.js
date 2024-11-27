// ourLegalSupportController.js
import Support from '../models/SupportModel.js';

// Add Support Controller
export const addSupport = async (req, res) => {
  try {
    const newSupport = new Support(req.body);
    await newSupport.save();
    res.status(201).json(newSupport);
  } catch (error) {
    console.error('Error adding support:', error);
    res.status(500).json({ message: 'Failed to add support' });
  }
};

// Get Support Controller
export const getSupport = async (req, res) => {
  try {
    const supports = await Support.find();
    res.status(200).json(supports);
  } catch (error) {
    console.error('Error fetching supports:', error);
    res.status(500).json({ message: 'Failed to fetch supports' });
  }
};
