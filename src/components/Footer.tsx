import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-700 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Left - Services */}
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-lg font-semibold mb-4">Our Services</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/services/ppc" className="hover:underline">PPC Services</Link></li>
                        <li><Link href="/services/seo" className="hover:underline">SEO Services</Link></li>
                        <li><Link href="/services/social" className="hover:underline">Social Media Services</Link></li>
                        <li><Link href="/services/affiliate" className="hover:underline">Affiliate Services</Link></li>
                    </ul>
                </div>

                {/* Center - Company Info */}
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-3">
                        <Link href='/' aria-label="DigiVibeDigi" className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="logo" width={24} height={24} />
                            <h3 className="text-2xl font-semibold">DigiVibeDigi</h3>
                        </Link>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs mb-2">
                        Driving your digital success with PPC, SEO, <br />Social Media, and Affiliate expertise. Let’s grow together.
                    </p>
                    <a
                        href="mailto:info@digivibedigi.com"
                        className="text-primary font-medium underline hover:no-underline mb-1"
                    >
                        info@digivibedigi.com
                    </a>
                    <p className="text-xs text-gray-500">Neue Schönhauser Straße 3-5, 10178 Berlin, Germany</p>
                </div>

                {/* Right - Additional Links */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-lg font-semibold mb-4">Additional Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/write-to-us" className="hover:underline">Write to Us</Link></li>
                        <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                        <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                        <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                        <li><Link href="/cookies-policy" className="hover:underline">Cookies</Link></li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 text-xs text-center text-gray-500">
                © 2025 DigiVibeDigi. All rights reserved.
            </div>
        </footer>
    );
};
