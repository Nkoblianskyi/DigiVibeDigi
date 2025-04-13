'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function SocialMediaServicesPage() {
    return (
        <section className="max-w-5xl mx-auto py-20 px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <Image
                        src="/social-page.png"
                        alt="Social Media Marketing"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                </div>

                <div className="md:w-1/2 space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        Social Media Marketing Services
                    </h1>
                    <p className="text-gray-700 text-base">
                        Social media isn’t just a platform — it’s where your audience lives. Our Social Media Marketing
                        services help you cut through the noise, build a loyal following, and drive engagement that matters.
                        From Instagram and TikTok to LinkedIn and Facebook, we create strategies that align with your brand
                        and resonate with your target market.
                    </p>
                    <p className="text-gray-700 text-base">
                        We go beyond posting pretty pictures. Our team crafts content that sparks conversations, paired with
                        paid ad campaigns that amplify your reach. Need to master the latest algorithm changes? We’ve got
                        you covered with organic growth tactics and data-backed insights.
                    </p>
                    <p className="text-gray-700 text-base">
                        Whether it’s launching viral campaigns, managing communities, or boosting conversions with targeted
                        ads, we turn likes into lasting impact. Ready to dominate the social scene? Let’s make your brand
                        unmissable.
                    </p>

                    <Link href="/write-to-us">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-700 text-white px-6 py-3 rounded-md">
                            Let’s Talk
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
