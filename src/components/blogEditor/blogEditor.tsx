"use client";
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import Header from '../ManagePosts/Header';
import Editorsession from './EditorSession';
import { Eye } from 'lucide-react';

const BlogEditor = () => {

  return (
    <>
      <Header />
      <section className='relative w-full min-h-screen bg-gray-200 py-24 flex justify-center items-center'>
        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="flex items-center justify-center bg-[#2F7EAA] hover:bg-[#2a6a8d] text-white px-4 py-2 rounded shadow duration-300"> 
            <Eye className='w-5 mr-2' />
            Preview
          </button>
          
          <button className="flex justify-center items-center bg-green-500 text-white px-2  rounded shadow hover:bg-green-600 duration-300">
          <Image className="mr-2"
          src="/assets/icons/Demo/send.svg" 
          width={16} height={16} 
          alt="laptop with screen displaying calender" />  
            Publish
          </button>
        </div>
      <Editorsession />
      </section>
    </>
  );
};

export default BlogEditor;
