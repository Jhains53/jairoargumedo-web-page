import {
	HeaderSection,
	ArticleMain,
	AboutMe,
	MySkills,
	MyProjects,
	FooterSection
} from '@/sections';

export default function Home() {
	return (
		<>
			<HeaderSection />
			<main>
				<ArticleMain />
				<AboutMe />
				<MySkills />
				<MyProjects />
			</main>
			<FooterSection />
		</>
	);
}
