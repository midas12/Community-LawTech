import { addAssistance } from "../firebaseService.js"

export const requestAssistance = async (req, res) => {
    try {
        const { clientName, assistanceType, details } = req.body;

        if (!clientName || !assistanceType) {
            return res.status(400).json({ message: "Client name and assistance type are required" });
        }

        // Logic to handle assistance request (e.g., save to database)
        const assistanceRequest = await requestAssistanceInDatabase({ clientName, assistanceType, details });

        res.status(201).json({ message: "Assistance request submitted successfully", assistanceRequest });
    } catch (error) {
        console.error("Failed to submit assistance request", error);
        res.status(500).json({ message: "Error submitting assistance request" });
    }
};