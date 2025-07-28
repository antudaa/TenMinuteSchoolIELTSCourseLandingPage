import Image from "next/image";

type Props = {
    data: any;
};

const FreeItemsSection: React.FC<Props> = ({ data }) => {
    return (
        <aside id="free_items">
            <div className="mb-6">
                <div className="mb-14">
                    <h2 className="my-5 text-xl font-semibold leading-[30px] text-black">
                        {data?.name || "এই কোর্সের সাথে ফ্রি পাচ্ছেন–"}
                    </h2>

                    <div
                        className="relative w-full overflow-hidden bg-no-repeat bg-cover rounded-[20px]"
                        style={{ backgroundImage: "url('https://cdn.10minuteschool.com/images/banner_background_1731401239364.png')" }}
                    >
                        <div className="absolute m-4 inset-0 z-[1] rounded-[20px] backdrop-blur-[8px] bg-white/10 border border-white/20 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 z-[2] rounded-[20px] pointer-events-none">
                            <div
                                className="w-full h-full rounded-[20px] border-[6px] border-t-0 border-b-0 blur-[6px]"
                                style={{
                                    borderImage:
                                        "conic-gradient(from 180deg at 50% 50%, #FFE2BE 0deg, #FFA42D 36deg, #EDAE64 50deg, #8E9AFC 90deg, #67D1FF 102deg, #FFF 126deg, #FCD6F7 144deg, #F3CFFF 156deg, #CCA5F3 180deg, #E0CDF9 227deg, #472FFF 240deg, #479BFF 270deg, #B6E0FF 296deg, #FF8E75 324deg) 1",
                                }}
                            ></div>
                        </div>

                        <div className="relative z-[3] text-white divide-y divide-dashed divide-slate-600 p-4 px-10 rounded-[20px]">
                            <div className="flex flex-col md:flex-row items-start justify-between gap-5 py-5">
                                <div className="flex flex-col items-start gap-2">
                                    <h3 className="mb-2 text-base md:text-xl font-semibold leading-[26px] text-white">
                                        ঘরে বসে IELTS প্রস্তুতি (Hardcopy Book)
                                    </h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {["360 পৃষ্ঠা", "প্রিমিয়াম হার্ডকপি", "ফ্রি ডেলিভারি", "৪ কর্মদিবসের মধ্যে সারাদেশে ডেলিভারি"].map((text) => (
                                            <li key={text} className="flex items-center gap-3 text-sm md:text-[16px] text-white leading-[24px]">
                                                <span className="opacity-60">•</span>
                                                <p>{text}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex-shrink-0 w-full md:w-auto">
                                    <Image
                                        src="https://cdn.10minuteschool.com/images/catalog/media/Book_Image_1731924602665.png"
                                        alt="IELTS Book"
                                        width={120}
                                        height={150}
                                        className="object-contain mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default FreeItemsSection;
