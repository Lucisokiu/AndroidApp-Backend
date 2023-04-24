const { get, ref, set, push } = require("firebase/database");
const { database } = require('../config/db.config');


const Post = async(req, res) => {
    try {
        const Ref = ref(database, `/Posts`);
        const post = await get(Ref);
        // chuỗi json trả về là {"id":{},"id":{},....}
        // res.status(200).send(post);
        


        // nếu muốn chuối json trả về 1 mảng là [{},{},...]

        // có 2 cách làm
        
        // const arr = []
        // Object.keys(post.val()).map((key) => {
        //   // console.log(post.val()[key]);
        //   arr.push(post.val()[key]);
        // });


        const arr = []
        for ( let i in post.val())
        {
          arr.push(post.val()[i]);
        }

        // const arr = Object.entries(post.val());

        res.status(200).send(arr);
        } catch (error) {
          console.error(error);
          res.status(500).send("Error fetching Post from database");
        }}


const PostDetail = async(req, res) => {
  try {
    const Ref = ref(database, `/Posts/${req.body.idpost}`);
    const post = await get(Ref);
    res.status(200).send(post);
    

    // chuyển object về array
    // const arr = [];
    // for ( let i in post.val())
    // {
    //   arr.push(post.val()[i]);
    // }
    // const arr = Object.entries(post.val());
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching Post from database");
    }
}


const PostCount = async (req,res) => {
  try {
    const Ref = ref(database, `/Posts/`);
    const post = await get(Ref);
    const counterPost = Object.keys(post.val()).length;
    res.status(200).send({counterPost});
  } catch (error) {
  console.error(error);
  res.status(404).send("Error fetching Post from database");
  }

}

const NewPost = async (req,res) => {
  try{
  const { date, postImage, description,publisher,profile,memer,username,counterPost} = req.body;
  var keyid = push(ref(database)).key;
  const Ref = ref(database, `/Posts/${keyid}`);

  const newpost = {
    date: date,
    postImage: postImage,
    description: description,
    publisher: publisher,
    profile: profile,
    memer: memer,
    username: username,
    counterPost : counterPost,
    postid : keyid,
    };
    await set(Ref, newpost);
  res.status(200).send("Post added!!!");
  }catch(error){
    res.status(404).send(error);
    console.log(error);
  }

}


module.exports = { Post,PostDetail,PostCount,NewPost }