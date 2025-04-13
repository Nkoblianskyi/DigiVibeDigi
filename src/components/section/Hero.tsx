

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Digital strategies that spark growth</h1>
                <p className="hero__description">From SEO to social media and affiliates — we help bold brands grow smarter, faster, stronger.</p>
                <Link href="/write-to-us" className="hero__button">Start with us</Link>
            </div>
            <Image className="hero__image" src='/hero.png' alt='hero' width={500} height={600} />
        </div>
    );
};