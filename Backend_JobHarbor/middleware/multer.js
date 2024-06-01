import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'resume')
    },
    filename: function (req, file, cb) {
      cb(null,req.params.id+ path.extname(file.originalname))
    }
  })
const BlogsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Job-harbor/src/BlogsPhoto')
    },
    filename: function (req, file, cb) {
      cb(null,req.params.id+Date.now()+ path.extname(file.originalname))
    }
  })
  
  export const upload = multer({ storage: storage }) 
  export const BlogImageupload = multer({ storage: BlogsImageStorage }) 