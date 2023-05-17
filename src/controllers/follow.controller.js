const { get, ref, push, set, remove } = require("firebase/database");
const { database } = require('../config/db.config');


const Follow = async(req, res) => {
    try {
        const { uid } = req.body;
        const Ref = ref(database, `/Follow/${uid}`);
        const followid = await get(Ref);    
        if(followid.val() == null)
        {
          res.status(404).send(followid);

        }else{
          res.status(200).send(followid);

        }
        } catch (error) {
          console.error(error);
          res.status(500).send("Error fetching uid from database");
        }
}
    

const Following = async(req, res) => {
  try {
      var a = []
      const { uid } = req.body;
      const Ref = ref(database, `/Follow/${uid}/following`);
      const followingid = await get(Ref);    
      if(followingid != null)
      {
        for ( let i in followingid.val())
        {
          a.push(i);
        }
        res.status(200).send(a);

      }else{
        res.status(200).send(followingid.val());

      }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching following from database");
      }
}


const Followers = async(req, res) => {
  try {
      var a = []
      const { uid } = req.body;
      const Ref = ref(database, `/Follow/${uid}/followers`);
      const followingid = await get(Ref);    
      if(followingid != null)
      {
        // Object.keys(followingid.val()).map((key) => {
        //   a.push(followingid.val());
        // })
        // res.status(404).send("null");
        for ( let i in followingid.val())
        {
          a.push(i);
        }
        res.status(200).send(a);

      }else{
        res.status(200).send(followingid.val());

      }
      } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching following from database");
      }
}

const unFollow = async(req, res) => {
  const {uid , followid } = req.body
  const unFollowingRef = ref(database, `/Follow/${uid}/following/${followid}`);
  const unFollowersRef = ref(database, `/Follow/${followid}/followers/${uid}`);
  try {
    await remove(unFollowingRef);
    await remove(unFollowersRef);
    res.status(200).send("Success!!!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed!!!");
  }

}
const addFollow = async(req, res) => {
  const {uid , followid } = req.body
  const Following = ref(database, `/Follow/${uid}/following/${followid}`);
  const Followers = ref(database, `/Follow/${followid}/followers/${uid}`);
  await push(Following);
  await push(Followers);
  await set(Following, true);
  await set(Followers, true);
  res.status(200).send("Success!!!")

}

module.exports = {Follow, Following , Followers,unFollow,addFollow}