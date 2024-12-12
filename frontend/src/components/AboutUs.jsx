import "../App.css"; // Ensure centralized styling is applied
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ammar Abdul Razak",
      role: "Paralegal",
      description: "Ammar supports the legal team with her expertise in documentation and case management.",
      image: "https://images.squarespace-cdn.com/content/v1/5b6e7af1cc8fed5946743743/1605563570183-P8KRAKS0HS4HH0ZXN5RN/Neofluidics+Headshot+202521.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Hiba El Haroun",
      role: "Outreach Coordinator",
      description: "Hiba works to connect the firm with the community, ensuring that services reach those in need.",
      image: "https://images.squarespace-cdn.com/content/v1/647f33d5d57c8b4c85f6bb09/1719866368795-ZA1NKQCZA3H17IW3OO4M/Andie+von+Eschen_WCS_2156.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Curtis Fowler",
      role: "Legal Intern",
      description: "Curtis is gaining valuable experience in various legal fields while assisting the team.",
      image: "https://www.bethesdaheadshots.com/wp-content/uploads/2016/08/Arthur_4215pF800x1000.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Gabriela Shiva",
      role: "IT Specialist",
      description: "Gaby ensures that the Community LawTech platform runs smoothly and efficiently.",
      image: "https://cotugnophoto.com/wp-content/uploads/2024/09/ccp-corporate-lawyer-formal-headshot-16x9-1.jpg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const clientReviews = [
    {
      clientName: "John Doe",
      review: "The team provided excellent service, and I felt supported throughout my case.",
      date: "November 2024",
    },
    {
      clientName: "Jane Smith",
      review: "Professional and trustworthy. I highly recommend their services.",
      date: "October 2024",
    },
    {
      clientName: "Michael Brown",
      review: "A seamless experience with great communication every step of the way.",
      date: "September 2024",
    },
  ];

  return (
    <div className="about-us">
      <h1 className="about-us-title">Join Our Team</h1>
      <p className="about-us-description">We are always looking for passionate individuals to help us.</p>
      <button className="btn btn-primary view-positions-button">View Open Positions</button>

      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <img
              src={member.image}
              // alt={`${member.name}'s profile`}
              className="team-member-image"
            />
            <h3 className="team-member-name">{member.name}</h3>
            <h4 className="team-member-role">{member.role}</h4>
            <p className="team-member-description">{member.description}</p>
            <div className="team-member-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Client Reviews Section */}
      <div className="client-reviews-section">
        <h2 className="client-reviews-title">Client Reviews</h2>
        {clientReviews.length > 0 ? (
          <div className="client-reviews">
            {clientReviews.map((review, index) => (
              <div key={index} className="client-review-card">
                <p className="client-review-message">"{review.review}"</p>
                <p className="client-review-client-name">- {review.clientName}</p>
                <p className="client-review-date">{review.date}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
