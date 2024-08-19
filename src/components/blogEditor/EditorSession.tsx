import Image from "next/image";
import {useState} from "react";
import dynamic from 'next/dynamic';
import {Eye} from 'lucide-react';
import ImageUpload from './ImageUpload';
import 'react-quill/dist/quill.snow.css'; // import Quill's styles
import {addBlog} from "@/lib/tableData";


// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function EditorSession() {



  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [subDescription, setSubDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);


  // Function to extract the first image URL from Quill content
  const extractImageFromContent = (content: string): string | null => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  function formatDate(dateString : any) {
    const date: any = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US',   
   options); 
  }

  // Function to handle publishing the blog
  const handlePublish = () => {
    if (content.trim() === '' || title.trim() === '' || image === null) {
      return alert('Title, content, and image cannot be empty');
    }

    // const textContent = extractTextFromContent(content);
    const optionalImage = extractImageFromContent(content);
    

    const newBlog = {
      id: String(Date.now()),
      bgImg: image ? URL.createObjectURL(image) : '/default-image-path',
      title: title,
      subDescripation: subDescription,
      content: content, // Store plain text
      optionalImage: optionalImage ?? undefined,
      date: formatDate(new Date()),
    };

    addBlog(newBlog);

    setContent('');
    setTitle('');
    setSubDescription('');
    setImage(null);

    alert('Blog published successfully!');
  };

  // Function to handle content change in the editor
  const handleContentChange = (value: string) => {
    setContent(value);
  };
  
  const handlePreview = () => {
    if (content.trim() === '' || title.trim() === '' || image === null) {
      return alert('Title, content, and image cannot be empty');
    }

    const optionalImage = extractImageFromContent(content);

    const previewBlog = {
      id: String(Date.now()), // Use a temporary ID for preview
      bgImg: image ? URL.createObjectURL(image) : '/default-image-path',
      title: title,
      subDescripation: subDescription,
      content: content,
      optionalImage: optionalImage ?? undefined,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    }; 
    
    // Navigate to the preview page with the generated ID
    localStorage.setItem('previewBlog', JSON.stringify(previewBlog));

    window.open(`/blogs/${previewBlog.id}`, '_blank')
  };
  // Count words in the content
  const wordCount = content
  .trim()                // Remove leading and trailing spaces
  .replace(/\s+/g, ' ')  // Replace multiple spaces with a single space
  .split(' ')            // Split the string by spaces
  .filter(Boolean)       // Remove empty strings
  .length;    

  // Quill editor toolbar configuration
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
    <div className="w-full ">
<div className="flex justify-end items-center w-full container mb-4">
 {/* <h1 className="text-2xl font-extrabold text-black ">
  Write a New Blog
 </h1> */}
      <div className=" flex space-x-4">
      
        <button onClick={handlePreview}  className="flex items-center rounded-md justify-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white px-4 py-2 rounded shadow duration-300"> 
          <Eye className='w-5 mr-2' />
          Preview
        </button>
       
        <button 
          onClick={handlePublish}
          className="flex justify-center items-center bg-green-500 text-white px-2 rounded-md shadow hover:bg-green-600 duration-300"
          >
          <Image
            className="mr-2"
            src="/assets/icons/Demo/send.svg" 
            width={16}
            height={16} 
            alt="laptop with screen displaying calendar" 
          />  
          Publish
        </button>
      </div>
            </div>
      <div className="container relative min-h-screen mx-auto p-4 bg-[#e6effa] shadow-2xl rounded-lg">
        <h1 className="text-2xl font-extrabold mb-4 text-black flex ">
        <Image 
        className="mr-2"
        src="/assets/icons/Blogs/penBlack.png" 
        width={24}
        height={24} 
        alt="laptop with screen displaying calendar" 
        />
          
          Write a New Blog</h1>
        
        <div className="flex flex-col">

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          placeholder='Write a title'
          className='py-1 px-2 my-2 w-1/5 focus-within:w-1/2 rounded-sm bg-[#e6effa] outline-none border-b-2 duration-700 transition-all border-[#07598593] focus-within:border-[#075985] focus-within:rounderd-lg '
          />

<textarea
  value={subDescription}
  onChange={(e) => setSubDescription(e.target.value)}
  placeholder='Sub Title(optional)'
  className='text-sm w-2/4 h-16 py-1 px-2 my-2 rounded-lg outline-none duration-700 transition-all border-2 border-[#075985a2] focus-within:border-[#075985]'
/>
          </div>
        
        <ImageUpload setImage={setImage} />
        <div className='h-full bg-white'>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            modules={modules}
            theme="snow"
            placeholder='Compose an epic...'
            className={`w-full custom-quill`}
            />
        </div>
        <div className="text-right text-gray-600 text-xs mt-1 font-semibold">
          Word Count: {wordCount}
        </div>
      </div>
            </div>
    </>
  );
}

export default EditorSession;
