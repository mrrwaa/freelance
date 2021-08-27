


const Post = require('../db/models/posts.model')
const auth = require("../middelware/auth")
 
const postauth =async(req,res, next)=>{
if(auth()){
      
    Post.findById(req.params.id,function(err,found){
      if(err){
        res.redirect("/")
      }else{
        //dose the user own the camprground
        if(found.author.id.equals(req.user._id)){
        next()
        }else{
          req.flash("error","you dont have permission to do  that")
          res.redirect("back");
        }
      
      }
    })
   }else{
    req.flash("error","you need to be logged in")
     res.redirect("back");
   };
}



module.exports = postauth