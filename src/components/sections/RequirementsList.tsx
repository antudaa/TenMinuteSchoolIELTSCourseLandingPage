'use client';

import { FaCheck } from "react-icons/fa6";

type RequirementsListProps = {
    name: string;
};

export default function RequirementsList({ name }: RequirementsListProps) {
    return (
        <aside id="requirements">
            <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
                <div className="pb-6 bg-white md:pb-0">
                    <div className="mb-0">
                        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                            {name}
                        </h2>

                        <div className="py-2 rounded-md md:border md:p-6">
                            <ul>
                                <li className="flex items-start gap-2 mb-2">
                                    <FaCheck className="size-5 text-blue-400" />
                                    <h3>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</h3>
                                </li>
                                <li className="flex items-start gap-2">
                                    <FaCheck className="size-5 text-blue-400" />
                                    <h3>স্মার্টফোন অথবা পিসি</h3>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </aside>
    );
}
