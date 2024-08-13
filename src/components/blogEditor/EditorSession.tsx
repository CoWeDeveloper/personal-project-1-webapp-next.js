"use client";

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import ImageUpload from './ImageUpload';
import { Eye } from 'lucide-react';
import { addBlog } from '@/lib/tableData';
import { Quill } from 'react-quill';

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

function EditorSession() {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [subDescription, setSubDescription] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);

    const handlePublish = () => {
        if (content.trim() === '' || title.trim() === '' || image === null) {
            return alert('Title, content, and image cannot be empty');
        }

        // Extract optional image URL from content
        const optionalImage = extractImageFromContent(content);

        const newBlog = {
            id: String(Date.now()),
            bgImg: image ? URL.createObjectURL(image) : '/default-image-path',
            title: title,
            subDescription: subDescription,
            content: content,
            optionalImage: optionalImage, // Include the optional image URL if present
            date: new Date().toLocaleString('default', { month: 'long' }),
        };

        // Push data into JSON
        addBlog(newBlog);

        setContent('');
        setTitle('');
        setSubDescription('');
        setImage(null);

        alert('Blog published successfully!');
    };

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const wordCount = content.split(/\s+/).filter(Boolean).length;

    const handleImageUpload = useCallback((quill: any) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = () => {
            const file = input.files?.[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const range = quill.getSelection();
                    if (range) {
                        quill.insertEmbed(range.index, 'image', reader.result);
                    }
                };
                reader.readAsDataURL(file);
            }
        };
    }, []);

    const extractImageFromContent = (content: string): string | null => {
        const doc = new DOMParser().parseFromString(content, 'text/html');
        const img = doc.querySelector('img');
        return img ? img.src : null;
    };

    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                ['link', 'image'],
                [{ 'font': [] }],
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'align': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'direction': 'rtl' }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean'],
            ],
            handlers: {
                image: () => {
                    const quill = (document.querySelector('.ql-editor') as any)?.getEditor(); // Access the Quill instance
                    if (quill) {
                        handleImageUpload(quill);
                    }
                }
            }
        },
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
                    className="flex justify-center items-center bg-green-500 text-white px-2 rounded shadow hover:bg-green-600 duration-300"
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
            {/* Editor */}
            <div className="container relative min-h-screen mx-auto p-4 bg-sky-200 shadow-lg rounded-lg ">
                <h1 className="text-2xl mb-4 text-blue-950 drop-shadow-xl font-extrabold">Write a New Blog</h1>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Write a title'
                    className='w-full py-2 px-2 my-2 rounded-md'
                />
                <input
                    type="text"
                    value={subDescription}
                    onChange={(e) => setSubDescription(e.target.value)}
                    placeholder='Title Sub description (optional)'
                    className='text-sm w-96 py-1 px-2 my-2 rounded-md'
                />
                <ImageUpload setImage={setImage} />
                <div className='h-full bg-white'>
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                        modules={modules}
                        theme="snow"
                        placeholder='Compose an epic...'
                        className="w-full custom-quill"
                    />
                </div>
                <div className="text-right text-gray-600 text-xs mt-1 font-semibold">
                    Word Count: {wordCount}
                </div>
            </div>
        </>
    );
}

export default EditorSession;
