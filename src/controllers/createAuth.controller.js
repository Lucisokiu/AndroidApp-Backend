const { createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../config/db.config");
const { PostNewUser } = require("../services/user.service");

const createAuth = async (req, res) => {
  const { name, member, email, password } = req.body;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const { user } = userCredential;
    // res.status(200).send(userCredential);
    console.log(`User created with email ${userCredential.user.email} and uid ${userCredential.user.uid}`);


    const uid = userCredential.user.uid;
// (name, member, email, password,user_id)
// PostUser => thêm User
    const newUser = await PostNewUser(name,member,email,password,uid);
    console.log(newUser);
    res.status(201).json({ message: "User created successfully " });

    }catch (error) {
    console.error(error); // log the error for debugging purposes
    res.status(500).send("create failed: " + error.message);
  }
};


module.exports = { createAuth };