import { GridFsStorage } from "multer-gridfs-storage"; 
import multer from "multer";

const storage = new GridFsStorage({
    url: 'mongodb://localhost:27017/JobHarborDB',
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"]; // Removed extra space after 'png'
        if (match.indexOf(file.mimetype) === -1) { // Corrected typo and comparison
            return `${Date.now()}-blog-${file.originalname}`;
        }
        return {
            bucketName: 'photos',
            filename: `${Date.now()}-blog-${file.originalname}` 
        };
    }
});

export const blogImageUpload = multer({ storage: storage });
