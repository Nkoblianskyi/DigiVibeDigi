'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SEOServicesPage() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16 text-gray-800" id="seo-services">
            <header className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">SEO Services</h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    In a world where visibility is everything, ranking high on search engines like Google isn’t just an option—it’s a necessity.
                </p>
            </header>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <Image
                        src="/seo-hero.png"
                        alt="SEO Strategy Illustration"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg shadow"
                    />
                </div>
                <div className="space-y-4 text-sm sm:text-base">
                    <p>
                        We specialize in SEO that drives organic traffic, boosts brand credibility, and delivers measurable results.
                        Our team stays ahead of the curve, leveraging the latest trends—like AI-powered keyword research and voice search optimization—to keep your business on top.
                    </p>
                    <p>
                        We don’t believe in one-size-fits-all. Our SEO strategies are tailored to your unique goals, whether you’re a startup aiming to break into the market or an established brand looking to dominate your niche.
                    </p>
                    <p>
                        From in-depth site audits and technical fixes to content optimization and high-quality backlink building, we cover every angle. Our data-driven approach ensures your website not only ranks but also converts visitors into loyal customers.
                    </p>
                    <p className="font-semibold">
                        Ready to outshine your competitors? Let’s elevate your search presence together.
                    </p>
                    <Link href="/write-to-us">
                        <Button className="mt-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white px-6 py-2">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
