import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center text-gray-700 py-10 px-6">
            <div className="flex justify-center items-center gap-2 mb-3">
                <Image src="/logo.svg" alt="logo" width={24} height={24} />
                <h3 className="text-2xl font-semibold">DigiVibeDigi</h3>
            </div>

            <p className="max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-4">
                Driving your digital success with PPC, SEO, Social Media, and Affiliate expertise. Let’s grow together.
            </p>

            <a href="mailto:info@digivibedigi.com" className="text-primary font-medium underline hover:no-underline">
                info@digivibedigi.com
            </a>

            <div className="mt-6 text-xs text-gray-500">© 2025 DigiVibeDigi. All rights reserved.</div>
        </footer>
    );
};
