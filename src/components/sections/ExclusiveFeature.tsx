import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

type Props = {
    data: any;
};

const ExclusiveFeaturesSection: React.FC<Props> = ({ data }) => {
    return (
        <aside id="feature_explanations">
            <div className="mb-6">
                <div className="flex flex-col justify-between w-full">
                    <h2 className="text-xl mb-2 md:mb-4 font-semibold text-black leading-[30px]">
                        {data?.name}
                    </h2>

                    <div className="grid grid-cols-1 px-5 border divide-y rounded-md">
                        {data?.values?.map((item: any) => (
                            <div
                                key={item?.id}
                                className="flex flex-col items-start justify-between gap-3 py-5 md:flex-row"
                            >
                                <div className="flex-1">
                                    <h2 className="text-sm font-medium leading-[30px] text-[#111827]">
                                        {item?.title}
                                    </h2>
                                    {item?.checklist.map((checklistItem: string) => (
                                        <div key={checklistItem} className="flex items-start gap-3 mt-1">
                                            <FaCheck className="size-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                                            <p className="text-sm text-[#4B5563]">{checklistItem}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-4 mx-auto max-w-[350px]">
                                    <Image
                                        src={item?.file_url}
                                        alt={item?.title}
                                        width={250}
                                        height={200}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ExclusiveFeaturesSection;
