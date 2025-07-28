'use client';

import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

interface FaqSectionProps {
    faq: {
        name: string;
        values: FaqItem[];
    };
}

export default function FaqSection({ faq }: FaqSectionProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedFaqs = showAll ? faq?.values : faq?.values?.slice(0, 5);

    return (
        <section id="faq">
            <div className="mb-0 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
                <div className="pb-1 bg-white md:pb-0">
                    <div className="mb-0">
                        <h2 className="mb-4 text-base text-[#111827] font-semibold md:text-2xl">
                            {faq?.name}
                        </h2>

                        <div className="relative mb-20">
                            <Accordion type="multiple" className="rounded-md md:border md:px-5">
                                {displayedFaqs?.map((item) => (
                                    <AccordionItem
                                        key={item?.id}
                                        value={item?.id}
                                        className="border-b border-dashed last:border-0"
                                    >
                                        <AccordionTrigger className="py-4 font-medium cursor-pointer text-left">
                                            <h3 className="text-sm font-semibold text-[#111827]">
                                                {item?.question}
                                            </h3>
                                        </AccordionTrigger>
                                        <AccordionContent className="pb-4">
                                            <div
                                                className="prose max-w-none prose-p:leading-relaxed prose-a:text-blue-600 text-[#111827]"
                                                dangerouslySetInnerHTML={{ __html: item?.answer }}
                                            />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                            {faq?.values.length > 5 && (
                                <button
                                    onClick={() => setShowAll((prev) => !prev)}
                                    className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
                                >
                                    {showAll ? 'কম দেখুন' : 'সকল প্রশ্ন-উত্তর'}
                                    {showAll ? <FaAngleUp /> : <FaAngleDown />}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
