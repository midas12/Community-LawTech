import { useState } from 'react';

const LawyerSignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
    memorableWord: '',
    agreeToTerms: false,
    agreeToNewsletter: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match!';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions!';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      alert('Form submitted successfully!');
      // Add API call or logic to handle form submission
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="registration-form">
      <h2>Lawyer Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Basic Details Section */}
        <div className="section">
          <h3>Basic Details</h3>
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
            <label>Username </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Login Details Section */}
        <div className="section">
          <h3>Register for Login</h3>
          <div className="form-group">
            <label>Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <small>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />{' '}
              Show Password
            </small>
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && (
              <small className="error">{errors.confirmPassword}</small>
            )}
          </div>

          <div className="form-group">
            <label>Memorable Word </label>
            <input
              type="text"
              name="memorableWord"
              value={formData.memorableWord}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Agreements Section */}
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />{' '}
            I agree to the terms and conditions and privacy policy
          </label>
          {errors.agreeToTerms && (
            <small className="error">{errors.agreeToTerms}</small>
          )}

          <label>
            <input
              type="checkbox"
              name="agreeToNewsletter"
              checked={formData.agreeToNewsletter}
              onChange={handleInputChange}
            />{' '}
            I agree to receive newsletters
          </label>
        </div>

        <button
          type="submit"
          className="pink-button"
          disabled={!formData.agreeToTerms}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default LawyerSignupForm;
