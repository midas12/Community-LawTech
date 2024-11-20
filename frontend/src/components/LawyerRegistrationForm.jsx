import { useState } from 'react';
import './LawyerRegistrationForm.css';

const LawyerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    officeAddress: '',
    fields: [],
    employmentExperience: '',
    housingExperience: '',
    immigrationExperience: '',
    certification: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        fields: checked
          ? [...prev.fields, value]
          : prev.fields.filter((field) => field !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
    // Add API call or logic to handle form submission
  };

  return (
    <div className="registration-form">
      <h2>Lawyer Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Office Address</label>
          <input
            type="text"
            name="officeAddress"
            value={formData.officeAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="checkbox-group">
          <label>Field of Practice:</label>
          <label>
            <input
              type="checkbox"
              name="field"
              value="Employment"
              onChange={handleInputChange}
            />{' '}
            Employment
            <input
              type="number"
              name="employmentExperience"
              placeholder="Years of Experience"
              value={formData.employmentExperience}
              onChange={handleInputChange}
              disabled={!formData.fields.includes('Employment')}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="field"
              value="Housing"
              onChange={handleInputChange}
            />{' '}
            Housing
            <input
              type="number"
              name="housingExperience"
              placeholder="Years of Experience"
              value={formData.housingExperience}
              onChange={handleInputChange}
              disabled={!formData.fields.includes('Housing')}
            />
          </label>
          <label>
            <input
              type="checkbox"
              name="field"
              value="Immigration"
              onChange={handleInputChange}
            />{' '}
            Immigration
            <input
              type="number"
              name="immigrationExperience"
              placeholder="Years of Experience"
              value={formData.immigrationExperience}
              onChange={handleInputChange}
              disabled={!formData.fields.includes('Immigration')}
            />
          </label>
        </div>

        <div className="form-group">
          <label>Certification Name</label>
          <input
            type="text"
            name="certification"
            value={formData.certification}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" className="pink-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default LawyerRegistrationForm;
