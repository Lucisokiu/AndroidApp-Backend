const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require('../config/db.config');

const Login = async (req, res) => {
    try{
    const { email , password } = req.body;
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredential;
    res.status(200).send(user);
    }
    catch (error) {
      
    console.error(error); 
    res.status(404).send("Login failed: " + error.message);
  }
};


module.exports = {Login}