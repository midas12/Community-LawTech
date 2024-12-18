import { getNearbyLawyers } from "../firebaseService.js";

export const getLawyersByPostcode = async (req, res) => {
  const { postcode } = req.query;

  try {
    const lawyers = await getNearbyLawyers(postcode);
    res.status(200).json(lawyers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lawyers", error });
  }
};
