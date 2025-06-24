import React from 'react';
import type { Metadata } from 'next';
import { Exo } from 'next/font/google';

import '@/styles/globals.css';

const geistExo = Exo({
	variable: '--font-geist-exo',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Jaira Argumedo | Ingeniero de Software y Desarrollador full stack',
	description:
		'con más de un año de experiencia en el desarrollo de aplicaciones tanto en el frontend como en el backend, utilizando tecnologías como JavaScript y TypeScript.'
};

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
