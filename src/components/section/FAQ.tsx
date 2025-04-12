'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: 'How long does it take to see results from your services?',
        answer: 'It depends on the service! PPC can deliver traffic within days, while SEO typically shows results in 3-6 months. Social Media and Affiliate growth varies based on your goals — we’ll give you a tailored timeline after our first chat.'
    },
    {
        question: 'What makes your agency different from others?',
        answer: 'We focus on data-driven strategies and personalized solutions. Whether it’s optimizing PPC ads or building affiliate networks, we prioritize your ROI and long-term success over one-size-fits-all approaches.'
    },
    {
        question: 'Do I need a big budget to work with you?',
        answer: 'Not at all! We work with businesses of all sizes and tailor our services — from affordable Social Media campaigns to scalable SEO plans — to fit your budget and goals.'
    },
    {
        question: 'How do you measure success for my campaigns?',
        answer: 'We track key metrics like clicks, conversions, organic traffic, and revenue growth. You’ll get clear, regular reports showing how our efforts (PPC, SEO, etc.) are paying off for you.'
    },
    {
        question: 'Can you handle multiple services at once, like SEO and Affiliate?',
        answer: 'Absolutely! We specialize in integrated strategies. Combining SEO with Affiliate or PPC with Social Media allows us to maximize your reach and results efficiently.'
    }
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 bg-background">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-border rounded-lg p-4 transition-all duration-300 shadow-sm"
                    >
                        <button
                            onClick={() => toggleIndex(index)}
                            className="flex justify-between items-center w-full text-left text-lg font-medium"
                        >
                            <span>{faq.question}</span>
                            <ChevronDown
                                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                            />
                        </button>
                        <div
                            className={`text-muted-foreground text-sm mt-3 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
