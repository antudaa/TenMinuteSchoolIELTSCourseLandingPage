import Image from "next/image";

type Props = {
  data: any;
};

const CourseOutlineSection: React.FC<Props> = ({ data }) => {
  return (
    <aside id="features">
      <h2 className="mb-4 text-xl md:text-2xl text-[#111827] font-semibold">{data?.name}</h2>

      <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {data?.values.map((item: any) => (
          <div key={item.id} className="flex flex-row items-start gap-3 m-1">
            <div className="mb-4 mx-auto">
              <Image src={item.icon} height={36} width={36} alt={item.title} className="object-contain" />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h2 className="text-lg font-medium text-white">{item.title}</h2>
              <p className="text-sm font-normal text-[#9CA3AF]">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CourseOutlineSection;