'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; 

export const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        window.location.href = '/cookies-policy';
    };

    if (!visible) return null;

    return (
        <div
            className={cn(
                'fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 shadow-md',
                'px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-base'
            )}
        >
            <p className="text-gray-700 text-center md:text-left max-w-2xl">
                We use cookies to improve your browsing experience and analyze site traffic. Read more in our{' '}
                <Link href="/cookies-policy" className="text-blue-600 underline hover:text-blue-800">
                    Cookies Policy
                </Link>.
            </p>
            <div className="flex gap-2">
                <Button onClick={acceptCookies} className="bg-primary text-white">
                    Accept
                </Button>
                <Button variant="outline" onClick={declineCookies}>
                    Decline
                </Button>
            </div>
        </div>
    );
};
