const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const location = path.join("profile",'')// (req.user._id).toString() )
        console.log(location)
        fs.mkdir(location, (err)=>{})
        cb(null, location)
    },
    filename: function(req, file, cb){
        let myName = file.fieldname +"-"+Date.now()+ path.extname(file.originalname)
        cb(null, myName)
    }
})

const upload = multer({
    storage: storage,
    limits:{ fileSize: 150000},
    fileFilter: function(req, file, callback){
        ext = path.extname(file.originalname)
        if(ext!= ".jpg") return callback(new Error('invalid Extension'))
        callback(null, true)
    }
})

module.exports = upload