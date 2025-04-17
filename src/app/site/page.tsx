'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function Page() {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowPopup(true), 2500);
        return () => clearTimeout(timer);
    }, []);

    const cards = [
        {
            id: 1,
            label: '#1 MEJOR CASA DE APUESTAS',
            logo: '/new_spain/img/boomerang.svg',
            rating: '10.0',
            votes: '14,546',
            bonus: '200€',
            link: 'https://boomerang-bet616356.com/de/'
        },
        {
            id: 2,
            label: '#2 SELECCIÓN DE JUGADORES',
            logo: '/new_spain/img/billybets.png',
            rating: '9.9',
            votes: '13,125',
            bonus: '200€',
            link: 'https://billybets2.com/'
        },
        {
            id: 3,
            label: '#3 TENDENCIAS',
            logo: '/new_spain/img/mrpacho.svg',
            rating: '9.8',
            votes: '12,767',
            bonus: '200€',
            link: 'https://mrpacho834643.com/'
        },
        {
            id: 4,
            label: '#4 RECOMENDADO',
            logo: '/new_spain/img/batibet.png',
            rating: '9.7',
            votes: '10,325',
            bonus: '200€',
            link: 'https://www.betibet.com/'
        },
        {
            id: 5,
            label: '#5 BUENA OPCIÓN',
            logo: '/new_spain/img/rtbet.png',
            rating: '9.6',
            votes: '8,879',
            bonus: '200€',
            link: 'https://rtbet8.com/'
        }
    ];

    return (
        <main style={{ background: '#001212', backgroundImage: 'url(/new_spain/img/pattern.png)', fontFamily: 'Roboto, sans-serif', color: '#fff' }}>
            {showPopup && (
                <div id="popup-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
                    <div style={{ background: '#fff', border: '2px solid #285ca7', borderRadius: '10px', maxWidth: '400px', width: '90%', textAlign: 'center', padding: '20px', position: 'relative' }}>
                        <button onClick={() => setShowPopup(false)} style={{ position: 'absolute', top: '-40px', right: '10px', background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}>✖</button>
                        <div style={{ background: '#285ca7', padding: '30px 0', margin: '0 -22px', textAlign: 'center' }}>
                            <span style={{ color: '#fff', fontWeight: 700 }}>LA MEJOR CASA DE APUESTAS</span>
                        </div>
                        <div className="popup-content">
                            <img src="/new_spain/img/boomerang.svg" alt="Vegas Logo" style={{ width: 200, marginBottom: 15 }} />
                            <h2 style={{ paddingBottom: 10, color: '#285ca7', fontWeight: 700 }}>
                                <span style={{ color: '#171717' }}>BONIFICACIÓN POR NUEVO CLIENTE</span><br />100% HASTA 200€
                            </h2>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src="/new_spain/img/star_icon.svg" alt="star" style={{ width: 16, verticalAlign: 'middle' }} />
                                ))}
                                <p style={{ fontWeight: 700, color: '#171717', fontSize: 24, margin: 0 }}>10.0<span style={{ fontSize: 16 }}>/10</span></p>
                            </div><br />
                            <a href="https://boomerang-bet616356.com/de/" className="play-btn" style={{ height: 50, borderRadius: 12, background: '#8cc739', color: '#fff', fontSize: 18, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', textTransform: 'uppercase' }}>BONO COLECCIÓN</a>
                        </div>
                    </div>
                </div>
            )}

            <header style={{ padding: '16px 0', background: '#002222' }}>
                <div style={{ maxWidth: 1210, margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Link href="/" className="logo">
                        <img src="/new_spain/img/logotype.svg" alt="Logo" style={{ width: 170 }} />
                    </Link>
                </div>
            </header>

            <div style={{ maxWidth: 1210, margin: '0 auto', padding: '0 20px' }}>
                <div className="content" style={{ textAlign: 'center', padding: '100px 0 50px' }}>
                    <h1 style={{ fontSize: 36, fontWeight: 700 }}>
                        Mejores casas de apuestas <span style={{ color: '#69FE00' }}>España</span><br />UPDATED FOR <span style={{ color: '#69FE00' }}>JANUARY 2025</span>
                    </h1>
                    <p style={{ fontSize: 16, fontWeight: 400, maxWidth: 730, margin: '20px auto 0' }}>
                        En España hay numerosas casas de apuestas que ofrecen oportunidades seguras y atractivas para apostar...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50, gap: 50 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src="/new_spain/img/Group 1.svg" alt="icon1" style={{ width: 24 }} />
                            <span style={{ fontSize: 14, fontWeight: 400 }}>Seguro & Fiable</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src="/new_spain/img/Group 2.svg" alt="icon2" style={{ width: 24 }} />
                            <span style={{ fontSize: 14, fontWeight: 400 }}>Retiradas Rápidas</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <img src="/new_spain/img/Group 3.svg" alt="icon3" style={{ width: 24 }} />
                            <span style={{ fontSize: 14, fontWeight: 400 }}>Bonos Elevados</span>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bookmakers-block" style={{ maxWidth: 1210, margin: '0 auto', padding: '0 20px' }}>
                {cards.map((card) => (
                    <div key={card.id} style={{ background: '#fff', color: '#000', borderRadius: 12, padding: 20, marginBottom: 30 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', background: '#285ca7', padding: '4px 12px', display: 'inline-block', marginBottom: 10 }}>{card.label}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                            <img src={card.logo} alt={`logo-${card.id}`} style={{ width: 150 }} />
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src="/new_spain/img/star_icon.svg" alt="star" style={{ width: 16 }} />
                                    ))}
                                    <span style={{ fontWeight: 700 }}>{card.rating}</span>
                                    <span style={{ color: '#888' }}>({card.votes})</span>
                                </div>
                                <h3 style={{ fontSize: 18, fontWeight: 600, margin: '10px 0' }}>BONIFICACIÓN POR NUEVO CLIENTE</h3>
                                <p style={{ fontSize: 20, fontWeight: 700 }}>{card.bonus}</p>
                                <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 10, padding: '10px 20px', background: '#8cc739', color: '#fff', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>BONO COLECCIÓN</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
