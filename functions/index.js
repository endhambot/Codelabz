const functions = require("firebase-functions");

/**
 * +++++++++++++++++++CLOUD FUNCTIONS+++++++++++++++++++++++++++++
 */

/**Import functions
 */
const onCallFunctions = require("./cloud_functions/onCallFunctions");
const onCreateFunctions = require("./cloud_functions/onCreateFunctions");
const onWriteFunctions = require("./cloud_functions/onWriteFunctions");

//+++++++++++++++++++++onCall Functions+++++++++++++++++++++++++++++++++
exports.resendVerificationEmail = functions.https.onCall(
  onCallFunctions.resendVerificationEmailHandler
);

exports.sendPasswordUpdateEmail = functions.https.onCall(
  onCallFunctions.sendPasswordUpdateEmailHandler
);

//+++++++++++++++++++++onCreate Functions+++++++++++++++++++++++++++++++
exports.sendVerificationEmail = functions.auth
  .user()
  .onCreate(onCreateFunctions.sendVerificationEmailHandler);

exports.createOrganization = functions.firestore
  .document("cl_org_general/{org_handle}")
  .onCreate(onCreateFunctions.createOrganizationHandler);

//++++++++++++++++++++onWrite Functions+++++++++++++++++++++++++++++++
exports.registerUserHandle = functions.firestore
  .document("cl_user/{uid}")
  .onWrite(onWriteFunctions.registerUserHandleHandler);
