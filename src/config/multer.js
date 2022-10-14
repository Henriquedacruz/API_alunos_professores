import multer from 'multer';


const dirmulter = (multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, '././public/upload/observatorio')
        },
        filename: (req, file, cb) => {
            cb(null, Date.now().toString() + "_" + file.originalname)  
        }
    }),
    fileFilter: (req, file, cb) => {
        const extensaoImg = ['image/png', 'image/jpg', 'image/jpeg', 'video/webm', 'application/pdf'].find(formatoAceito => formatoAceito == file.mimetype);

        if(extensaoImg){
            return cb(null, true);
        }

        return cb(null, false);
    }
}));

export default dirmulter;