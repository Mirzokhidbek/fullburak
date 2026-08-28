import path from "path";
import multer from "multer";

/** MULTER UPLOADER CONFIGURATION **/
function getTargetImageStore(address: string) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/uploads/${address}`);
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname);
      const randomName = `${Date.now()}_${Math.round(Math.random() * 1e9)}${extension}`;
      cb(null, randomName);
    },
  });
}

const makeUploader = (address: string) => {
  const storage = getTargetImageStore(address);
  return multer({ storage: storage });
};

export default makeUploader;
