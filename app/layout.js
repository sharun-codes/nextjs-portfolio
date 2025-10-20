import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';

export const metadata = {
    title: 'Sharun K — Senior Web Developer',
    description:
        'Backend-focused full-stack developer. PHP, Laravel, Node, React integrations.',
    formatDetection: {
        telephone: false,
        date: false,
        email: false,
        address: false,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body suppressHydrationWarning>
                <GoogleAnalytics />
                <main>{children}</main>
            </body>
        </html>
    );
}
