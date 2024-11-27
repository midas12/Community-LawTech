import admin from 'firebase-admin';

// Use your provided service account keys directly
const serviceAccount = {
    type: "service_account",
    project_id: "community-lawtech",
    private_key_id: "5eabeb0a7471b46fecd691973ea273a50d77e331",
    private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCr9aF0lhtyfogI\nh5ln8ETPCw2iqjOjl/EZXklsL7T+zwdjm9Tq+WQi1AKPoCqd7RmEXjNaWvV+m48F\n0zumWJBijvNQZxq2Cg2hAFQ9ZMRuqPgd5Fa9YiMaSHx24kOJf0u/6T540io0B83q\n7RV3IX0DclvkJ+vz2apCUGaI4XGFDb2QLV/GEM2v4b3iFR8e1lJ3pwvOhM+00TyQ\nj9S0OnX2YNY+Ehna4e9gUJhtZgWlNZcuCPnS+GguN8Z34YV93nzfLWDCxBdKM1be\ne/3KVMXLOqdJDN/Ur/vBDzEKMwhxiLGCziDjHMOgbt2/bZInt/EAPpSwi9iEkYH6\nCeLkyIfhAgMBAAECggEAEKiqLI5COHRTn2frj6syL1Cl0IVmnUmh/NAqksWIZksO\nLzMwjFb+wXUCjoF4v3Xxy+YIWY+ISuytDWZqV/IqgrHQlpB2gP42VcufXZc+hG3w\nI400bgJs3iX5kNbYriBb6UqiV7gciI/c/g5bzv+6ibPxfQf1DtmeafA6DrawdbA3\nCqdAjbXrXiu3sHjQi5VmbOELXE1qVqrCu4oTnHlzBXFyY7hnNkT+28wo0XXXwP6B\nBDEJfqTVTzKwIZMMNbFGNiwH4Eo7F8ZNWoU8ITjB4Ov/FKeHTqvSjdgPb9P4YO22\ncm1UL7ZND+9fElspt3yK2CBEranCDI/oNPKpKNIWhQKBgQDxDFNIry6cUGHyOzus\ns9WwC7sSmfQSgtLOmpZj7s1THhnb71Gb/mV1F2jLhNza0kfZj48HMBFBmxgrvqZW\nvdFodlgHl9zyEUFreCMqMmcWF3b1hvSbh01IJ4BoqfN+MjsVuN8hjHG1/Aef/7n6\nDuT447QZjHK33nLJAOl4e3CJCwKBgQC2oDns9IK/yMZSuHMSCLOKLV1Ol4Xd5H4H\nxkgulOrWhVuWtQ4xi9XTFKX4ockbtcQWntZL1wZxIKa/hr3faIjKFE9mI1vHjkoO\nhtzP8jZhsYLwMIz1TgaEmUAvZsOLLcJ8IYVADXcg6AEwDPKdB8H7ByqGMRq2MA+c\ngxyKXew+QwKBgDCOvRA9SfRvNOvpBsJpj7hhBJRgswwvkmvQNE95QZ9mxurJMPVt\nr96Akrm80Ai8p4CqLLPT+QXwSlQ1maiLoG2cuWr+KqIQ287caqkLcjy/CVW4k/no\nrabFXla3NbfMQp7DmR9W/WkdliOjDkHTUkjZBeTHqCxmAVWAe4erxiW1AoGAXaK1\nUHrldvO4S71qsnpno5cy2hLyfhyjSdUuOUP9TFQ/63uVdW3fCkTx/BLnjB+cFIUI\nFwZ+tQ4qsNSjEaMFT6cuNo42hpC8A8q9+JiVrW1YV1JtU3DYArCYqjUkWX3y07ZU\nHc1JoUOTKFHbKwxJNy4rbXZL3dGyj2rh/Ue+0wUCgYBd2wmS28hM9blwsWnVJB8X\nLpTwINONKJeyKX3QHOVB7Pg6l0rFeRSWili9sfigr8dOt8OKdbEyUZZaZt/1W0FW\nbUBrMdQ34FtoOP24DFKUF1DX+MLk1ulMw5qWPJXd3ou7gRxH/V+5//SgTAmv/n5N\nIrH+lDGGVV6ETF/6GeA3KA==\n-----END PRIVATE KEY-----\n`,
    client_email: "firebase-adminsdk-ben45@community-lawtech.iam.gserviceaccount.com",
    client_id: "116167063557294391706",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ben45%40community-lawtech.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
};

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}
export const addLawyer = async (collectionName, lawyerData) => {
  const collectionRef = db.collection(collectionName);
  const docRef = await collectionRef.add(lawyerData);
  return { id: docRef.id, ...lawyerData };
};
export const addSubscription = async (collectionName, data) => {
  const collectionRef = db.collection(collectionName);
  const docRef = await collectionRef.add(data);
  return { id: docRef.id, ...data };
};
export const getNearbyLawyers = async (postcode) => {
  const snapshot = await firestore.collection("lawyers").get();
  const lawyers = snapshot.docs.map((doc) => doc.data());

  // Replace this with real distance calculation logic
  return lawyers.filter((lawyer) => lawyer.postcode === postcode);
};



// Export Firestore database instance
export const db = admin.firestore();
