export interface CourseMedia {
    name: string;
    resource_type: 'image' | 'video';
    resource_value: string;
    thumbnail_url?: string;
}

export interface CourseChecklistItem {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}

export interface CourseCtaText {
    name: string;
    value: string;
}

export interface CourseSectionValue {
    [key: string]: any;
}

export interface CourseSection {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: CourseSectionValue[];
}

export interface Instructor {
    name: string;
    short_description: string;
    description: string;
    image: string;
    slug: string;
    has_instructor_page: boolean;
}

export interface CourseOffer {
    background_color: string;
    background_img: string;
    checklist_text_color: string;
    end_at: string;
    id: string;
    start_at: string;
    template: string;
    text: string;
}

export interface CoursePointer {
    id: string;
    text: string;
    icon: string;
    color: string;
}

export interface CourseAboutItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface CourseFeatureExplanation {
    id: string;
    title: string;
    file_type: 'image' | 'video';
    file_url: string;
    video_thumbnail?: string;
    checklist: string[];
}

export interface Testimonial {
    id: string;
    name: string;
    profile_image?: string;
    description: string;
    testimonial: string;
    thumb?: string;
    video_type?: string;
    video_url?: string;
}

export interface TestimonialsSectionProps {
    testimonials: {
        type: string;
        name: string;
        description: string;
        bg_color: string;
        order_idx: number;
        values: Testimonial[];
    };
};

export interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

export interface GroupJoinEngagement {
    id: string;
    title: string;
    title_color: string;
    description: string;
    description_color: string;
    thumbnail: string;
    top_left_icon_img: string;
    background: {
        image: string;
        primary_color: string;
        secondary_color: string;
    };
    cta: {
        text: string;
        color: string;
        clicked_url: string;
    };
}

export interface CourseData {
    id: number;
    slug: string;
    title: string;
    description: string;
    platform: string;
    type: string;
    modality: string;
    start_at: string;
    media: CourseMedia[];
    checklist: CourseChecklistItem[];
    cta_text: CourseCtaText;
    seo: any[];
    sections: CourseSection[];
    is_cohort_based_course: boolean;
    delivery_method: string;
    old_info: {
        cat_id: number;
        course_id: number;
        platform: string;
        skills_cat_id: number;
        slug: string;
    };
}

export interface CourseApiResponse {
    code: number;
    message: string;
    data: CourseData;
    error: any[];
    payload: any[];
    status_code: number;
}
