const { ref, get } = require("firebase/database");
const { database } = require("../config/db.config");




const favourite = async (req,res) => {
    try{
        const { uid } = req.body;
        const Ref = ref(database,`Favourites/${uid}`);
        const favorite_id = await get(Ref);
        if(favorite_id.val() == null)
        {
            res.status(404).send(favorite_id);
        }else{
    
            const arr = []
            for ( let i in favorite_id.val())
            {
              arr.push(i);
            }
            res.status(200).send(arr);        }
    }catch(error)
    {
        res.status(404).send(error);
    }
}

const addFavor = async (req,res) => {
    try{
    const {uid, postid} = req.body;
    const Ref = ref(database, `/Favourites/${uid}/${postid}`);
    await set(Ref, true);
    res.status(200).send("Favorite added!!!");
    }catch(error){
      res.status(404).send(error);
    }

}


const unFavor = async (req, res) => {
    const {uid, postid} = req.body;
    const Ref = ref(database, `/Favourites/${uid}/${postid}`);
    await remove(Ref);
  }
module.exports = { favourite,addFavor,unFavor }