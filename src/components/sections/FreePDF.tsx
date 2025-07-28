import Image from "next/image";

type Props = {
    data: any;
};

const FreePDFSection: React.FC<Props> = ({ data }) => {
    const content = data?.values?.[0];
    if (!content) return null;

    return (
        <aside id="group_join_engagement">
            <div
                className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
                style={{ backgroundImage: `url('${content?.background?.image}')` }}
            >
                <div className="w-full md:w-1/2">
                    <Image src={content.top_left_icon_img} width={200} height={40} alt="Free PDF Icon" className="mb-4" />
                    <h2 className="text-xl font-semibold text-white">{content.title}</h2>
                    <p className="mt-2 text-base text-[#ededed]">{content.description}</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded cursor-pointer mt-4">
                        {content.cta?.text}
                    </button>
                </div>

                <div className="items-center hidden w-1/2 md:flex">
                    <Image src={content.thumbnail} width={400} height={200} alt="Thumbnail Image" />
                </div>
            </div>
        </aside>
    );
};

export default FreePDFSection;
