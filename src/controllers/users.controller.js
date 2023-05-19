const { database, storageBucket } = require("../config/db.config");
const { ref, get } = require('firebase/database');


const getAllusers = async ( req ,res ) => {
  try{
    const userRef = ref(database, '/Users');
    const userSnapshot = await get(userRef);
    const arr = []
    for ( let i in userSnapshot.val())
    {
      arr.push(userSnapshot.val()[i]);
    }
    res.status(200).send(arr);
    }
    catch(error){
      console.error(error); // log the error for debugging purposes
      res.status(500).send("Error fetching users from database");
  }
}

const getUser = async ( req ,res ) => {
  try{
    const userRef = ref(database, `/Users/${req.body.uid}`);
    const userSnapshot = await get(userRef);

    if(userSnapshot.exists){
      // console.log(userSnapshot);
      res.status(200).send(userSnapshot);
    }else{
      res.status(404).send(userSnapshot);
      }
    }
    catch(error){
      console.error(error); // log the error for debugging purposes
      res.status(500).send("Error fetching users from database");
  }
}

const getMember = async ( req ,res ) => {
  try{
    const userRef = ref(database, '/Users');
    const userSnapshot = await get(userRef);
    
    res.status(200).send(userSnapshot);
    }
    catch(error){
      console.error(error); // log the error for debugging purposes
      res.status(500).send("Error fetching users from database");
  }
}

module.exports = { getAllusers, getUser }