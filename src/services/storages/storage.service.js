const { get, ref, set, update } = require("firebase/database");
const { database } = require('../../config/db.config');

const updateProfile = async (uid, newProfileUrl) => {
    try {
      //newProfileUrl = uid 
      const userRef = ref(database, `/Users/${uid}`);
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        await update(userRef, {
          profileUrl: newProfileUrl
        });
        console.log("ProfileUrl updated successfully - Service");
        return 1;
      } else {
        console.log("User not found");
        return 2;
      }
    }
      catch(error){
      throw new Error(error);
    }
  };


  const updateBackground = async (uid, newBackgroundUrl) => {
    try {
      //newProfileUrl = uid 
      const userRef = ref(database, `/Users/${uid}`);
      const userSnapshot = await get(userRef);
      if (userSnapshot.exists()) {
        await update(userRef, {
          background: newBackgroundUrl
        });
        console.log("ProfileUrl updated successfully - Service");
        return 1;
      } else {
        console.log("User not found");
        return 2;
      }
    }
      catch(error){
      throw new Error(error);
    }
  };

  module.exports = { updateProfile,updateBackground }