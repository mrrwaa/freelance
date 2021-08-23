const User = require('../app/db/models/user.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/respose.helper')
const auth = require('../app/middelware/auth')
const upload = require('../app/middelware/upload-file')

router.post('/register', async(req, res)=>{
    try{
        const userData = new User(req.body)
        console.log(userData)
        await userData.save()
        const response = responseCreator(true, userData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
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

router.get('/me', auth, async(req,res)=>{
    res.status(200).send({
        apiStatus: true,
        date: req.user,
        message: "data featched"
    })
})

router.post('/profile', auth, upload.single('profile'),async (req,res)=>{
    req.user.image = req.file.path
    await req.user.save()
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