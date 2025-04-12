'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

const services = [
    {
        title: 'PPC Services',
        text: 'Launch high-impact pay-per-click campaigns that target the right audience. Our team optimizes every ad to ensure maximum ROI and immediate results.',
        image: '/ppc.jpg',
        link: '/services/ppc',
    },
    {
        title: 'SEO Services',
        text: 'Climb search engine rankings with proven strategies. We enhance your site’s visibility, driving organic traffic that converts.',
        image: '/seo.png',
        link: '/services/seo',
    },
    {
        title: 'Social Media Services',
        text: 'Build a loyal following across platforms like Instagram, Facebook, and beyond. From content creation to ads, we make your brand stand out.',
        image: '/social.png',
        link: '/services/social',
    },
    {
        title: 'Affiliate Services',
        text: 'Tap into profitable partnerships with our affiliate expertise. We connect you with the right networks to boost revenue effortlessly.',
        image: '/affiliate.png',
        link: '/services/affiliate',
    },
];

export const Services = () => {
    useEffect(() => {
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Services Offered by DigiVibeDigi",
            "itemListElement": services.map((service, index) => ({
                "@type": "Service",
                "position": index + 1,
                "name": service.title,
                "description": service.text,
                "serviceType": "Digital Marketing",
                "provider": {
                    "@type": "Organization",
                    "name": "DigiVibeDigi",
                    "url": "https://www.digivibedigi.com"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                },
                "url": `https://www.digivibedigi.com${service.link}`,
                "image": `https://www.digivibedigi.com${service.image}`
            }))
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section id="services" className="py-20 px-4 md:px-8 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Discover what we can do for you
            </h2>

            <div className="space-y-20">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={`flex flex-col lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            } items-center gap-10`}
                    >
                        <div className="lg:w-1/2">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={400}
                                className="rounded-lg shadow-md w-full h-auto object-cover"
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-semibold">{service.title}</h3>
                            <p className="text-gray-600 md:text-lg">{service.text}</p>
                            <Link
                                href={service.link}
                                className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-primary/90 transition"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
