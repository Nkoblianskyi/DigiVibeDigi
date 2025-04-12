'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const schema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    confirmEmail: z.string().email(),
    language: z.string().optional(),
    phone: z.string().optional(),
    company: z.string().optional(),
    legalEntity: z.string().optional(),
    websiteName: z.string().optional(),
    websiteLink: z.string().url().optional(),
    address1: z.string().optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
    paymentMethod: z.string().optional(),
    taxId: z.string().optional(),
    referralCode: z.string().optional(),
    trafficSources: z.string().optional(),
    offerTypes: z.string().optional(),
    geos: z.string().optional(),
    monthlyTraffic: z.string().optional(),
    hasEmailList: z.string().optional(),
    emailListDetails: z.string().optional(),
    ownOffers: z.string().optional(),
    experience: z.string().optional(),
    pastNetworks: z.string().optional(),
    affiliateManager: z.string().optional(),
    skype: z.string().optional(),
    description: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function WriteToUs() {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {  },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        setOpen(true);
        reset();
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DigiVibeDigi",
            "url": "https://www.digivibedigi.com",
            "logo": "https://www.digivibedigi.com/logo.svg",
            "contactPoint": {
                "@type": "ContactPoint",
                "email": "info@digivibedigi.com",
                "contactType": "customer support",
                "areaServed": "Worldwide",
                "availableLanguage": ["English"]
            },
            "sameAs": [
                "https://www.facebook.com/digivibedigi",
                "https://www.instagram.com/digivibedigi",
                "https://www.linkedin.com/company/digivibedigi"
            ]
        });
        document.head.appendChild(script);
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <section className="max-w-5xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-6">Write to Us</h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
                Ready to take your business to the next level? We’re here to help with tailored PPC, SEO, Social Media, and Affiliate solutions.
                Share your goals, ask a question, or just say hi — our team will get back to you pronto!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <Input {...register('firstName')} placeholder="First Name" />
                <Input {...register('lastName')} placeholder="Last Name" />
                <Input {...register('email')} placeholder="Email" />
                <Input {...register('confirmEmail')} placeholder="Email Confirmation" />
                <Input {...register('language')} placeholder="Language" />
                <Input {...register('phone')} placeholder="Phone Number" />
                <Input {...register('company')} placeholder="Company" />
                <Input {...register('legalEntity')} placeholder="Legal Entity Type" />
                <Input {...register('websiteName')} placeholder="Company/Individual/Website Name" />
                <Input {...register('websiteLink')} placeholder="Website/Social/Media" />

                <h2 className="col-span-full font-semibold mt-4">Address</h2>
                <Input {...register('address1')} placeholder="Address 1" />
                <Input {...register('address2')} placeholder="Apartment, Suite, etc." />
                <Input {...register('city')} placeholder="City" />
                <Input {...register('postalCode')} placeholder="Postal Code" />
                <Input {...register('country')} placeholder="Country" />

                <h2 className="col-span-full font-semibold mt-4">Billing</h2>
                <Input {...register('paymentMethod')} placeholder="Payment Method" />
                <Input {...register('taxId')} placeholder="Tax ID / VAT or SSN" />

                <h2 className="col-span-full font-semibold mt-4">Additional Information</h2>
                <Input {...register('referralCode')} placeholder="Referral Code" />
                <Input {...register('trafficSources')} placeholder="List your traffic sources here:" />
                <Input {...register('offerTypes')} placeholder="What kind of offers are you looking for?" />
                <Input {...register('geos')} placeholder="What GEOs do you run?" />
                <Input {...register('monthlyTraffic')} placeholder="How much traffic can we expect in a month?" />
                <Input {...register('hasEmailList')} placeholder="Do you have an email list?" />
                <Input {...register('emailListDetails')} placeholder="What is your list size and how was it built?" />
                <Input {...register('ownOffers')} placeholder="Do you have your own offers?" />
                <Input {...register('experience')} placeholder="How long have you worked as a marketer?" />
                <Input {...register('pastNetworks')} placeholder="List networks you’ve worked with before" />
                <Input {...register('affiliateManager')} placeholder="Affiliate manager contact" />
                <Input {...register('skype')} placeholder="Your Skype ID" />
                <Textarea {...register('description')} placeholder="Describe the sites and methods used to advertise" rows={5} className="col-span-full" />

                <div className="col-span-full text-right">
                    <Button type="submit">Submit</Button>
                </div>
            </form>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="text-center">
                    <DialogHeader>
                        <DialogTitle>Thank you!</DialogTitle>
                    </DialogHeader>
                    <p>We will contact you as soon as possible! (usually within 24 hours)</p>
                </DialogContent>
            </Dialog>
        </section>
    );
}
