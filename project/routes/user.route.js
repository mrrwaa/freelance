const User = require('../app/db/models/user.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/respose.helper')


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
module.exports= router