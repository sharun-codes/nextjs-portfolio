import { useEffect, useState } from 'react';

export function useCsrf() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        // fetch the /api/csrf endpoint
        // fetch will set cookie as well and return token in response
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        fetch(API_URL + '/api/csrf', { method: 'GET', credentials: 'include' })
            .then((r) => r.json())
            .then((data) => setToken(data.csrfToken))
            .catch(() => setToken(null));
    }, []);

    return token;
}
