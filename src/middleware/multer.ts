// middleware/multerMiddleware.ts

import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original filename for uploaded files
  },
});

const upload = multer({
  storage,
});

export const uploadMiddleware = upload.single('file'); // 'file' is the name of the field in your form
