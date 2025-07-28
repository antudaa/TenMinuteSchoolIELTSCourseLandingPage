'use client';

import React from 'react';

export default function MoreHelpSection() {
    return (
        <section className="mb-0">
            <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                আরও কোন জিজ্ঞাসা আছে?
            </h2>
            <div className="md:max-w-[300px]">
                <a href="tel:16910">
                    <div className="flex w-full items-center justify-center rounded border border-[#E5E7EB] py-3 hover:border-[#1CAB55] md:max-w-[300px] md:rounded-lg md:px-6 md:py-5 transition-colors duration-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            fill="none"
                            viewBox="0 0 29 28"
                            className="w-[17px] h-[17px] md:w-6 md:h-6"
                        >
                            <path
                                stroke="#1CAB55"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.223"
                                d="M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083"
                            />
                            <path
                                stroke="#1CAB55"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.223"
                                d="M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <h3 className="ml-2 text-base font-medium text-[#1CAB55] md:text-lg">
                            কল করুন 16910 নম্বরে
                        </h3>
                    </div>
                </a>
            </div>
        </section>
    );
}
