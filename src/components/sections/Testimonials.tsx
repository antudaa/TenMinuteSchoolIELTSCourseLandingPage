'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { TestimonialsSectionProps } from '@/types/api';
import Image from 'next/image';
import React from 'react';



// Validate strings
export const isValid = (val?: string) => !!val?.trim();

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {

    return (
        <aside id="testimonials" className="mb-16">
            <h2 className="mb-4 text-xl font-semibold">{testimonials?.name}</h2>


            <Carousel opts={{ align: 'start', loop: true }} className="w-full">

                <div className="absolute -top-8 md:-top-4 right-0 flex gap-2 p-2 z-10">
                    <CarouselPrevious className="relative left-0" />
                    <CarouselNext className="relative right-0" />
                </div>
                <CarouselContent className="ml-0">
                    {testimonials?.values?.map((item: any) => {
                        const hasVideo = isValid(item?.video_url);
                        const hasThumb = isValid(item?.thumb);
                        const hasProfile = isValid(item?.profile_image);

                        return (
                            <CarouselItem key={item?.id} className="basis-[80%] md:basis-[50%]">
                                <div className="relative mt-5 w-full flex flex-col justify-between bg-white border rounded-lg px-6 py-8 min-h-[280px] md:min-h-[320px]">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#FCE0D6] p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                                            <path
                                                fill="#D33242"
                                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                            />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 20 30">
                                            <path
                                                fill="#D33242"
                                                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                                            />
                                        </svg>
                                    </div>

                                    {/* Video or Thumb or Text */}
                                    {hasVideo ? (
                                        <div className="mb-4 aspect-video w-full rounded-md overflow-hidden">
                                            <iframe
                                                className="w-full h-full"
                                                src={`https://www.youtube.com/embed/${item?.video_url}`}
                                                title={item?.name}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        </div>
                                    ) : hasThumb ? (
                                        <div className="mb-4 w-full aspect-video relative overflow-hidden rounded-md">
                                            <Image
                                                src={item?.thumb as string}
                                                alt={item?.name || 'Thumbnail'}
                                                height={300}
                                                width={600}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-700 mb-4 whitespace-pre-line">{item?.testimonial}</p>
                                    )}

                                    {/* User Info */}
                                    <div className="mt-4 flex gap-4 items-center">
                                        {hasProfile ? (
                                            <Image
                                                src={item?.profile_image as string}
                                                alt={item?.name || 'User'}
                                                width={48}
                                                height={48}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                                                N/A
                                            </div>
                                        )}
                                        <div>
                                            <h3 className="text-sm font-semibold">{item?.name}</h3>
                                            <p className="text-sm text-gray-400">{item?.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>
        </aside>
    );
}
