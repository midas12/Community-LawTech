import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Ensure centralized styling is used

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-links">
        {/* Navigation links */}
        <Link to="/admin/lawyers" className="btn btn-primary">
          Manage Lawyers
        </Link>
        <Link to="/admin/cases" className="btn btn-primary">
          Manage Cases
        </Link>
        <Link to="/admin/funders" className="btn btn-primary">
          Manage Funders
        </Link>
        <Link to="/admin/users" className="btn btn-primary">
          Manage Users
        </Link>
        <Link to="/admin/trainings" className="btn btn-primary">
          Manage Trainings
        </Link>
        <Link to="/admin/page-updates" className="btn btn-primary">
          Page Updates
        </Link>
        <Link to="/admin/announcements" className="btn btn-primary">
          Push Announcements
        </Link>
        <Link to="/admin/send-emails" className="btn btn-primary">
          Send Emails
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
