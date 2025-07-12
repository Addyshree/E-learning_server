// import multer from "multer";
// import { v4 as uuid } from "uuid";

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename(req, file, cb) {
//     const id = uuid();

//     const extName = file.originalname.split(".").pop();

//     const fileName = `${id}.${extName}`;

//     cb(null, fileName);
//   },
// });

// export const uploadFiles = multer({ storage }).single("file");

// //install - multer, uuid

import fs from "fs";
import path from "path";
import multer from "multer";
import { v4 as uuid } from "uuid";

// Ensure the uploads folder exists
const uploadPath = path.join("uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadPath);
  },
  filename(req, file, cb) {
    const id = uuid();
    const extName = file.originalname.split(".").pop();
    const fileName = `${id}.${extName}`;
    cb(null, fileName);
  },
});

export const uploadFiles = multer({ storage }).single("file");
