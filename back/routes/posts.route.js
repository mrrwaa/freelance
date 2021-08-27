const Post = require('../app/db/models/posts.model')
const User = require('../app/db/models/user.model')
const router = require('express').Router()
const  responseCreator = require('../app/helpers/respose.helper')
const auth = require('../app/middelware/auth')
const upload = require('../app/middelware/upload-file')



router.post('/addpost', auth, upload.single('file') ,async(req, res)=>{
    try{
        const postData = new Post({
            ...req.body,
            userId:req.user._id 
        })
        
        await postData.save()
        const response = responseCreator(true, postData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
router.get('/allPosts', async(req,res)=>{
    try{
        const data = await Post.find()
        res.status(200).send({
            apiStatus:true,
            data,
           message:"loading data" })
       
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error loading data"
        })
    }
})

router.get('/singlepost/:id', async(req,res)=>{
    const id = req.params.id
    try{
        result = await Post.findById(id)
        res.status(200).send({
            apiStatus:true,
            result,
           message:"loading data" }) 
    }
    catch(e){
        res.status(500).send({
            apiStatus:false,
            data:e.message,
            message:"error loading data"
        })
    }
})
router.post('/delete/:id',auth, async(req,res)=>{
    try{
        const user_id = req.user._id
        const post = await Post.find()
        if(user_id !== req.post.userId) res.send('can not deleted')
        const data = await Post.findByIdAndDelete(req.params.id)
        res.status(200).send({
            apiStatus:true,
            data:data,
            message: "deleted"
        })
    }
    catch(e){
        res.status(500).send( responseCreator(false, e.message, "error in delete"))
    }
}
)


module.exports= router