import Image from "next/image";
import { MdChevronRight } from "react-icons/md";

type Props = {
    data: any;
};

const InstructorSection: React.FC<Props> = ({ data }) => {
    const instructor = data?.values?.[0];
    if (!instructor) return null;

    return (
        <aside id="instructors">
            <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
                <div className="pt-4 pb-2 bg-white">
                    <h2 className="mb-4 text-xl md:text-2xl text-[#111827] font-semibold">{data?.name}</h2>

                    <div className="mb-16 border-0 md:border border-gray-200 flex items-center gap-6 rounded-sm p-6 md:mr-10 w-full">
                        <Image src={instructor.image} className="rounded-full" width={73} height={73} alt="Instructor Image" />

                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="text-lg text-gray-800 hover:text-[#1CAB55] cursor-pointer">{instructor.name}</h3>
                                <MdChevronRight className="size-5 text-gray-600" />
                            </div>
                            <p
                                className="text-gray-700 text-sm leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: instructor.description }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default InstructorSection;