'use client';

import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel';

const testimonials = [
    {
        name: 'Anna K.',
        role: 'E-commerce Owner',
        quote: 'Their PPC campaigns doubled our sales in just two months! The team is super responsive and knows how to get results. Highly recommend!'
    },
    {
        name: 'Markus B.',
        role: 'Startup Founder',
        quote: 'Thanks to their SEO work, we’re now on the first page of Google. It’s been a game-changer for our visibility.'
    },
    {
        name: 'Sophie L.',
        role: 'Marketing Manager',
        quote: 'The social media strategy they built for us brought so much engagement. Our followers love the content, and we love the growth!'
    },
    {
        name: 'Thomas R.',
        role: 'Online Retailer',
        quote: 'Affiliate services from these guys are top-notch. They set up partnerships that keep bringing in steady revenue with zero hassle.'
    },
    {
        name: 'Elena M.',
        role: 'Small Business Owner',
        quote: 'I wasn’t sure where to start with digital marketing, but they guided me every step. PPC and SEO combo worked wonders for us!'
    },
    {
        name: 'David H.',
        role: 'Tech Entrepreneur',
        quote: 'Professional, creative, and results-driven. Their affiliate and social media support took our brand to a new level.'
    }
];

const partners = [
    '1.svg',
    '2.svg',
    '3.svg',
    '4.svg',
    '5.svg',
    '6.svg',
    '7.svg'
];

export const Gratitude = () => {
    return (
        <section
            id="gratitude"
            className="py-20 px-4 bg-muted text-center overflow-hidden w-full"
        >
            <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

            <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                <Carousel className="w-full">
                    <CarouselPrevious className="left-2 z-10" />
                    <CarouselContent className="ml-0 px-2 sm:px-4">
                        {testimonials.map((testimonial, idx) => (
                            <CarouselItem
                                key={idx}
                                className="px-2 basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                            >
                                <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col justify-between text-left">
                                    <p className="text-gray-700 italic mb-4 text-sm sm:text-base">{testimonial.quote}</p>
                                    <div className="font-semibold text-base sm:text-lg">{testimonial.name}</div>
                                    <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="right-2 z-10" />
                </Carousel>
            </div>

            <h3 className="text-2xl font-bold mt-16 mb-6">Our Partners</h3>

            <div className="overflow-hidden w-full">
                <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center items-center gap-4 sm:gap-6 py-4">
                    {partners.map((logo, idx) => (
                        <div
                            key={idx}
                            className="flex justify-center items-center w-[70px] sm:w-[90px] md:w-[100px] h-[40px] sm:h-[50px] md:h-[60px] flex-shrink-0"
                        >
                            <Image
                                src={`/${logo}`}
                                alt={`Partner logo ${idx + 1}`}
                                width={100}
                                height={60}
                                className="object-contain grayscale hover:grayscale-0 transition w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
