import { Skeleton } from "../ui/skeleton";

export const HeroSkeleton = () => (
    <section className="p-4">
        <div className="mx-auto max-w-7xl flex flex-col gap-6 md:flex-row md:gap-12 min-h-[300px]">
            <div className="flex-1 space-y-4">
                <Skeleton className="w-full aspect-video" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-5 w-[200px]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="hidden md:block w-full md:max-w-[330px] lg:max-w-[400px] space-y-4">
                <Skeleton className="w-full aspect-video" />
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-10 w-full rounded" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
            </div>
        </div>
    </section>
);