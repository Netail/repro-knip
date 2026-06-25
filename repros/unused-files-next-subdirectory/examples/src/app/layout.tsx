import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Example app',
    description: 'Live example',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
            <body >
                {children}
            </body>
        </html>
    );
}
