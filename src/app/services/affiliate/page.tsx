import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AffiliateMarketingPage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-20 space-y-16">
            {/* Header */}
            <header className="text-center space-y-6">
                <h1 className="text-4xl font-bold text-gray-900">
                    Affiliate Marketing Services
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Grow your revenue without the heavy lifting. Our affiliate strategies connect you with the right partners for consistent results.
                </p>
                <Link href="/write-to-us" >
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-md">
                        GET STARTED
                    </Button>
                </Link>
            </header>

            {/* Illustration */}
            <div className="flex justify-center">
                <Image
                    src="/affiliate-service.png"
                    alt="Affiliate Marketing Illustration"
                    width={700}
                    height={400}
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* Content */}
            <div className="space-y-8 max-w-3xl mx-auto text-gray-700 text-base leading-relaxed">
                <p>
                    Want to grow your revenue without the heavy lifting? Affiliate Marketing services at DigiVibeDigi unlock new income streams by connecting your brand with the right partners.
                </p>
                <p>
                    We design and manage affiliate programs that drive sales, expand reach, and build trust—all while you focus on running your business.
                </p>
                <p>
                    Our approach is strategic and hands-on. We identify high-performing niches, recruit top-tier affiliates (from influencers to niche bloggers), and optimize campaigns for maximum commissions.
                </p>
                <p>
                    With advanced tracking tools and fraud prevention, we ensure transparency and results. Whether you’re launching a new program or scaling an existing one, we bring the expertise to make affiliate marketing a powerhouse for your brand.
                </p>
                <p className="font-semibold text-gray-900">
                    Let’s turn partnerships into profits — starting today.
                </p>
            </div>
        </section>
    );
}
