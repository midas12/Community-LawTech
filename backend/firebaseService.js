import admin from "firebase-admin";

// Firebase service account details
const serviceAccount = {
  type: "service_account",
  project_id: "community-lawtech",
  private_key_id: "5eabeb0a7471b46fecd691973ea273a50d77e331",
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCr9aF0lhtyfogI
h5ln8ETPCw2iqjOjl/EZXklsL7T+zwdjm9Tq+WQi1AKPoCqd7RmEXjNaWvV+m48F
...
H/V+5//SgTAmv/n5NIrH+lDGGVV6ETF/6GeA3KA==
-----END PRIVATE KEY-----`,
  client_email: "firebase-adminsdk-ben45@community-lawtech.iam.gserviceaccount.com",
  client_id: "116167063557294391706",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ben45%40community-lawtech.iam.gserviceaccount.com",
};

// Initialize the Firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://community-lawtech.firebaseio.com",
});

const db = admin.firestore();

const addSubscription = async (subscriptionData) => {
  try {
    const docRef = await db.collection('subscriptions').add(subscriptionData);
    console.log('Subscription added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding subscription: ', error);
    throw error;
  }
};

export { db, addSubscription };
