// src/app/privacy-policy/page.tsx

'use client';

export default function PrivacyPolicyPage() {
    return (
        <section className="max-w-4xl mx-auto py-16 px-4 text-gray-800">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

            <p className="mb-4">
                At <strong>digivibedigi.com</strong>, safeguarding your privacy is a core commitment. This Privacy Policy outlines how we gather, utilize, share, and secure your personal information when you engage with our website. Our goal is to provide clarity and empower you with control over your data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Gather</h2>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Personal Details:</strong> Name, email, contact number (when you reach out or subscribe).</li>
                <li><strong>Automatically Collected Data:</strong> IP address, browser/device type, OS, page views, referrer site, session duration.</li>
                <li><strong>Cookies & Tracking:</strong> Data collected via cookies and similar tools (see our Cookies Policy).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Utilize Your Data</h2>
            <ul className="list-disc list-inside space-y-2">
                <li>To manage and improve website functionality.</li>
                <li>To analyze trends and fix issues.</li>
                <li>To respond to inquiries or send updates and offers (unsubscribe any time).</li>
                <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
            <p className="mb-2">We do <strong>not</strong> sell or rent your personal data. However, it may be shared with:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Trusted Partners:</strong> Hosting providers, analytics services like Google Analytics.</li>
                <li><strong>Legal Obligations:</strong> In response to court orders or legal processes.</li>
                <li><strong>Business Transitions:</strong> In case of a merger or acquisition.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Protecting Your Data</h2>
            <p>
                We use encryption, firewalls, and secure protocols to protect your data. However, no digital platform can guarantee 100% security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Options and Rights</h2>
            <p>You may have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
                <li><strong>Access:</strong> View the data we store.</li>
                <li><strong>Correction:</strong> Fix or update your data.</li>
                <li><strong>Deletion:</strong> Request removal of your data.</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing messages.</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact us at <a href="mailto:info@digivibedigi.com" className="text-blue-600 underline">info@digivibedigi.com</a>. We’ll reply within 5 business days.</p>

            <h2 className="text-xl font-semibold mt-8 mb-2">6. Links to External Sites</h2>
            <p>Our site may link to third-party websites. We’re not responsible for their privacy practices.</p>

            <h2 className="text-xl font-semibold mt-8 mb-2">7. Protecting Children</h2>
            <p>This site is not for users under 13. If we unintentionally collect data from minors, we delete it promptly.</p>

            <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Retention</h2>
            <p>We keep your data only as long as needed. After that, we securely delete or anonymize it.</p>

            <h2 className="text-xl font-semibold mt-8 mb-2">9. Updates to This Policy</h2>
            <p>This Privacy Policy may change. Major changes will be announced via email or website notice.</p>
        </section>
    );
}
