"use client"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import Quill's styles
import {useState} from "react";
import ImageUpload from './ImageUpload';

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function EditorSession() {
    const [content, setContent] = useState<string>('');

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const wordCount = content.split(/\s+/).filter(Boolean).length;

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

    return (
        <div className="container relative min-h-screen mx-auto p-4 bg-amber-100 shadow-lg rounded-lg max-w-3xl ">
        <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
        <input
         type="text" 
         placeholder='Write a title'
         className='w-full py-2 px-2 my-2'
        />
        <input
         type="text" 
         placeholder='Title Sub description (optional)'
         className='text-sm w-64 py-1 px-2 my-2'
        />
        <ImageUpload />
        <div className='h-full bg-white '>

        <ReactQuill
          value={content}
          onChange={handleContentChange}
          modules={modules}
          theme="snow"
          placeholder='Compose an epic...'
          
          className={`w-full   custom-quill `} // Apply the custom class
          />
          </div>
        <div className=" text-right text-gray-600 text-xs mt-1 font-semibold ">Word Count: {wordCount}</div>
      </div>
  )
}

export default EditorSession
