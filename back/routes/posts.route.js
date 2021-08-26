const Post = require('../app/db/models/posts.model')
const router = require('express').Router()
const responseCreator = require('../app/helpers/respose.helper')
const auth = require('../app/middelware/auth')
const upload = require('../app/middelware/upload-file')
const multer = require('multer')


router.post('/addpost', auth, upload.single('file') ,async(req, res)=>{
    try{
        const postData = new Post(req.body)
        postData.img = req.file.path
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