const { get, ref, push, set, remove } = require("firebase/database");
const { database } = require('../config/db.config');


const addNotifi = async(req, res) => {
    try{
    const {uid, userid,comment,postid } = req.body
    var keyid = push(ref(database)).key;
    const Ref = ref(database, `/Notifications/${uid}/${keyid}`);
    if(postid != null)
    {
    const newNotifi = {
        comment:comment,
        ispost:true,
        postid:postid,
        userid:userid,

    }
    await set(Ref, newNotifi);
}else{
        const newNotifi = {
        comment:comment,
        ispost:false,
        postid:postid,
        userid:userid,

    }
    await set(Ref, newNotifi);
}
    console.log("Notifi added!!!");

    res.status(201).send("Notifi added!!!");
}catch(error)
{
    res.status(500).send(error);

}

  
}

const getNotifi = async(req,res) => {
    try{
        const {uid} = req.body;
    const Ref = ref(database, `/Notifications/${uid}`);
    const notifi = await get(Ref);
    const arr = [];
    for ( let i in notifi.val())
        {
        let noti = notifi.val()[i];
        arr.push(noti);
        }
    res.status(200).send(arr);
    }catch(error){
        res.status(404).send(error);
    }
    
}


module.exports = { addNotifi, getNotifi }