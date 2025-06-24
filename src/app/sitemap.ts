import { MetadataRoute } from 'next';

const pages: Array<string> = ['/home'];

export default function sitemap(): MetadataRoute.Sitemap {
	const currentDate: Date = new Date();

	return pages.map((path: string) => ({
		url: `${'https://www.jairoargumedo.com'}/${path}`,
		lastModified: currentDate,
		changeFrequency: 'weekly',
		priority: 0.8
	}));
}
