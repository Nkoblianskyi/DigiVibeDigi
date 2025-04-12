'use client';

import Link from 'next/link';

export const WhyUs = () => {
    return (
        <section id="why-us" className="bg-white py-20 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Are We Right for You?</h2>
            <p className="max-w-2xl mx-auto text-gray-700 text-base md:text-lg mb-8">
                Looking for a partner to grow your business online? We’re the perfect fit. Our team combines expertise in PPC,
                SEO, Social Media, and Affiliate strategies to deliver measurable results tailored to your goals. No generic
                plans — just smart, creative solutions that drive traffic, boost revenue, and save you time. Ready to see the difference?
            </p>
            <Link
                href="/write-to-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary/90 transition"
            >
                Get Started
            </Link>
        </section>
    );
};
