import ChatButton from "@/components/common/Buttons/ChatButton";
import WhatsAppButton from "@/components/common/Buttons/WhatsAppButton";
import CourseDetails from "@/components/sections/CourseDetails";
import { Hero } from "@/components/sections/Hero";
import { HeroBannerAdd } from "@/components/sections/HeroBannerAdd";
import RecommendedCourses from "@/components/sections/RecommendedCourses";

export default async function Home() {

  return (
    <>
      <HeroBannerAdd />
      <Hero />
      <CourseDetails />
      <RecommendedCourses />
      <ChatButton />
      <WhatsAppButton />
    </>
  );
};