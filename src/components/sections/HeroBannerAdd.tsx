'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react'; // or use another icon if needed

const HeroBannerAdd = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full transition-all duration-300 ease-in-out">
      {/* Close button */}
      <button
        className="absolute top-0 right-0 z-10 rounded-full p-1 shadow-md transition"
        onClick={() => setIsVisible(false)}
        aria-label="Close Ad"
      >
        <X className="size-4 text-white" />
      </button>

      {/* Large device image */}
      <div className="hidden md:block">
        <Image
          src="/assets/KidsEnglishNotification.jpg"
          width={1600}
          height={500}
          alt="Kids English Ad - Large"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Small device image */}
      <div className="block md:hidden">
        <Image
          src="/assets/KidsEnglishNotificationsm.jpg"
          width={800}
          height={400}
          alt="Kids English Ad - Small"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroBannerAdd;
