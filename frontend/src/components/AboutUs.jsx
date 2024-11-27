import "../App.css"; // Ensure centralized styling is applied
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Emily Chen",
      role: "Paralegal",
      description: "Emily supports the legal team with her expertise in documentation and case management.",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "James Carter",
      role: "Outreach Coordinator",
      description: "James works to connect the firm with the community, ensuring that services reach those in need.",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Fatima Khan",
      role: "Legal Intern",
      description: "Fatima is gaining valuable experience in various legal fields while assisting the team.",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Robert Smith",
      role: "IT Specialist",
      description: "Robert ensures that the Community LawTech platform runs smoothly and efficiently.",
      image: "https://via.placeholder.com/150",
      linkedin: "#",
      twitter: "#",
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
              alt={`${member.name}'s profile`}
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
    </div>
  );
};

export default AboutUs;