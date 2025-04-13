'use client';

export default function CookiesPolicyPage() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">Cookies Policy</h1>

            <p className="mb-4">
                This Cookies Policy explains how <strong>digivibedigi.com</strong> uses cookies and similar technologies to recognize you when you visit our website. It tells you what these technologies are, why we use them, and your rights to control their use.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
            <p className="mb-4">
                Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work more efficiently and provide reporting information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. Why We Use Cookies</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Essential Cookies:</strong> Required for basic functionality like navigation and secure areas.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the site (e.g., Google Analytics).</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences (language, region).</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and track ad performance.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. How You Can Control Cookies</h2>
            <p className="mb-4">
                You have the right to accept or reject cookies. You can set or amend your cookie preferences by modifying your browser settings. Note that blocking some types of cookies may impact your experience on the site.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Cookies</h2>
            <p className="mb-4">
                Some cookies may be placed by third parties, such as analytics or advertising partners. We don’t control these cookies and recommend you check their policies for more details.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">5. Updates to This Policy</h2>
            <p className="mb-4">
                We may update this Cookies Policy from time to time. When we do, we’ll revise the date at the top. Please revisit this page regularly to stay informed.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">6. Contact Us</h2>
            <p>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:info@digivibedigi.com" className="text-blue-600 underline">
                    info@digivibedigi.com
                </a>.
            </p>
        </section>
    );
}
