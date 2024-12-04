import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Calendar from "react-calendar";
import axiosInstance from "../Api/axiosInstance";
import "react-calendar/dist/Calendar.css";
import "../App.css"; // Ensure centralized styling

const GetTrained = () => {
  const [trainings, setTrainings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [trainingRequest, setTrainingRequest] = useState("");
  const [calendarEvents, setCalendarEvents] = useState([]);

  // Fetch assigned trainings
  useEffect(() => {
    const fetchTrainings = async () => {
      try {
        const response = await axiosInstance.get("/api/get-trained", {
          params: { userId: "user123" }, // Replace with dynamic userId from authentication
        });
        setTrainings(response.data);
        setCalendarEvents(
          response.data.map((training) => ({
            date: training.date,
            title: training.title,
          }))
        );
      } catch (error) {
        toast.error("Failed to fetch training data.");
      }
    };
    fetchTrainings();
  }, []);

  // Submit training request
  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/get-trained/request", {
        userId: "user123", // Replace with dynamic userId from authentication
        request: trainingRequest,
      });
      toast.success(response.data.message || "Training request submitted!");
      setTrainingRequest("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Request submission failed.");
    }
  };

  return (
    <div className="get-trained">
      <h1>Lawyer Training Dashboard</h1>

      {/* Assigned Trainings */}
      <section>
        <h2>Assigned Trainings</h2>
        {trainings.length > 0 ? (
          <ul>
            {trainings.map((training, index) => (
              <li key={index}>
                <strong>{training.title}</strong>
                <p>Date: {new Date(training.date).toLocaleDateString()}</p>
                <p>Description: {training.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No assigned trainings at the moment.</p>
        )}
      </section>

      {/* Request Training */}
      <section>
        <h2>Request Training</h2>
        <form onSubmit={handleRequestSubmit}>
          <textarea
            value={trainingRequest}
            onChange={(e) => setTrainingRequest(e.target.value)}
            placeholder="Request specific training..."
            rows="4"
            required
          />
          <button type="submit" className="btn btn-primary">
            Submit Request
          </button>
        </form>
      </section>

      {/* Training Calendar */}
      <section>
        <h2>Training Calendar</h2>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          tileContent={({ date }) => {
            const event = calendarEvents.find(
              (event) =>
                new Date(event.date).toDateString() === date.toDateString()
            );
            return event ? <p>{event.title}</p> : null;
          }}
        />
      </section>
    </div>
  );
};

export default GetTrained;
