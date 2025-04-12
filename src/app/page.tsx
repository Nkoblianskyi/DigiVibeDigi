'use client';

import { Achievements } from "@/components/section/Achievements";
import { FAQ } from "@/components/section/FAQ";
import { Gratitude } from "@/components/section/Gratitude";
import { Hero } from "@/components/section/Hero";
import Services from "@/components/section/Services";
import { WhyUs } from "@/components/section/WhyUs";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get('scrollTo');

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [scrollTo]);
  return (
    <div className="flex flex-col items-center container">
      <Hero />
      <Services />
      <Gratitude />
      <Achievements />
      <FAQ />
      <WhyUs />
    </div>
  );
}
