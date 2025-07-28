import { useQuery } from '@tanstack/react-query';
import { useLangStore } from '@/zustand/store/useLangStore';
import axios from 'axios';

const fetchCourse = async (lang: string) => {
    const { data } = await axios.get(
        `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
        {
            headers: {
                'X-TENMS-SOURCE-PLATFORM': 'web',
                Accept: 'application/json',
            },
        }
    );
    return data;
};

export const useCourseData = () => {
    const lang = useLangStore((state) => state.lang);

    return useQuery({
        queryKey: ['course', lang],
        queryFn: () => fetchCourse(lang),
        staleTime: 1000 * 60 * 5,
    });
};
