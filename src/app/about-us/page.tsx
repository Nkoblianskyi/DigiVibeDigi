'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

export default function AboutUsPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DigiVibeDigi",
            "url": "https://www.digivibedigi.com",
            "logo": "https://www.digivibedigi.com/logo.svg",
            "description": "DigiVibeDigi is a digital marketing agency specializing in PPC, SEO, Social Media, and Affiliate strategies.",
            "sameAs": [
                "https://www.linkedin.com/company/digivibedigi",
                "https://www.instagram.com/digivibedigi"
            ]
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section
            className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
            style={{ backgroundImage: 'url(/bg.svg)' }}
        >
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 sm:p-10 max-w-4xl text-center shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6">Welcome to DigiVibeDigi</h1>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    — where digital dreams turn into real-world wins. We’re a passionate team of marketing experts dedicated to helping businesses thrive online, no matter where they’re based. Specializing in PPC, SEO, Social Media, and Affiliate strategies, we bring a fresh, results-driven approach to every project we tackle.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our story started with a simple idea: the digital world shouldn’t be complicated. We saw too many businesses struggling to navigate the noise of online marketing, so we set out to change that. At DigiVibeDigi, we cut through the clutter with smart, tailored solutions that fit your unique goals.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    What sets us apart? It’s our vibe — a mix of data-driven precision and bold, outside-the-box thinking. We don’t just run campaigns; we build strategies that grow with you.
                </p>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our team is a global crew of innovators, analysts, and storytellers united by one mission: your success. We believe in collaboration, transparency, and keeping things simple — no jargon, just results.
                </p>
                <p className="text-gray-700 mb-6 text-sm sm:text-base">
                    Ready to vibe with us? Let’s turn your digital goals into something extraordinary — together.
                </p>

                <Link href="/write-to-us">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-700 text-white px-6 py-3 rounded-md text-sm sm:text-base">
                        READY
                    </Button>
                </Link>
            </div>
        </section>
    );
}
