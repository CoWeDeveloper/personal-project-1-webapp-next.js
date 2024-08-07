"use client";
import React, { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css'; // import Quill's styles
import Image from 'next/image';
import Header from '../ManagePosts/Header';
import { El_Messiri, Gideon_Roman, Herr_Von_Muellerhoff, Roboto_Serif } from 'next/font/google';

// Dynamically import ReactQuill
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogEditor = () => {
  const [content, setContent] = useState<string>('');
  const [quill, setQuill] = useState<any>(null); // Use `any` or a proper type if you have one

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  // Handle Quill editor ready
  const handleEditorReady = useCallback((editor: any) => {
    setQuill(editor);
  }, []);

  const wordCount = content.split(/\s+/).filter(Boolean).length;

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      ['link', 'image'],
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  return (
    <>
      <Header />
      <section className='relative w-full min-h-screen bg-gray-200 py-24 flex justify-center items-center'>
        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 duration-300">Preview</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 duration-300">Publish</button>
        </div>

        <div className="container relative min-h-screen mx-auto p-4 bg-amber-100 shadow-lg rounded-lg max-w-3xl ">
          <h1 className="text-2xl font-bold mb-4">Write a New Blog</h1>
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
          <div className=" text-right text-gray-600 text-sm ">Word Count: {wordCount}</div>
        </div>
      </section>
    </>
  );
};

export default BlogEditor;
