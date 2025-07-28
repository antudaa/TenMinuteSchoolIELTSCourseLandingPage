'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type HowToPaySectionProps = {
    name?: string;
};

export default function HowToPaySection({ name = 'যেভাবে পেমেন্ট করবেন' }: HowToPaySectionProps) {
    const [open, setOpen] = useState(false);

    return (
        <div id="how_to_pay">
            <div className="mb-10">
                <h2 className="mb-4 text-xl font-semibold md:text-2xl">{name}</h2>
                <div className="rounded-md md:border md:p-4 xs:py-2">
                    <p>
                        কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{' '}
                        <span
                            role="button"
                            className="underline cursor-pointer text-green-500"
                            onClick={() => setOpen(true)}
                        >
                            এই ভিডিওটি দেখুন
                        </span>
                    </p>
                </div>
            </div>

            {/* Modal Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-3xl p-0 overflow-hidden aspect-video">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/5wfn60rmWX4?si=1y2dmzLq88IYbxKU"
                        title="যেভাবে পেমেন্ট করবেন"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </DialogContent>
            </Dialog>
        </div>
    );
}
