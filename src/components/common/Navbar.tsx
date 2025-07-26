'use client';

import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { ImPhone } from "react-icons/im";
import { PiStarFourFill } from "react-icons/pi";
import { RiMenuUnfoldLine } from "react-icons/ri";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from 'next/image';
import BnIcon from '../icons/BnIcon';

const navItems = [
    {
        title: 'Class 6-12',
        subItems: ['HSC', 'Class Ten', 'Class Nine', 'Class Eight', 'Class Seven', 'Class Six']
    },
    {
        title: 'Skills',
        subItems: ['All Courses', 'Language Learning', 'Freelancing', 'Bundle', 'Skills & IT', 'Design & Creative', 'Career Readliness', 'Kids (Age 7-14)', 'Professional', 'Free']
    },
    {
        title: 'Admission',
    },
    {
        title: 'Online Batch',
        subItems: ['Online Batch (Class 6-10)', 'HSC']
    },
    {
        title: 'English Centre',
        subItems: ['All Programmes', 'IELTS Program', 'Spoken English (Junior)', 'English Foundation Program', `Kid's English`]
    },
    {
        title: 'More',
        subItems: ['Job Preparation Coruses', 'Blog', 'Book Store', 'Free Notes & Guides', 'Academic Degital Content', 'Verify Certificate', 'Career / Recruitment', 'Join as a Teacher', 'Join as a Affiliate']
    }
];

export default function Navbar() {
    const [lang, setLang] = React.useState<'en' | 'bn'>('en');

    const toggleLang = () => setLang(lang === 'en' ? 'bn' : 'en');

    return (
        <nav className="w-full h-[66px] xxl:px-[10%] mx-auto py-1">
            {/* First Row */}
            <div className="flex md:flex-nowrap items-center justify-evenly px-4 py-2 gap-2">
                <div className="flex items-center gap-2">
                    <Sheet>
                        <SheetTrigger className='block lg:hidden'>
                            <RiMenuUnfoldLine className="w-6 h-6" />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <div className="space-y-4 mx-10 mt-4">
                                {navItems.map((item) => (
                                    <div key={item.title}>
                                        <p className="font-normal text-md">{item.title}</p>

                                        {item.subItems && (
                                            <ul className="ml-2 list-disc">
                                                {item.subItems.map((sub) => (
                                                    <li key={sub} className=" text-gray-600 text-md">
                                                        {sub}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <Image src="/assets/10mslogo-svg.svg" alt="10MS" width={100} height={30} />
                </div>

                <div className="flex-grow max-w-md w-full">
                    <div className="relative">
                        {/* Input field */}
                        <Input
                            placeholder="স্কিলস কোর্স , কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                            className="pl-14 pr-4 py-2 h-12 rounded-full text-gray-500 placeholder-gray-500 hidden md:block"
                        />

                        {/* Search icon + stars inside input */}
                        <div className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5">
                            {/* Search Icon */}
                            <Search className="size-[18px] text-black" />

                            {/* Top-left large star */}
                            <PiStarFourFill className="absolute rotate-12 -top-1 -left-1 w-2 h-2 text-orange-400" />

                            {/* Top-right medium star */}
                            <PiStarFourFill className="absolute rotate-12 -top-0 -right-0.5 w-[5px] h-[5px] text-orange-400" />

                            {/* Bottom-left small star */}
                            <PiStarFourFill className="absolute -bottom-0 -left-0 w-[4px] h-[4px] text-orange-400" />
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center gap-3 px-4 py-2">
                    {navItems.map((item) => (
                        <div key={item.title} className="group relative">
                            <button className="text-md flex items-center gap-1 text-nowrap text-gray-700">
                                {item.title}
                                {item.subItems && <ChevronDown className="w-4 h-4" />}
                            </button>

                            {item.subItems && (
                                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md mt-2 rounded-md min-w-[150px] z-10">
                                    {item.subItems.map((sub) => (
                                        <div key={sub}>
                                            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-nowrap">
                                                {sub}
                                            </div>
                                            {/* Conditionally render dotted line in "More" after "Verify Certificate" */}
                                            {item.title === "More" && sub === "Verify Certificate" && (
                                                <hr className="border-t border-dotted border-gray-300 my-1 mx-2" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Language Switch (Only md and above) */}
                    <div className="hidden md:block">
                        <Button className='rounded-sm text-md' variant="outline" size="sm" onClick={toggleLang}>
                            {lang === 'en' ? (
                                <>
                                    <BnIcon />
                                    EN
                                </>
                            ) : (
                                <>
                                    <BnIcon />
                                    <span className="ml-1">বাং</span>
                                </>
                            )}
                        </Button>
                    </div>
                    <div className='flex gap-1 items-center justify-center'>
                        <ImPhone className="w-4 h-4 text-[#1CAB55] fill-[#1CAB55]" />
                        <p className='text-md font-medium text-[#1CAB55] hidden md:block'>16910</p>
                    </div>
                    <Button className='bg-[#1CAB55] text-white text-sm font-medium px-6'>লগ-ইন</Button>
                </div>
            </div>

            {/* Second Row (Only on small screens) */}
            <div className="md:hidden flex justify-between px-4 pb-2 overflow-x-auto">
                {navItems.map((item) =>
                    item.subItems ? (
                        <DropdownMenu key={item.title}>
                            <DropdownMenuTrigger className="text-md font-medium flex items-center gap-1">
                                {item.title} <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {item.subItems.map((sub) => (
                                    <div key={sub}>
                                        <p className="px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">
                                            {sub}
                                        </p>
                                        {item.title === "More" && sub === "Verify Certificate" && (
                                            <hr className="border-t border-dotted border-gray-300 my-1 mx-2" />
                                        )}
                                    </div>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <div
                            key={item.title}
                            className="text-md font-medium flex items-center px-2 py-1"
                        >
                            {item.title}
                        </div>
                    )
                )}
            </div>

            {/* Desktop Nav (lg and up) */}
            {/* <div className="hidden lg:flex justify-center gap-6 px-4 py-2 border-t">
                {navItems.map((item) => (
                    <div key={item.title} className="group relative">
                        <button className="text-sm font-semibold flex items-center gap-1">
                            {item.title} <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md mt-2 rounded-md min-w-[150px] z-10">
                            {item.subItems.map((sub) => (
                                <div key={sub} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {sub}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}
        </nav>
    );
}
