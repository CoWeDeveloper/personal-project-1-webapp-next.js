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
  const [subDescripation, setSubDescripation] = useState<string>('');
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
      const fetchData = async () => {
        try {
          
          const response = await fetch(`/api/blogs/${id}`); // Use dynamic route to fetch blog post
          if (response.ok) {
            const blog = await response.json();
            setAuthor(blog.author);
            setTitle(blog.title);
            setContent(blog.content);
            setSubDescripation(blog.subDescripation);
            setImageURL(blog.bgImg);
            setEditorMode(true);
          } else {
            console.error("Failed to fetch blog post:", response.status);
          }
        } catch (error) {
          console.error("Error fetching blog post:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  // const extractImageFromContent = (content: string): string | null => {
  //   const doc = new DOMParser().parseFromString(content, 'text/html');
  //   const img = doc.querySelector('img');
  //   return img ? img.src : null;
  // };

  function formatDate(dateString: any) {
    const date: any = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  const handlePublish = async () => {
    if (content.trim() === '' || title.trim() === '' || (!image && !imageURL)) {
         toast({
          description: <WarningToast />,
          variant: "destructive"
        });
        return
    }
 
    // const optionalImage = extractImageFromContent(content) ?? '';

    const blogData = {
        id: editorMode ? Number(blogId) : undefined, 
        bgImg: image ? URL.createObjectURL(image) : imageURL || '/default-image-path',
        author: author,
        title: title,
        subDescripation: subDescripation,
        content: content,
        // optionalImage: optionalImage ?? undefined,  
        date: formatDate(new Date()),
    };
    try{
      const url = editorMode ? `/api/blogs/${id}` : `/api/blogs`;
      const response = await fetch(url, {
        method: editorMode ? "PUT" : "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData), //convert object into array
      })
      console.log(response)
      
      
    if (response.ok) {
      const blogData = await response.json();
      if (editorMode) {
        setAuthor(blogData.author); // Update state with new values
        setTitle(blogData.title);
        setContent(blogData.content);
        setSubDescripation(blogData.subDescripation);
        setImageURL(blogData.bgImg);
        setBlogId(blogData.id);
        localStorage.setItem('blogUpdated', 'true');
      } else {
        localStorage.setItem('blogSubmitted', 'true');
      }
      router.push('/posts');
    } else {
      throw new Error('Failed to save the blog post.');
    }
  } catch (error) {
    console.error('Error publishing the blog:', error);
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
      toast({
          description: <WarningToast />,
          variant: "destructive"
      });
      return;
    }

    // const optionalImage = extractImageFromContent(content);
    const previewBlog = {
      id: String(Date.now()),
      bgImg: image ? URL.createObjectURL(image) : imageURL || '/default-image-path',
      author: author,
      title: title,
      subDescripation: subDescripation,
      content: content,
      // optionalImage: optionalImage ?? undefined,
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

  const modules = {
    toolbar: {
      container: "#toolbar", // Attach the custom toolbar
    },
  };

  return (
    <>
    
      <div className="w-full relative">
      <div className="flex mt-2 sm:flex-nowrap md:mb-0 justify-center xs:flex-wrap xs:mb-5">
        <div className="flex flex-col w-full px-3">
            <div className="w-full relative mt-2">
            <input
            id="name"
            name="name"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder=""
            className="peer pt-2 my-2 text-lg w-full outline-none border-b-2 transition-all border-[#154d8f] focus:border-sky-600 focus:bg-white text-gray-500 focus:text-gray-600 font-medium"
            />
            <label
            htmlFor="name"
            className="transform -translate-y-4 scale-75 top-2 absolute text-stone-400 duration-300
            origin-[0] bg-white peer-focus:px-2 peer-placeholder-shown:scale-100 
            peer-placeholder-shown:top-1/2 peer-focus:text-[#4796cd] peer-focus:font-semibold
            peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-0 "
            >
              Author Name
            </label>
            </div> 
            <div className="w-full relative my-2">
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              placeholder=''
              className={`peer pt-2 my-2 text-lg w-full rounded-sm outline-none border-b-2 transition-all border-gray-300 focus:border-gray-400 focus:bg-white text-gray-500 focus:text-gray-600 
                `}/>
                <label htmlFor="title"
                 className="transform -translate-y-4 scale-75 top-2 absolute text-stone-400  duration-300
                 origin-[0] bg-white peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-medium
                 peer-placeholder-shown:top-1/2 peer-focus:text-[#4796cd] peer-focus:font-semibold
            peer-focus:top-2 peer-focus:scale-75
              peer-focus:-translate-y-4 left-0"
                >
                  Write a Title
                </label>
                </div>
                <div className="w-full relative">
            <textarea
              id="subTitle"
              name="subTitle"
              value={subDescripation}
              onChange={(e) => setSubDescripation(e.target.value)}
              placeholder=''
              className='peer w-full text-sm font-medium resize-none h-16 py-1 my-2 rounded-sm outline-none duration-700 transition-all border-b-2 border-gray-300 focus:border-gray-400 text-gray-500 focus:text-gray-600'
              />
              <label htmlFor="subTitle"
                  className="transform -translate-y-5 scale-75 top-2 absolute  text-stone-400 duration-300
                  origin-[0] bg-white peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:font-medium 
                  peer-placeholder-shown:top-4 peer-focus:text-[#4796cd] peer-focus:font-semibold
                  peer-focus:top-2 peer-focus:scale-75
                  peer-focus:-translate-y-5 left-0"
              >
              Sub Title (optional)
              </label>
              </div>
            <CustomToolbar />
            </div>
            
          <div className="flex flex-col pr-2">
            <div className="flex space-x-2 items-start">

            <button onClick={handlePreview} className="flex items-center rounded-md justify-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white px-2 py-2 duration-300">
              <Eye className='w-5 mr-2' />
              Preview
            </button>

            <button 
              onClick={handlePublish}
              className="flex justify-center items-center bg-green-500 text-white rounded-md  hover:bg-green-600 duration-300 px-4 py-2"
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

        <ImageUpload setImage={setImage} existingImageURL={imageURL} />

        </div>
          </div>
        <div className="bg-gray-100 w-full pt-2 pb-10">

        <div className="container mx-auto p-4  drop-shadow-2xl rounded-lg  pt-10 ">

          <div className=' bg-white'>
            <ReactQuill
              value={content}
              onChange={handleContentChange}
              modules={modules}
              theme="snow"
              placeholder='Compose an epic...'
              className='w-full custom-quill '
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
