"use client"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import Quill's styles
import {useState} from "react";
import Image from "next/image";
import ImageUpload from './ImageUpload';
import { Eye } from 'lucide-react';
import {addBlog} from "@/lib/tableData";
// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });



function EditorSession() {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('');
    const [subDescription, setSubDescription] = useState<string>('');
    const [image, setImage] = useState<File | null >(null);

    const handlePublish = () =>{
      if (content.trim() === '' || content.trim() === '' || image === null){
        return alert('Title, content and image cannot be empty');
      }
      
      const newBlog = {
        id: String(Date.now()),
        bgImg: image ? URL.createObjectURL(image): '/default-image-path',
        title: title,
        date: new Date().toLocaleString('default', { month: 'long' }),      
      };
     
      // push data into json
      addBlog(newBlog);
    
      setContent('');
      setTitle('');
      setSubDescription('');
      setImage(null);

      alert('Blog published successfully!')
    }
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
      <>
      <div className="absolute top-4 right-4 flex space-x-4">
          <button className="flex items-center justify-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white px-4 py-2 rounded shadow duration-300"> 
            <Eye className='w-5 mr-2' />
            Preview
          </button>
          
          <button 
          onClick={handlePublish}
          className="flex justify-center items-center bg-green-500 text-white px-2  rounded shadow hover:bg-green-600 duration-300">
          <Image className="mr-2"
          src="/assets/icons/Demo/send.svg" 
          width={16} height={16} 
          alt="laptop with screen displaying calender" />  
            Publish
          </button>
        </div>
        {/* editor */}
        <div className="container relative min-h-screen mx-auto p-4 bg-amber-100 shadow-lg rounded-lg max-w-3xl ">
        <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
        <input
         type="text"
         value={title}
         onChange={(e)=> setTitle(e.target.value)} 
         placeholder='Write a title'
         className='w-full py-2 px-2 my-2'
         />
        <input
         type="text" 
         value={subDescription}
         onChange={(e)=> setSubDescription(e.target.value)}
         placeholder='Title Sub description (optional)'
         className='text-sm w-64 py-1 px-2 my-2'
         />
        <ImageUpload setImage = {setImage} />
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
      </>
  )
}

export default EditorSession
