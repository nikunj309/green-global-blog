// "use client"
// import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary'
// import React, { useState } from 'react'

// const page = () => {
//     const [slug, setSlug] = useState('');
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [image1, setImage1] = useState('');
//     const [image2, setImage2] = useState('');
//     const [publicId, setPublicId] = useState("");
//     const [publicId2, setPublicId2] = useState("");

//     const handleImageUpload1 = (result: CloudinaryUploadWidgetResults) => {
//         console.log("result: ", result);
//         const info = result.info as object;

//         if ("secure_url" in info && "public_id" in info) {
//             const url = info.secure_url as string;
//             const public_id = info.public_id as string;
//             setImage1(url);
//             setPublicId(public_id);
//             console.log("url: ", url);
//             console.log("public_id: ", public_id);
//         }
//     };
//     const handleImageUpload2 = (result: CloudinaryUploadWidgetResults) => {
//         console.log("result: ", result);
//         const info = result.info as object;

//         if ("secure_url" in info && "public_id" in info) {
//             const url = info.secure_url as string;
//             const public_id = info.public_id as string;
//             setImage2(url);
//             setPublicId2(public_id);
//             console.log("url: ", url);
//             console.log("public_id: ", public_id);
//         }
//     };


//     const handleSubmit = () => {

//     }
//     return (
//         <div>
//             <h1>Create a New Post</h1>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Slug:
//                     <input type="text" value={slug} onChange={(e) => setSlug(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Title:
//                     <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Description:
//                     <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Image 1:
//                     <CldUploadButton
//                         uploadPreset="owejpqbm"
//                         onSuccess={handleImageUpload1}
//                     >
//                         Upload Image 1
//                     </CldUploadButton>
//                 </label>
//                 <br />
//                 <label>
//                     Image 2:
//                     <CldUploadButton
//                         uploadPreset="owejpqbm"
//                         onSuccess={handleImageUpload2}
//                     >
//                         Upload Image 2
//                     </CldUploadButton>
//                 </label>
//                 <br />
//                 <button type="submit">Create Post</button>
//             </form>
//         </div>
//     )
// }

// export default page