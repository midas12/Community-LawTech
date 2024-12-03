import { addTerms } from "../firebaseService.js"
export const getTermsAndConditions = async (req, res) => {
    try {
        // Logic to fetch terms and conditions (e.g., from database)
        const terms = await addTerms();

        if (!terms) {
            return res.status(404).json({ message: "Terms and conditions not found" });
        }

        res.status(200).json({ message: "Terms and conditions retrieved successfully", terms });
    } catch (error) {
        console.error("Failed to retrieve terms and conditions", error);
        res.status(500).json({ message: "Error retrieving terms and conditions" });
    }
};
