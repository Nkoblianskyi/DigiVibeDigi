'use client';

import Image from 'next/image';
import Link from 'next/link';
import { posts } from '../../../public/mocks/blog';

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
                                href={`/blog/${post.slug}`}
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
