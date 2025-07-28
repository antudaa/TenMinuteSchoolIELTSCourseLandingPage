"use client";

import React from "react";
import { useCourseData } from "@/hooks/useCourseData";
import StickyCarousel from "./StickyCourseCarousel";
import InstructorSection from "./InstructorSection";
import CourseOutlineSection from "./CourseOutline";
import FreePDFSection from "./FreePDF";
import LearningsSection from "./Learning";
import CourseDetailsAccordion from "./CourseAbout";
import ExclusiveFeaturesSection from "./ExclusiveFeature";
import FreeItemsSection from "./FreeItems";
import TestimonialsSection from "./Testimonials";
import RequirementsList from "./RequirementsList";
import HowToPaySection from "./HowToPay";
import FaqSection from "./FAQ";
import MoreHelpSection from "./MoreHelp";
import { Skeleton } from "@/components/ui/skeleton";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 100,
      behavior: "smooth",
    });
  }
};

const SectionSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-6 w-1/3" />
    <Skeleton className="h-4 w-2/3" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-5/6" />
  </div>
);

const CourseDetails = () => {
  const { data, isLoading } = useCourseData();

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:gap-12 px-4">
        <div className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-348px)] lg:max-w-[calc(100%_-448px)] space-y-8 py-8">
          {[...Array(6)].map((_, i) => (
            <SectionSkeleton key={i} />
          ))}
        </div>
      </section>
    );
  }

  const sections = data?.data?.sections ?? [];

  return (
    <section className="mx-auto max-w-7xl flex flex-col gap-4 md:flex-row md:gap-12 px-4">
      <div className="order-2 flex-1 md:order-1 md:max-w-[calc(100%_-348px)] lg:max-w-[calc(100%_-448px)]">
        <StickyCarousel onNavigate={scrollToSection} />

        <InstructorSection data={sections[2]} />
        <CourseOutlineSection data={sections[3]} />
        <FreePDFSection data={sections[4]} />
        <LearningsSection data={sections[5]} />
        <CourseDetailsAccordion data={sections[7]} />
        <ExclusiveFeaturesSection data={sections[8]} />
        <FreeItemsSection data={sections[9]} />
        <TestimonialsSection testimonials={sections[12]} />
        <RequirementsList name={sections[13]?.name} />
        <HowToPaySection name={sections[14]?.name} />
        <FaqSection faq={sections[15]} />
        <MoreHelpSection />
      </div>
    </section>
  );
};

export default CourseDetails;
