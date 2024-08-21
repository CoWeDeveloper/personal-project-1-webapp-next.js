"use client"
import Image from "next/image";
import { useState, useEffect,} from "react";
import dynamic from 'next/dynamic';
import { Eye } from 'lucide-react';
import ImageUpload from './subComponent/ImageUpload';
import 'react-quill/dist/quill.snow.css'; // import Quill's styles
import { tableData, addBlog } from "@/lib/tableData";
import { useSearchParams } from "next/navigation";
import { useRouter} from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { WarningToast } from "./subComponent/CustomToaster";
import CustomToolbar from './subComponent/CustomToolbar';


// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });


function EditorSession() {
  const [author, setAuthor] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [subDescription, setSubDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [editorMode, setEditorMode] = useState<boolean>(false);
  const [blogId, setBlogId] = useState<string | null>(null);
  
  const router = useRouter();
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") as string;
 


  useEffect(() => {
     
    if (id) {
      const blog = tableData.find((blog: any) => blog.id == id);

      if (blog) {
        setAuthor(blog.author);
        setTitle(blog.title);
        setContent(blog.content);
        setSubDescription(blog.subDescripation);
        setImageURL(blog.bgImg); // Set existing image URL
        setEditorMode(true);
      } 
    }
    setBlogId(id);
  }, [id, title]);

  const extractImageFromContent = (content: string): string | null => {
    const doc = new DOMParser().parseFromString(content, 'text/html');
    const img = doc.querySelector('img');
    return img ? img.src : null;
  };

  function formatDate(dateString: any) {
    const date: any = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const handlePublish = () => {
    if (content.trim() === '' || title.trim() === '' || (!image && !imageURL)) {
         toast({
          description: <WarningToast />,
          variant: "destructive"
        });
        return
    }

    const optionalImage = extractImageFromContent(content) ?? '';

    const updatedBlog = {
        id: blogId || String(Date.now()), 
        bgImg: image ? URL.createObjectURL(image) : imageURL || '/default-image-path',
        author: author,
        title: title,
        subDescripation: subDescription,
        content: content,
        optionalImage: optionalImage,  
        date: formatDate(new Date()),
    };

    if (editorMode && blogId) {
        const index = tableData.findIndex(blog => blog.id === blogId);
        if (index !== -1) {
            tableData[index] = updatedBlog;
        } 
    } else {
        addBlog(updatedBlog);
       localStorage.setItem('blogSubmitted', 'true');
       return router.push('/posts');
    }

    // Set a flag to show the toast on /posts page
    localStorage.setItem('blogUpdated', 'true');
    router.push('/posts');
};

  
  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handlePreview = () => {
    if (content.trim() === '' || title.trim() === '' || (!image && !imageURL) || author.trim() === '') {
      return alert('Title, content, and image cannot be empty');
    }

    const optionalImage = extractImageFromContent(content);

    const previewBlog = {
      id: String(Date.now()),
      bgImg: image ? URL.createObjectURL(image) : imageURL || '/default-image-path',
      author: author,
      title: title,
      subDescripation: subDescription,
      content: content,
      optionalImage: optionalImage ?? undefined,
      date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    };

    localStorage.setItem('previewBlog', JSON.stringify(previewBlog));
    window.open(`/blogs/${previewBlog.id}`, '_blank');
  };

  const wordCount = content
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .length;

  // const modules = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike'],
  //     ['blockquote', 'code-block'],
  //     ['link', 'image'],
  //     [{ 'font': [] }],
  //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  //     [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
  //     [{ 'indent': '-1' }, { 'indent': '+1' }],
  //     [{ 'align': [] }],
  //     [{ 'script': 'sub' }, { 'script': 'super' }],
  //     [{ 'direction': 'rtl' }],
  //     [{ 'color': [] }, { 'background': [] }],
  //     ['clean']
  //   ],
  // };

  const modules = {
    toolbar: {
      container: "#toolbar", // Attach the custom toolbar
    },
  };

  return (
    <>
    
      <div className="w-full ">
      <div className="flex mt-5  ">
        <div className="flex flex-col w-full px-4">

            <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
            className="py-1 px-2 my-2 text-lg w-full outline-none border-b-2 transition-all border-[#154d8f] focus:border-sky-600 focus:bg-white"
             />
            
            <input
              type="text"
              value={title}
              
              onChange={(e) => setTitle(e.target.value)} 
              placeholder='Write a title'
              className={`py-1 px-2 my-2 text-lg  rounded-sm   outline-none border-b-2 transition-all border-gray-300 focus:border-gray-400 focus:bg-white
              `}/>
            <textarea
              value={subDescription}
              onChange={(e) => setSubDescription(e.target.value)}
              placeholder='Sub Title (optional)'
              className='text-sm resize-none  h-16 py-1 px-2 my-2 rounded-sm outline-none duration-700 transition-all border-b-2 border-gray-300 focus:border-gray-400 '
            />
            </div>
            
          <div className="flex items-start space-x-4  px-2">
            <button onClick={handlePreview} className="flex items-center rounded-md justify-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white px-2 py-2 shadow duration-300">
              <Eye className='w-5 mr-2' />
              Preview
            </button>

            <button 
              onClick={handlePublish}
              className="flex justify-center items-center bg-green-500 text-white rounded-md shadow hover:bg-green-600 duration-300 px-4 py-2"
            >
              <Image
                className="mr-2"
                src="/assets/icons/Demo/send.svg" 
                width={16}
                height={16} 
                alt="laptop with screen displaying calendar" 
              />
              {editorMode ? 'Update' : 'Publish'}
            </button>
          
        </div>
          </div>
        <CustomToolbar />

        <div className="bg-gray-100 w-full pt-2">
        <ImageUpload setImage={setImage} existingImageURL={imageURL} />

        <div className="container relative min-h-screen mx-auto p-4  drop-shadow-2xl rounded-lg  pt-10 ">
      
          
          

          <div className='h-full bg-white'>
          

            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              theme="snow"
              placeholder='Compose an epic...'
              className='w-full custom-quill'
            />
          </div>
          <div className="text-right text-gray-600 text-xs mt-1 font-semibold">
            Word Count: {wordCount}
          </div>
        </div>
              </div>
      </div>
    </>
  );
}

export default EditorSession;
