import { addTraining } from "../firebaseService.js"

export const getTrainingPrograms = async (req, res) => {
    try {
        // Logic to fetch training programs (e.g., from database)
        const programs = await addTraining();

        res.status(200).json({ message: "Training programs retrieved successfully", programs });
    } catch (error) {
        console.error("Failed to fetch training programs", error);
        res.status(500).json({ message: "Error fetching training programs" });
    }
};