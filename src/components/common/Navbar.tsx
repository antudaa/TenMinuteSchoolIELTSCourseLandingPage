// components/Navbar/index.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useLangStore } from "@/zustand/store/useLangStore";
import { Button } from "../ui/button";
import BnIcon from "../icons/BnIcon";
import { Input } from "../ui/input";
import { PiStarFourFill } from "react-icons/pi";
import { Search } from "lucide-react";

const navItems = [
    {
        title: "Class 6-12",
        subItems: ["HSC", "Class Ten", "Class Nine", "Class Eight", "Class Seven", "Class Six"],
    },
    {
        title: "Skills",
        subItems: ["All Courses", "Language Learning", "Freelancing", "Bundle", "Skills & IT", "Design & Creative", "Career Readliness", "Kids (Age 7-14)", "Professional", "Free"],
    },
    {
        title: "Admission",
    },
    {
        title: "Online Batch",
        subItems: ["Online Batch (Class 6-10)", "HSC"],
    },
    {
        title: "English Centre",
        subItems: ["All Programmes", "IELTS Program", "Spoken English (Junior)", "English Foundation Program", "Kid's English"],
    },
    {
        title: "More",
        subItems: ["Job Preparation Coruses", "Blog", "Book Store", "Free Notes & Guides", "Academic Degital Content", "Verify Certificate", "Career / Recruitment", "Join as a Teacher", "Join as a Affiliate"],
    },
];

const Navbar = () => {
    const lang = useLangStore((state) => state.lang);
    const setLang = useLangStore((state) => state.setLang);
    const toggleLang = () => setLang(lang === "en" ? "bn" : "en");

    return (
        <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
            <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:h-[65px]">
                {/* Mobile Menu */}
                <div className="flex items-center gap-3 xl:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="lg:hidden" type="button" aria-label="menu-toggle">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 18v2H3v-2h18zM17.404 3.903L22 8.5l-4.596 4.596-1.414-1.414L19.172 8.5l-3.182-3.182 1.414-1.415zM12 11v2H3v-2h9zm0-7v2H3V4h9z"></path>
                                </svg>
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[260px] p-4 overflow-y-auto">
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.title}>
                                        <Link
                                            href={`/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                                            className="block py-1 text-sm text-gray-800 font-medium hover:text-green"
                                        >
                                            {item.title}
                                        </Link>
                                        {item.subItems && (
                                            <ul className="ml-4 mt-1 space-y-1">
                                                {item.subItems.map((sub) => (
                                                    <li key={sub}>
                                                        <Link
                                                            href={`/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                                                            className="block text-sm text-gray-600 hover:text-green"
                                                        >
                                                            {sub}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </SheetContent>
                    </Sheet>

                    <Link className="lg:hidden" href="/">
                        <Image src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="10ms" width={100} height={27} />
                    </Link>
                </div>

                {/* Desktop Logo */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link href="/">
                        <Image src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg" alt="10ms" width={120} height={30} />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1">
                    <div className="relative">
                        {/* Input field */}
                        <Input
                            placeholder="স্কিলস কোর্স , কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
                            className="pl-14 pr-4 py-1 lg:py-2 h-10 rounded-full text-gray-500 placeholder-gray-500 hidden md:block"
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

                {/* Desktop Nav Links */}
                <nav className="hidden lg:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {navItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.subItems ? (
                                        <>
                                            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[250px] gap-1 p-2">
                                                    {item.subItems.map((sub) => (
                                                        <li key={sub}>
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={`/${sub.replace(/\s+/g, "-").toLowerCase()}`}
                                                                    className="text-sm text-gray-600 hover:text-green"
                                                                >
                                                                    {sub}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={`/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
                                                className="text-sm text-gray-600 hover:text-green px-1 py-2"
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                <div className="flex items-center gap-3">
                    {/* Language Switch */}
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
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <a href="tel:16910" className="hidden md:flex items-center gap-1 text-[#1CAB55] font-medium">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                            ></path>
                        </svg>
                        <span>16910</span>
                    </a>
                    <Link
                        href="#"
                        className="bg-[#1CAB55] hover:bg-[#1CAB55] text-white px-4 py-1.5 text-sm md:text-base rounded-md font-medium text-nowrap"
                    >
                        লগ-ইন
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
