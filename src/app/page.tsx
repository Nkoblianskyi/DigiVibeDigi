'use client'

// import CloakCheck from "@/components/Check"
import { ScrollHandler } from "@/components/ScrollHandler"
import { Achievements } from "@/components/section/Achievements"
import { FAQ } from "@/components/section/FAQ"
import { Gratitude } from "@/components/section/Gratitude"
import { Hero } from "@/components/section/Hero"
import Services from "@/components/section/Services"
import { WhyUs } from "@/components/section/WhyUs"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="flex flex-col items-center container">
      {/* <CloakCheck /> */}
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
