import { addFeedback } from "../firebaseService.js"

export const submitFeedback = async (req, res) => {
    try {
        const { clientName, feedback } = req.body;

        if (!clientName || !feedback) {
            return res.status(400).json({ message: "Client name and feedback are required" });
        }

        // Logic to save feedback (e.g., to database)
        const savedFeedback = await addFeedback({ clientName, feedback });

        res.status(201).json({ message: "Feedback submitted successfully", savedFeedback });
    } catch (error) {
        console.error("Failed to submit feedback", error);
        res.status(500).json({ message: "Error submitting feedback" });
    }
};