"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Props = {
  onNavigate?: (id: string) => void;
};

const StickyCarousel: React.FC<Props> = ({ onNavigate }) => {
  const menuItems = [
    { label: "কোর্স ইন্সট্রাক্টর", targetId: "instructors" },
    { label: "কোর্সটি যেভাবে সাজানো হয়েছে", targetId: "features" },
    { label: "কোর্সটি করে যা শিখবেন", targetId: "pointers" },
    { label: "কোর্স সম্পর্কে বিস্তারিত", targetId: "about" },
    { label: "কোর্স এক্সক্লুসিভ ফিচার", targetId: "feature_explanations" },
    { label: "এই কোর্সের সাথে ফ্রি পাচ্ছেন–", targetId: "free_items" },
    { label: "শিক্ষার্থীরা যা বলছে", targetId: "testimonials" },
    { label: "সচরাচর জিজ্ঞাসা", targetId: "faq" },
  ];

  return (
    <div className="sticky top-[65px] z-20 hidden bg-white md:block border-b mb-6">
      <div className="relative px-4 py-4 min-h-[60px]">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent className="-ml-2">
            {menuItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-auto shrink-0 px-2 snap-start"
              >
                <button
                  onClick={() => onNavigate?.(item.targetId)}
                  className="whitespace-nowrap text-base font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {item.label}
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons (Visible on xl screens and up) */}
          <CarouselPrevious className="-left-4 top-1/2 bg-gray-600 text-white -translate-y-1/2 hidden xl:flex" />
          <CarouselNext className="-right-4 top-1/2 bg-gray-600 text-white -translate-y-1/2 hidden xl:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default StickyCarousel;
