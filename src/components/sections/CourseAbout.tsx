import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
    data: any;
};

const CourseDetailsAccordion: React.FC<Props> = ({ data }) => {
    return (
        <aside id="about">
            <div className="mb-6">
                <div className="flex flex-col justify-between w-full">
                    <h2 className="mb-2 text-xl font-semibold md:mb-4">{data.name}</h2>

                    <Accordion className="rounded-lg py-2 md:border md:px-5" type="single" collapsible>
                        {data?.values?.map((item: any, index: number) => (
                            <AccordionItem key={item.id || index} value={`item-${index}`}>
                                <AccordionTrigger>
                                    <div
                                        className="text-sm font-medium"
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div
                                        className="text-md text-[#374151] space-y-2 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: item.description }}
                                    />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </aside>
    );
};

export default CourseDetailsAccordion;
