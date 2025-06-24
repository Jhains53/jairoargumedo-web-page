import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'firebasestorage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'storage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: '**.firebasestorage.googleapis.com',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'umiqvfzaykwktvrpgvmt.supabase.co'
			}
		]
	},
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx'],
	experimental: {
		scrollRestoration: true,
		webVitalsAttribution: ['CLS', 'LCP']
	}
};

export default nextConfig;
