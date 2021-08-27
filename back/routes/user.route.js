const User = require('../app/db/models/user.model')
const Post = require('../app/db/models/posts.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/respose.helper')
const auth = require('../app/middelware/auth')
const upload = require('../app/middelware/upload-file')

router.post('/register', async(req, res)=>{
    try{
        const userData = new User(req.body)
        await userData.save()
        const response = responseCreator(true, userData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
    
router.get('/allUsers', async(req,res)=>{
    try{
        const data = await User.find()
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


router.post('/login', async(req, res)=>{
    try{
        const userData = await User.findByCredintials(req.body.email, req.body.password)
        const token = await userData.generateToken()
        res.status(200).send(responseCreator(true, {userData, token}, "Logged in"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
//get user data
router.get('/user', auth, async(req,res)=>{
    res.status(200).send({
        apiStatus: true,
        date: req.user,
        message: "data featched"
    })
})



router.get('/mePosts', auth,  async(req,res)=>{
    const data = await Post.find({userId: req.user._id})
    console.log(data)
    res.status(200).send({
        apiStatus: true,
        data,
        message : "posts featched"
       
    })
})
// gets user profile
router.post('/profile', auth, upload.single('profile'),async (req,res)=>{
    const userData = new User(req.body)
    // userData.image = req.file.path
    req.user.image = req.file.path
    await req.user.save()
    // await userData.save()
    res.send('done')
} )



router.post('/logout', auth, async(req,res)=>{
    try{     
        req.user.tokens = req.user.tokens.filter(ele=>{
            return ele.token!= req.token
        })
        await req.user.save()
        res.status(200).send(responseCreator(true, {}, "Logged out"))
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
module.exports= router