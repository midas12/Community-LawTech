const admin = require('firebase-admin');

// Firebase Initialization
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<your-firebase-project>.firebaseio.com',
  });
}

const auth = admin.auth();

// Verify User Credentials
const verifyUserCredentials = async (email, password) => {
  try {
    const userRecord = await auth.getUserByEmail(email);
    // In Firebase, you'd typically check the password with a custom authentication system.
    // If you are using another service for storing passwords, validate it here.
    if (userRecord.email === email) {
      return userRecord;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

module.exports = { verifyUserCredentials };
