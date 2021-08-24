const Post = require('../app/db/models/posts.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/respose.helper')
const auth = require('../app/middelware/auth')
const upload = require('../app/middelware/upload-file')


router.post('/addpost', auth, upload.single('profile') ,async(req, res)=>{
    try{
        const postData = new Post(req.body)
        console.log(postData)
        await postData.save()
        const response = responseCreator(true, postData, "data inserted")
        res.status(200).send(response)
    }
    catch(e){
        const response = responseCreator(false, e.message, "error inserting data")
        res.status(500).send(response)
    }
})
module.exports= router