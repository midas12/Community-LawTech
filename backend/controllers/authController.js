const jwt = require('jsonwebtoken');
const { verifyUserCredentials } = require('../service');
const SECRET_KEY = 'your_secret_key'; // Move this to env variables in production

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await verifyUserCredentials(email, password);
    if (user) {
      // Generate JWT
      const token = jwt.sign({ uid: user.uid, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
      return res.json({ token, user });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { loginUser };
