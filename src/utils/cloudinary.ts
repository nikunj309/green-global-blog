import { v2 as cloudinary } from "cloudinary";
import { extractPublicId } from "cloudinary-build-url";
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
  const uploadOnCloudinary = async (localFilePath:string) => {
    try {
      if (!localFilePath) return null;
  
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
  
      console.log("file is uploaded on cloudinary", response.url);
      fs.unlinkSync(localFilePath);
      return response;
    } catch (error) {
      // If an error occurs during upload, delete the local file and return null
      fs.unlinkSync(localFilePath);
      return null;
    }
  };

  const deleteFromCloudinary = async(url:string, resourceType = "image") => {
    const publicId = extractPublicId(url);
    try {
        const response = await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType
        });
        return response;
    } catch (error) {
        console.log("Error while deleting from cloudinary");
        console.log(error);
        return null;
    }
}

export { uploadOnCloudinary, deleteFromCloudinary };