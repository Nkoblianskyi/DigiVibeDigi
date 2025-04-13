'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PPCServicesPage() {
    return (
        <section className="w-full px-4 md:px-12 py-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        PPC Advertising Services
                    </h1>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                        Need fast, targeted results? Our Pay-Per-Click (PPC) services are your shortcut to reaching the right audience at the right time. At <strong>digivibedigi.com</strong>, we craft PPC campaigns that maximize your return on investment (ROI) while keeping your budget in check. From Google Ads to emerging platforms like YouTube and TikTok, we’ve got the expertise to make every click count.
                    </p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                        What sets us apart? Precision and creativity. We dive deep into audience segmentation, bid optimization, and ad copy that grabs attention. Whether it’s driving sales, generating leads, or boosting brand awareness, our team fine-tunes every detail—keywords, landing pages, and ad creatives—to ensure success.
                    </p>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base">
                        With real-time analytics and continuous optimization, we turn clicks into customers. Stop wasting ad spend on guesswork—partner with us for PPC campaigns that deliver.
                    </p>
                    <Link href="/write-to-us">
                        <Button className="bg-gradient-to-r from-pink-500 to-purple-700 text-white px-6 py-3 rounded-md">
                            Start Your PPC Journey
                        </Button>
                    </Link>
                </div>

                <div className="relative w-full h-auto max-h-[500px] rounded-xl overflow-hidden">
                    <Image
                        src="/ppc-page.png"
                        alt="PPC Advertising Illustration"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
}
