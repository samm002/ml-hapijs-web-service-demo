const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

async function storeData(id, data) {
  // if using service account file
  // const db = new Firestore({ keyFilename: path.resolve(__dirname, '../../firestore-service-account.json'), });
  const db = new Firestore();

  const predictCollection = db.collection('prediction');

  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
