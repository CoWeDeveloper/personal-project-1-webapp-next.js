"use client";
import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import Header from '../ManagePosts/Header';
import Editorsession from './EditorSession';


const BlogEditor = () => {
  
  return (
    <>
      <Header />
      <section className='relative w-full min-h-screen bg-white py-24 flex justify-center items-center'>
        
      <Editorsession />
      </section>
    </>
  );
};

export default BlogEditor;
