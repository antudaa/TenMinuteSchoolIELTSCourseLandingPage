'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCourseData } from '@/hooks/useCourseData';
import { CourseChecklistItem, CourseMedia } from '@/types/api';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const Hero = () => {
  const { data, isLoading } = useCourseData();

  const rawMedia: CourseMedia[] = data?.data?.media ?? [];
  const checklist: CourseChecklistItem[] = data?.data?.checklist ?? [];

  const media = rawMedia.filter((item) => item.name === 'preview_gallery');

  const [mobilePlayingIndex, setMobilePlayingIndex] = useState<number | null>(null);
  const [desktopPlayingIndex, setDesktopPlayingIndex] = useState<number | null>(null);
  const [desktopActiveSlide, setDesktopActiveSlide] = useState(0);

  if (isLoading || !data) return <p className="text-center py-8">Loading...</p>;

  const renderMediaItem = (
    item: CourseMedia,
    index: number,
    playingIndex: number | null,
    setPlayingIndex: (index: number) => void
  ) => {
    const isPlaying = playingIndex === index;

    const thumbnail = item.thumbnail_url?.trim()
      ? item.thumbnail_url
      : `https://img.youtube.com/vi/${item.resource_value}/hqdefault.jpg`;

    if (item.resource_type === 'video') {
      return isPlaying ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${item.resource_value}?rel=0&showinfo=0&autoplay=1`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full aspect-video"
        />
      ) : (
        <div className="relative w-full h-full aspect-video">
          <Image src={thumbnail} alt="Video thumbnail" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30 z-[1]" />
          <button
            onClick={() => setPlayingIndex(index)}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5" />
              <circle cx="28" cy="28" r="25.415" fill="#fff" />
              <path
                fill="#1CAB55"
                d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
              />
            </svg>
          </button>
        </div>
      );
    }

    return <Image src={item.resource_value} alt="Course image" fill className="object-cover" />;
  };

  return (
    <>
      <section
        id="skills-landing"
        className="relative overflow-visible text-white p-4 bg-cover bg-center min-h-[300px]"
        style={{
          backgroundImage: 'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        }}
      >
        <div className="mx-auto max-w-7xl relative flex flex-col items-center justify-between gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
          <div className="order-1 flex flex-col justify-center flex-1 md:order-1 md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
            <div className="block mt-4 md:mt-0 md:hidden">
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {media.map((item, index) => (
                    <CarouselItem key={index} className="w-full h-full">
                      <div className="relative w-full h-full aspect-video">
                        {renderMediaItem(item, index, mobilePlayingIndex, setMobilePlayingIndex)}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1 text-gray-600 z-20" />
                <CarouselNext className="right-1 text-gray-600 z-20" />
              </Carousel>
              {/* Thumbnails for Mobile */}
              <div className="flex gap-4 mt-3 px-2 overflow-x-auto hideScrollbar mx-auto">
                {media.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setMobilePlayingIndex(index);
                    }}
                    className={`relative w-[50px] mx-auto h-[35px] cursor-pointer overflow-hidden border-2 transition-all duration-300 ${mobilePlayingIndex === index ? 'rounded border border-[#1CAB55]' : 'border-0'}`}
                  >
                    <Image
                      src={item.thumbnail_url || item.resource_value}
                      alt="preview_gallery"
                      width={50}
                      height={50}
                      className="w-[50px] h-[35px] object-cover"
                    />
                    {item.resource_type === 'video' && (
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <Image
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                          alt="Play"
                          width={20}
                          height={20}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/30" />
                  </div>
                ))}
              </div>
            </div>

            <h1 className="text-white mt-4 mb-2 text-[21px] font-semibold md:text-4xl">{data?.data?.title}</h1>

            <div className="mb-2">
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <Image
                  className="md:w-[130px] w-[100px]"
                  src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  alt="Rating badge"
                  width={130}
                  height={40}
                />
                <span className="inline-block text-sm md:text-base">(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
              </button>
            </div>

            <div className="text-gray-300" dangerouslySetInnerHTML={{ __html: data.data.description }} />
          </div>

          {/* Desktop sidebar carousel remains unchanged */}
          <section className="hidden md:block w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute z-10 overflow-hidden">
            <div className="md:sticky md:top-[112px]">
              <div className="md:border">
                <div className="hidden p-1 md:block">
                  <div className="relative overflow-hidden">
                    <Carousel className="w-full h-full">
                      <CarouselContent
                        style={{
                          transform: `translateX(-${desktopActiveSlide * 100}%)`,
                          transition: 'transform 0.5s ease',
                          display: 'flex',
                        }}
                      >
                        {media.map((item, index) => (
                          <CarouselItem key={index} className="w-full h-full shrink-0 grow-0 basis-full">
                            <div className="relative overflow-hidden bg-black aspect-video">
                              {renderMediaItem(item, index, desktopPlayingIndex, setDesktopPlayingIndex)}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>


                      <CarouselPrevious
                        className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 text-gray-600 transition"
                        onClick={() => {
                          if (desktopActiveSlide > 0) {
                            const newIndex = desktopActiveSlide - 1;
                            setDesktopActiveSlide(newIndex);
                            setDesktopPlayingIndex(null); // stop any playing video
                          }
                        }}
                        disabled={desktopActiveSlide === 0}
                      >
                        ←
                      </CarouselPrevious>

                      <CarouselNext
                        className="right-1 text-gray-600 z-10"
                        onClick={() => {
                          if (desktopActiveSlide < media.length - 1) {
                            const newIndex = desktopActiveSlide + 1;
                            setDesktopActiveSlide(newIndex);
                            setDesktopPlayingIndex(null);
                          }
                        }}
                      >
                      </CarouselNext>
                    </Carousel>
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-4 mt-3 px-2 overflow-x-auto hideScrollbar">
                    {media.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setDesktopActiveSlide(index);
                          setDesktopPlayingIndex(null); // reset video
                        }}
                        className={`relative w-[100px] h-[35px] cursor-pointer overflow-hidden border-2 transition-all duration-300 ${desktopActiveSlide === index ? 'rounded border border-[#1CAB55]' : 'border-0'
                          }`}
                      >
                        <Image
                          src={item.thumbnail_url || item.resource_value}
                          alt="preview_gallery"
                          width={100}
                          height={50}
                          className="w-[100px] h-[35px] object-cover"
                        />
                        {item.resource_type === 'video' && (
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <Image
                              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                              alt="Play"
                              width={20}
                              height={20}
                            />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/30" />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Price & Enroll Button Section */}
                <div className="w-full p-4 md:h-auto">
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between md:flex-col md:items-start">
                      <div className="md:mb-3">
                        <div className="inline-block text-2xl font-semibold text-black">৳1000</div>
                        <span className="inline-flex items-center">
                          <del className="ml-2 text-base font-normal md:text-xl text-gray-500">৳1500</del>
                          <div className="relative ml-5 inline-block">
                            <div className="bg-[#F76C5E] text-white text-sm font-semibold px-3 py-1 pr-4 pl-6 rounded-r-md relative inline-block">
                              <span className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-10" />
                              500 ৳ ছাড়
                            </div>
                            <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[10px] border-r-[#F76C5E]" />
                          </div>
                        </span>
                      </div>
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded cursor-pointer">
                      Enroll
                    </button>
                  </div>
                </div>

                {/* Checklist */}
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold text-black">এই কোর্সে যা থাকছে</p>
                  <ul className="space-y-3 text-[#111827] text-sm">
                    {checklist.map((item) => (
                      <li key={item.id} className="flex gap-2 items-start">
                        <Image src={item.icon} alt="icon" width={20} height={20} className="mt-0.5" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* 📱 Mobile only price + checklist outside main section */}
      <div className="block md:hidden w-full mt-6">
        <div className="w-full p-4">
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <div>
                <div className="inline-block text-2xl font-semibold text-black">৳1000</div>
                <span className="inline-flex items-center">
                  <del className="ml-2 text-base text-gray-500">৳1500</del>
                  <div className="relative ml-5 inline-block">
                    <div className="bg-[#F76C5E] text-white text-sm font-semibold px-3 py-1 pr-4 pl-6 rounded-r-md relative inline-block">
                      <span className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full z-10" />
                      500 ৳ ছাড়
                    </div>
                    <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-r-[10px] border-r-[#F76C5E]" />
                  </div>
                </span>
              </div>
            </div>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Enroll</button>
          </div>
        </div>

        <div className="grid py-2 px-4">
          <p className="mb-4 text-xl font-semibold text-black">এই কোর্সে যা থাকছে</p>
          <ul className="space-y-3 text-[#111827] text-sm">
            {checklist.map((item) => (
              <li key={item.id} className="flex gap-2 items-start">
                <Image src={item.icon} alt="icon" width={20} height={20} className="mt-0.5" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
