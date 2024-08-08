import { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex items-center my-2">
      <label
        htmlFor="imageUpload"
        className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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
      {preview && (
        <div className="ml-5 w-24">
          <img src={preview} alt="Image Preview" className="max-w-full h-auto rounded shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
