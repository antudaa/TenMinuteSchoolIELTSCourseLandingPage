import { FaCheck } from "react-icons/fa6";

type Props = {
    data: any;
};

const LearningsSection: React.FC<Props> = ({ data }) => {
    return (
        <aside id="pointers">
            <div className="mb-6 md:mb-10 relative bg-[#E5E7EB] py-2 md:bg-white md:py-0">
                <div className="py-6 bg-white md:py-0">
                    <h2 className="mb-4 text-xl text-[#111827] font-semibold md:text-2xl">{data?.name}</h2>
                    <div className="rounded-md md:border">
                        <div className="pt-2 md:p-6">
                            <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
                                {data?.values?.map((item: any) => (
                                    <li key={item.id} className="flex items-start gap-2 mb-2">
                                        <FaCheck className="size-4 text-blue-400 mt-1" />
                                        <p className="flex-1">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default LearningsSection;
