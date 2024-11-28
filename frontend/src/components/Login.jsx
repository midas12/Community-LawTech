import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', formValues);
      alert('Login successful! Token: ' + response.data.token);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '50px' }}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', marginTop: '5px' }}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
