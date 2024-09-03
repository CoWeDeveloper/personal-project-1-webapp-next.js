import { useState, FC, useEffect } from 'react';
import Image from "next/image";

interface ImageUploadProps {
  setImage: React.Dispatch<React.SetStateAction<File | null>>;
  existingImageURL?: string | null;
}

const ImageUpload: FC<ImageUploadProps> = ({ setImage, existingImageURL }) => {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (existingImageURL) {
      setPreview(existingImageURL);
    }
  }, [existingImageURL]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col w-full h-full mb-2 text-center self-end justify-end ">
  <div className="mt-1.5 mb-2.5 self-center">
    {preview ? (
      <Image
        src={preview}
        alt="Image Preview"
        
        width={500}
        height={500}
        className=" rounded-md aspect-square w-64 h-36 shadow-md "
      />
    ) 
    : (
      <div className="aspect-square w-56 h-36 bg-gray-200 rounded shadow-md"></div>
    )}
  </div>
  <label
    htmlFor="imageUpload"
    className="cursor-pointer bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-800"
  >
    Upload Image
  </label>
  <input
    id="imageUpload"
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</div>

  );
};

export default ImageUpload;
