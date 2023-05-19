
const { uploadBytesResumable, getDownloadURL, ref:RefStorage } = require('firebase/storage');
const { storageBucket } = require('../../config/db.config');
const { updateProfile, updateBackground } = require('../../services/storages/storage.service');


const uploadProfile = async (req,res) => {
    try {
      // Get the file from the request object
      const file = req.file.originalname;
      // Name file = uid
      const uid = file.split(".")[0];
      // Upload the file to Firebase Storage
      const storageRef = RefStorage(storageBucket, `Profiles/${file}`);
      const snapshot = await uploadBytesResumable(storageRef, req.file.buffer,{ contentType: 'image/jpeg' });
      const downloadURL = await getDownloadURL(snapshot.ref);
      // Send a response indicating success
      const reponseUpdate = await updateProfile(uid, downloadURL)
      // Send a response indicating success
      console.log(reponseUpdate)
      if(reponseUpdate == 1)
      {      
        res.status(200).send(`"uploadProfile success!!"`);  
      }
      else{
      res.status(404).send(uid + " not found");
      }
      
    } catch (err) {
      // Send a response indicating failure
      res.status(500).send(err.message);
    }
  }
  
const uploadBackgrounds= async (req,res) => {
    try {
      // Get the file from the request object
      const file = req.file.originalname;
      // Name file = uid
      const uid = file.split(".")[0];
      // Upload the file to Firebase Storage
      const storageRef = RefStorage(storageBucket, `Backgrounds/${file}`);
      const snapshot = await uploadBytesResumable(storageRef, req.file.buffer,{ contentType: 'image/jpeg' });
      const downloadURL = await getDownloadURL(snapshot.ref);
      // Send a response indicating success
      const reponseUpdate = await updateBackground(uid ,downloadURL)
      console.log(reponseUpdate)
      if(reponseUpdate == 1)
      {      
        res.status(200).send(`"uploadBackgrounds success!!"`);  
      }
      else{
      res.status(404).send(uid + " not found");
      }
      
    } catch (err) {
      // Send a response indicating failure
      res.status(500).send(err.message);
    }
  }

const uploadPosts = async (req,res ) => {
  try {
    // Get the file from the request object
    const file = req.file.originalname;
    // Name file = uid
    const Name = file.split(".")[0];
    // Upload the file to Firebase Storage
    const PostsRef = RefStorage(storageBucket, `Posts/${Name}`);
    const snapshot = await uploadBytesResumable(PostsRef, req.file.buffer,{ contentType: 'image/jpeg' });
    // const downloadURL = 
    await getDownloadURL(snapshot.ref);
    // Send a response indicating success    
      res.status(200).send(`"uploadPosts success!!"`);  
      console.log("uploadPosts success!!")
      
  } catch (err) {
    // Send a response indicating failure
    res.status(500).send(err.message);
  }
}
  module.exports = { uploadProfile, uploadBackgrounds,uploadPosts }