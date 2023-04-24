const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/db.config');

const Login = async (req, res) => {
    try{
    const { email , password } = req.body;
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredential;
    res.status(200).send(user);
    // res.status(200).send(user.email);
    }
    catch (error) {
      
    console.error(error); // log the error for debugging purposes
    res.status(404).send("Login failed: " + error.message);
  }
};


module.exports = {Login}