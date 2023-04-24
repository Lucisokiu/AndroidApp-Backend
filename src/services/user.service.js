const { get, ref, set, update } = require("firebase/database");
const { database } = require('../config/db.config');


const PostNewUser = async (name, member, email, password,user_id) => {
  const background="null";

  const profileUrl="null";

  try {
    const userRef = ref(database, `/Users/${user_id}`);
    const userSnapshot = await get(userRef);
    if (userSnapshot.exists()) {
    console.log("User already exists");
    return;
    } else {
    const newUser = {
    username: name,
    memer: "@" + member,
    email: email,
    password: password,
    profileUrl: profileUrl,
    background: background,
    user_id: user_id,
    };
    await set(userRef, newUser);
    console.log("User created successfully - Service");
    return newUser;
    }
  }
    catch(error){
    throw new Error(error);
  }
};









module.exports = { PostNewUser }