import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="not-found">
            <h1 className="not-found__code">404</h1>
            <p className="not-found__message">Oops! Page not found.</p>
            <Link href="/" className="not-found__link">
                Go back home
            </Link>
        </div>
    );
}
