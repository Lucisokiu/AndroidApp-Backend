const { get, ref, set, push } = require("firebase/database");
const { database } = require('../config/db.config');

const getComment = async (req,res) => {
    try {
        const postid = req.body
        const Ref = ref(database, `/Comments/${postid}`);
        const comments = await get(Ref);
        const arr = []
        for ( let i in comments.val())
        {
          arr.push(comments.val()[i]);
        }
        res.status(200).send(arr);
    }catch(error){

    }
}


const CommentCount = async (req,res) => {
  try {
    const {postid} = req.body

    const Ref = ref(database, `/Comments/${postid}`);
    const comments = await get(Ref);

    const arr = []
    const key = Ref.key;
    for ( let i in comments.val())
    {
      arr.push(comments.val()[i]);
    }
    const size = arr.length
    console.log(size)
    res.status(200).send(`${size}`);
  } catch (error) {
  console.error(error);
  res.status(404).send("Error fetching Comments from database");
  console.log(error);
  }

}


module.exports = { getComment, CommentCount}