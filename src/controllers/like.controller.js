const { get, ref, set, push } = require("firebase/database");
const { database } = require('../config/db.config');


const isLike = async ( req, res ) => {
    const { postid } = req.body;
    try{
    const Ref = ref(database, `/Likes/${postid}`);
    const like = await get(Ref);
    
    const arr = []
    for ( let i in like.val())
    {
      arr.push({postid});
    }
    res.status(200).send(arr);
    } catch (error) {
        res.status(404).send(error);
    }
}


const addLike = async (req, res) => {
  try{
  const {uid, postid} = req.body;
  const Ref = ref(database, `/Likes/${postid}/${uid}`);
  await set(Ref, true);
  res.status(200).send("Likes added!!!");
  }catch(error){
    res.status(404).send(error);
  }
}



const unLike = async (req, res) => {
  const {uid, postid} = req.body;
  const Ref = ref(database, `/Likes/${postid}/${uid}`);
  await remove(Ref);
}

module.exports  = { isLike,addLike,unLike };