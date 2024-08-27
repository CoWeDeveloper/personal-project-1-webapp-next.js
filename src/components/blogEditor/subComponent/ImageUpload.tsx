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
    <div className="flex flex-col w-full max-w-[300px] space-y-2 text-center self-end justify-end">
  <div className="w-full  ">
    {preview ? (
      <Image
        src={preview}
        alt="Image Preview"
        width={500}
        height={500}
        className="max-w-full h-auto rounded shadow-md"
      />
    ) : (
      <div className="w-full h-auto bg-gray-200 rounded shadow-md"></div>
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
