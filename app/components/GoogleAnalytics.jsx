'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function GoogleAnalytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Inject GA script once
    useEffect(() => {
        if (!GA_ID) return;
        // If GA already injected, skip
        if (window.gtag) return;

        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', { page_path: window.location.pathname });
    `;
        document.head.appendChild(script2);
    }, [GA_ID]);

    // Send pageview on route change
    useEffect(() => {
        if (!GA_ID || !window.gtag) return;
        window.gtag('config', GA_ID, {
            page_path:
                pathname + (searchParams.toString() ? `?${searchParams}` : ''),
        });
    }, [pathname, searchParams, GA_ID]);

    return null;
}
