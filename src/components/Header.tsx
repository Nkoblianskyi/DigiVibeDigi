'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerClose
} from '@/components/ui/drawer';
import { useState } from 'react';

const sections = [
    { label: 'Services', id: 'services' },
    { label: 'Gratitude', id: 'gratitude' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Why Us', id: 'why-us' },
];

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleScrollOrRedirect = (id: string) => {
        if (pathname === '/') {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', '/');
            }
        } else {
            router.push(`/?scrollTo=${id}`);
        }
    };

    const handleMenuItemClick = () => {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-md p-2">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-semibold text-gray-800 text-lg">
                    <Image src="/logo.svg" alt="logo" width={24} height={24} />
                    DigiVibeDigi
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4">
                    {/* Home Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-sm">Home</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {sections.map((s) => (
                                <DropdownMenuItem key={s.id} asChild>
                                    <button onClick={() => handleScrollOrRedirect(s.id)}>
                                        {s.label}
                                    </button>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Services Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-sm">Services</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild><Link href="/services/ppc">PPC Services</Link></DropdownMenuItem>
                            <DropdownMenuItem asChild><Link href="/services/seo">SEO Services</Link></DropdownMenuItem>
                            <DropdownMenuItem asChild><Link href="/services/social">Social Media</Link></DropdownMenuItem>
                            <DropdownMenuItem asChild><Link href="/services/affiliate">Affiliate</Link></DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/blog" className="text-sm hover:underline">Blog</Link>

                    <Link href="/about-us">About Us</Link>

                    <Link href="/write-to-us">
                        <Button className="text-sm px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-700 text-white rounded-md">
                            Write to Us
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Drawer aria-labelledby="Menu" open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <DrawerTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Menu</DrawerTitle>
                            </DrawerHeader>
                            <div className="flex flex-col gap-3 p-4 text-sm text-center">
                                {sections.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => {
                                            handleScrollOrRedirect(s.id);
                                            handleMenuItemClick();
                                        }}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                                <hr />
                                <Link href="/services/ppc" onClick={handleMenuItemClick}>PPC Services</Link>
                                <Link href="/services/seo" onClick={handleMenuItemClick}>SEO Services</Link>
                                <Link href="/services/social" onClick={handleMenuItemClick}>Social Media</Link>
                                <Link href="/services/affiliate" onClick={handleMenuItemClick}>Affiliate</Link>
                                <hr />
                                <Link href="/blog" onClick={handleMenuItemClick}>Blog</Link>
                                <Link href="/about-us" onClick={handleMenuItemClick}>About Us</Link>
                                <Link href="/write-to-us" onClick={handleMenuItemClick}>
                                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-700 text-white">
                                        Write to Us
                                    </Button>
                                </Link>
                            </div>
                            <DrawerClose className="absolute right-4 top-4 text-gray-400 hover:text-black">×</DrawerClose>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
};
