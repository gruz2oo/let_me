import fire from "../config"

/**
 * Registration user.
 */
function registrationNewUser (params) {
  return fire.auth().createUserWithEmailAndPassword(params.email, params.password)
}

/**
 * Login user.
 */
function login (params) {
  return fire.auth().signInWithEmailAndPassword(params.email, params.password)
}

/**
 * Add info about number auto.
 */
function addNumberAuto (registeredUser, params) {
  return fire.firestore().collection('numberAuto').add({
    uid: registeredUser.user.uid,
    number_rc: params.number_rc,
    email: params.email
  })
}

/**
 * Check auth status.
 */
function currentUser () {
  return fire.auth()
}

/**
 * Get all data
 */
function getDatByCarNumber (number) {
  return fire.firestore().collection('numberAuto').where("number_rc", "==", number).get()
}

/**
 * Logout user.
 */
function signOut () {
  return fire.auth().signOut()
}

export {
  registrationNewUser,
  signOut,
  login,
  addNumberAuto,
  currentUser,
  getDatByCarNumber
}