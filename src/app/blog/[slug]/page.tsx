'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { posts } from '../../../../public/mocks/blog';
import Image from 'next/image';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params); // ✅ правильне використання в Next 15+

    const post = posts.find(p => p.slug === slug);

    if (!post) return notFound();

    return (
        <article className="max-w-4xl mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-auto max-h-[500px] rounded-md mb-8 object-cover"
            />
            <div className="prose prose-lg text-gray-800">
                {post.content.split('\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </div>
        </article>
    );
}
