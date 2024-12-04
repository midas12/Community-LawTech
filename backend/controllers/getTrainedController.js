import { db } from "../firebaseService.js";

// Fetch assigned trainings for a user
export const getAssignedTrainings = async (req, res) => {
  try {
    const { userId } = req.query; // Assuming userId is sent as a query parameter
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const trainingSnapshots = await db
      .collection("trainings")
      .where("assignedTo", "==", userId)
      .get();

    const trainings = trainingSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(trainings);
  } catch (error) {
    console.error("Error fetching assigned trainings:", error);
    res.status(500).json({ message: "Failed to fetch assigned trainings" });
  }
};

// Handle training request submission
export const requestTraining = async (req, res) => {
  try {
    const { userId, request } = req.body;

    if (!userId || !request) {
      return res
        .status(400)
        .json({ message: "User ID and request description are required" });
    }

    const newRequest = {
      userId,
      trainingRequest: request,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("trainingRequests").add(newRequest);

    res.status(201).json({
      message: "Training request submitted successfully",
      requestId: docRef.id,
    });
  } catch (error) {
    console.error("Error submitting training request:", error);
    res.status(500).json({ message: "Failed to submit training request" });
  }
};
