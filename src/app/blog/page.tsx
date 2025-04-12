'use client';

import Image from 'next/image';
import Link from 'next/link';

const posts = [
    {
        title: 'The Future of SEO: How AI is Revolutionizing Search Engine Optimization',
        summary: 'AI tools are transforming how we optimize websites—from keyword prediction to real-time content generation and voice search strategies.',
        image: '/blog/1.png',
    },
    {
        title: 'SEO Myths Debunked: What Still Works in 2025',
        summary: 'Let’s set the record straight. We debunk the biggest SEO misconceptions and explain what truly works in today’s landscape.',
        image: '/blog/2.png',
    },
    {
        title: 'PPC Strategies for Maximum ROI: Beyond the Basics',
        summary: 'Audience segmentation, AI bidding, and video ads — discover modern tactics to boost your PPC return on investment.',
        image: '/blog/3.png',
    },
    {
        title: 'Why Your PPC Campaigns Are Failing (And How to Fix Them)',
        summary: 'Explore the most common PPC mistakes and how to fix them with keyword strategies, landing pages, and creative testing.',
        image: '/blog/4.png',
    },
    {
        title: 'Affiliate Marketing in 2025: Trends to Watch and Win',
        summary: 'AI tools, subscription models, and niche influencers are redefining affiliate marketing. Here’s how to adapt and thrive.',
        image: '/blog/5.png',
    },
    {
        title: 'How to Scale Your Affiliate Revenue Without Burning Out',
        summary: 'Repurpose content, automate with tools, and diversify income streams to sustainably scale affiliate revenue.',
        image: '/blog/6.png',
    },
    {
        title: 'Social Media Marketing: Mastering Algorithm Changes in 2025',
        summary: 'New algorithm rules across Instagram, TikTok, and LinkedIn mean it’s time to rethink your social strategy.',
        image: '/blog/7.png',
    },
    {
        title: 'The Power of Paid Social: Boosting Brand Reach in a Crowded Feed',
        summary: 'Master targeting, creatives, and ad formats across Facebook, Instagram, and TikTok to dominate paid social.',
        image: '/blog/8.png',
    },
];

export default function BlogPage() {
    return (
        <section className="max-w-7xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, idx) => (
                    <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={600}
                            height={400}
                            className="object-cover w-full h-52"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                            <Link
                                href="#"
                                className="text-sm text-primary font-medium underline hover:no-underline"
                            >
                                Read full article
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
