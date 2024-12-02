import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/axiosInstance";
import { toast } from "react-toastify";

const AdminManageLawyers = () => {
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const response = await axiosInstance.get("/admin/lawyers");
      setLawyers(response.data);
    } catch (error) {
      toast.error("Error fetching lawyers");
    } finally {
      setLoading(false);
    }
  };

  const deleteLawyer = async (id) => {
    try {
      await axiosInstance.delete(`/admin/lawyers/${id}`);
      toast.success("Lawyer deleted successfully");
      fetchLawyers(); // Refresh list
    } catch (error) {
      toast.error("Error deleting lawyer");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="manage-lawyers">
      <h2>Manage Lawyers</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer) => (
            <tr key={lawyer.id}>
              <td>{lawyer.name}</td>
              <td>{lawyer.email}</td>
              <td>{lawyer.specialization}</td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteLawyer(lawyer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManageLawyers;
