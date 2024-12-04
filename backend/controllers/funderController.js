import { addFunder } from "../firebaseService.js"

export const registerFunder = async (req, res) => {
    try {
        const { name, email, organization } = req.body;

        if (!name || !email || !organization) {
            return res.status(400).json({ message: "Name, email, and organization are required" });
        }

        // Logic to register the funder (e.g., save to database)
        const newFunder = await addFunder({ name, email, organization });

        res.status(201).json({ message: "Funder registered successfully", newFunder });
    } catch (error) {
        console.error("Failed to register funder", error);
        res.status(500).json({ message: "Error registering funder" });
    }
};