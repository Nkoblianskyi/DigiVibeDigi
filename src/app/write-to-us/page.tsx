'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import clsx from 'clsx';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// 🔐 Zod schema with confirmEmail validation
const schema = z
    .object({
        firstName: z.string().min(1, 'First name is required'),
        lastName: z.string().min(1, 'Last name is required'),
        email: z.string().email('Invalid email'),
        confirmEmail: z.string().email('Invalid email'),
        language: z.string().optional(),
        phone: z.string().optional(),
        company: z.string().optional(),
        legalEntity: z.string().optional(),
        websiteName: z.string().optional(),
        address1: z.string().optional(),
        address2: z.string().optional(),
        city: z.string().optional(),
        postalCode: z.string().optional(),
        country: z.string().optional(),
        description: z.string().optional(),
    })
    .refine((data) => data.email === data.confirmEmail, {
        message: 'Emails do not match',
        path: ['confirmEmail'],
    });

type FormData = z.infer<typeof schema>;

export default function WriteToUs() {
    const [open, setOpen] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        console.log(data);
        setOpen(true);
        setSuccessMessage(true);
        reset();

        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify({
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
            }
        });
        document.head.appendChild(script);
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return (
        <section className="max-w-5xl mx-auto py-16 px-4">
            <h1 className="text-3xl font-bold mb-6">Write to Us</h1>
            <p className="text-gray-600 mb-10 max-w-2xl">
                Ready to take your business to the next level? We’re here to help with tailored PPC, SEO, Social Media,
                and Affiliate solutions. Share your goals, ask a question, or just say hi — our team will get back to you pronto!
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Row 1 */}
                <div>
                    <Input {...register('firstName')} placeholder="First Name" className={clsx({ 'border-red-500': errors.firstName })} />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>

                <div>
                    <Input {...register('lastName')} placeholder="Last Name" className={clsx({ 'border-red-500': errors.lastName })} />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>

                <div>
                    <Input {...register('email')} placeholder="Email" className={clsx({ 'border-red-500': errors.email })} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div>
                    <Input {...register('confirmEmail')} placeholder="Email Confirmation" className={clsx({ 'border-red-500': errors.confirmEmail })} />
                    {errors.confirmEmail && <p className="text-red-500 text-sm">{errors.confirmEmail.message}</p>}
                </div>

                <Input {...register('language')} placeholder="Language" />
                <Input {...register('phone')} placeholder="Phone Number" />
                <Input {...register('company')} placeholder="Company" />
                <Input {...register('legalEntity')} placeholder="Legal Entity Type" />
                <Input {...register('websiteName')} placeholder="Company/Individual/Website Name" />


                {/* Address */}
                <h2 className="col-span-full font-semibold mt-4">Address</h2>
                <Input {...register('address1')} placeholder="Address 1" />
                <Input {...register('address2')} placeholder="Apartment, Suite, etc." />
                <Input {...register('city')} placeholder="City" />
                <Input {...register('postalCode')} placeholder="Postal Code" />
                <Input {...register('country')} placeholder="Country" />

                {/* Message */}
                <h2 className="col-span-full font-semibold mt-4">Message</h2>
                <Textarea
                    {...register('description')}
                    placeholder="Describe the services you are interested in..."
                    rows={5}
                    className="col-span-full"
                />

                {/* Submit Button + Message */}
                <div className="col-span-full flex justify-end items-center gap-4 mt-4">
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                    {successMessage && (
                        <p className="text-green-600 text-sm font-medium whitespace-nowrap">
                            Message sent successfully!
                        </p>
                    )}
                </div>
            </form>

            {/* Dialog success pop-up */}
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
