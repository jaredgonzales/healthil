const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  //functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

//helloName

exports.submitApplication = functions.https.onRequest((request, response) => {
  var info = request.query;
  db.collection("sites")
    .doc("hospital001")
    .collection("applications")
    .doc(info.company_name)
    .set(info);
  response.send("Successfully register " + info.company_name + "!");
});
// exports.submitApplicationForm = functions.https.onRequest()--> write

exports.readApplication = functions.https.onRequest((request, response) => {
  var company_name = request.query.company_name;
  db.collection("sites")
    .doc("hospital001")
    .collection("applications")
    .doc(company_name)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        response.send(doc.data());
      } else {
        // doc.data() will be undefined in this case
        response.send("No such document!");
      }
    })
    .catch(function (error) {
      response.send("Error getting document:", error);
    });
});
exports.getApplications = functions.https.onRequest((request, response) => {
  const applicationList = db
    .collection("sites")
    .doc("hospital001")
    .collection("applications");
  var applicationArray = new Array();
  const snapshot = applicationList.get().then((snapshot) => {
    snapshot.forEach((doc) => {
      applicationArray.push(doc.id);
    });
    response.send(applicationArray);
  });
});
