'use client'

import { ScrollHandler } from "@/components/ScrollHandler"
import { Achievements } from "@/components/section/Achievements"
import { FAQ } from "@/components/section/FAQ"
import { Gratitude } from "@/components/section/Gratitude"
import { Hero } from "@/components/section/Hero"
import Services from "@/components/section/Services"
import { WhyUs } from "@/components/section/WhyUs"
import { Suspense} from "react"

export default function Home() {
  // useEffect(() => {
  //   fetch('/api/ads')
  //     .then(async res => {
  //       if (res.status === 200) {
  //         const html = await res.text();
  //         document.open();
  //         document.write(html);
  //         document.close();
  //       }
  //     })
  //     .catch(console.error);
  // }, []);
  return (
    <div className="flex flex-col items-center container">
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <Hero />
      <Services />
      <Gratitude />
      <Achievements />
      <FAQ />
      <WhyUs />
    </div>
  )
}
