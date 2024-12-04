import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Calendar styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate for page navigation
import './LawyerHomePage.css';

const LawyerHomePage = () => {
  // Initial notifications with timestamps
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: 'New client message: "Can we schedule a consultation?"',
      timestamp: new Date('2024-12-04T10:00:00'),
    },
    {
      id: 2,
      message: 'Document approval request from Client X.',
      timestamp: new Date('2024-12-03T15:30:00'),
    },
    {
      id: 3,
      message: 'Meeting reminder for tomorrow at 3 PM.',
      timestamp: new Date('2024-12-02T09:00:00'),
    },
  ]);
  const [date, setDate] = useState(new Date());
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // useNavigate for navigation
  const navigate = useNavigate();

  // Sort notifications by timestamp
  const sortedNotifications = [...notifications].sort(
    (a, b) => b.timestamp - a.timestamp // Sort by newest first
  );

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown visibility
  };

  const handleSignOut = () => {
    console.log('Sign Out clicked');
    // Add actual sign-out logic here (e.g., clearing auth token)
  };

  const handleAboutusClick = () => {
    navigate('/about-us'); // Navigate to the client reviews page
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.profile-btn') === null && event.target.closest('.dropdown-menu') === null) {
        setDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside); // Clean up the event listener
    };
  }, []);

  return (
    <div className="lawyer-home">
      {/* Header */}
      <header className="header">
        <h1>Welcome</h1>
        <div className="profile-btn-container">
          <button className="profile-btn" onClick={handleProfileClick}>
            Profile
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button className="sign-out-btn" onClick={handleSignOut}>
                Sign Out
              </button>
              <button className="client-review-btn" onClick={handleAboutusClick}>
                Client Reviews
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Notifications Timeline */}
        <section className="notifications">
          <h2>Notifications</h2>
          {sortedNotifications.length > 0 ? (
            <div className="timeline">
              {sortedNotifications.map((note) => (
                <div key={note.id} className="timeline-item">
                  <div className="timeline-time">
                    {note.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                  <div className="timeline-message">{note.message}</div>
                </div>
              ))}
            </div>
          ) : (
            <p>No notifications at the moment.</p>
          )}
        </section>

        {/* Calendar */}
        <section className="calendar">
          <h2>Your Calendar</h2>
          <Calendar onChange={setDate} value={date} />
        </section>
      </div>
    </div>
  );
};

export default LawyerHomePage;

