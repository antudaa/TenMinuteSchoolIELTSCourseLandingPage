'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

interface Course {
    title: string;
    instructor: string;
    price: number;
    originalPrice?: number;
    thumbnail: string;
    href: string;
}

const recommendedCourses: Course[] = [
    {
        title: 'IELTS LIVE Batch',
        instructor: 'Zawad Hasan Adib, Saraf Samantha Khan, Salsabil Haque, Uttam Deb, Sharlin Ulfatt Bhuiyan',
        price: 8500,
        originalPrice: 10000,
        thumbnail: 'https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg',
        href: '/product/ielts-live-batch/?ref=ielts-live-batch&type=recommendation',
    },
    {
        title: 'ঘরে বসে Spoken English',
        instructor: 'Munzereen Shahid',
        price: 1950,
        thumbnail: 'https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg',
        href: '/product/ghore-boshe-spoken-english/?ref=ghore-boshe-spoken-english&type=recommendation',
    },
    {
        title: 'Email Marketing করে Freelancing',
        instructor: 'Tisat Fatema Tia',
        price: 1950,
        thumbnail: 'https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg',
        href: '/product/email-marketing-course/?ref=email-marketing-course&type=recommendation',
    },
    {
        title: 'Complete English Grammar Course',
        instructor: 'Munzereen Shahid',
        price: 1950,
        thumbnail: 'https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg',
        href: '/product/english-grammar-course/?ref=english-grammar-course&type=recommendation',
    },
    {
        title: 'YouTube Marketing করে Freelancing',
        instructor: 'Md. Sabbir Hossain',
        price: 2500,
        thumbnail: 'https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg',
        href: '/product/youtube-marketing-course/?ref=youtube-marketing-course&type=recommendation',
    },
];

export default function RecommendedCourses() {
    return (
        <section className="w-full mx-auto max-w-7xl my-10">
            <h2 className="mb-3 text-xl font-semibold px-4 md:mb-6 md:text-2xl">আপনার জন্য আরও কিছু কোর্স</h2>

            <div className="relative">
                <Carousel opts={{ align: 'start' }} className="w-full">
                    <div className="absolute -top-8 right-0 flex gap-2 p-2 z-10">
                        <CarouselPrevious className="relative left-0" />
                        <CarouselNext className="relative right-0" />
                    </div>

                    <CarouselContent className="ml-0 gap-4">
                        {recommendedCourses.map((course, idx) => (
                            <CarouselItem
                                key={idx}
                                className="basis-[80%] md:basis-[45%] lg:basis-[30%]"
                            >
                                <Link href={course.href} key={idx} className="snap-start shrink-0 w-[200px] md:w-[272px]">
                                    <div className="border border-[#E5E7EB] flex flex-col h-full rounded hover:border-green transition-colors">
                                        <Image
                                            src={course.thumbnail}
                                            alt={course.title}
                                            width={272}
                                            height={152}
                                            className="w-full h-[152px] object-cover"
                                        />
                                        <div className="flex flex-col justify-between gap-2 p-3">
                                            <div>
                                                <h2 className="text-sm font-semibold md:text-lg line-clamp-2">{course.title}</h2>
                                                <h3 className="text-xs text-gray-500 md:text-sm line-clamp-2">{course.instructor}</h3>
                                            </div>
                                            <div className="flex items-center">
                                                <p className="text-sm font-bold text-[#1DAB55] md:text-lg">৳ {course.price}</p>
                                                {course.originalPrice && (
                                                    <del className="ml-2 text-gray-400">৳{course.originalPrice}</del>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
