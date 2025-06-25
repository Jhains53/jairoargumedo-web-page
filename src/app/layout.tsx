import React from 'react';
import type { Metadata } from 'next';
import { Exo } from 'next/font/google';
import { metadataStructure } from '@/helpers';
import { metadataDashboard } from '@/json';

import '@/styles/globals.css';

const geistExo = Exo({
	variable: '--font-geist-exo',
	subsets: ['latin']
});

export const metadata: Metadata = metadataStructure(metadataDashboard);

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${geistExo.variable}`}>{children}</body>
		</html>
	);
}
