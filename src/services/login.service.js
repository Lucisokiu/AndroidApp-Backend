const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/db.config');





const LoginWithEmailAndPassword = async (email , password ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const { user } = userCredential;
      return user;
    }
    catch (error) {
        throw error.message;
      }
    };
  
  module.exports = { LoginWithEmailAndPassword }