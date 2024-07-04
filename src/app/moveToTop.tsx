// components/MoveToTop.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { ChevronsUp } from 'lucide-react';

const MoveToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#048CA9] text-white shadow-lg transition-opacity duration-300"
          aria-label="Scroll to top"
        >
          <ChevronsUp size={24} />
        </button>
      )}
    </div>
  );
};

export default MoveToTop;
