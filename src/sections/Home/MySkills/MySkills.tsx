import { MarginContainer, SkillsContainer, Titles } from '@/components';
import SkillCard from '@/components/SkillsContainer/SkillCard/SkillCard';

import styles from './my-skills.module.scss';

interface ISkillsContainer {
	title: string;
	card: Array<{ img: string; text: string }>;
}

const data: Array<ISkillsContainer> = [
	{
		title: 'Lenguajes de programación:',
		card: [
			{
				img: '/images/JavaScript.webp',
				text: 'JavaScript'
			},
			{
				img: '/images/TypeScript.webp',
				text: 'TypeScript'
			},
			{
				img: '/images/php.webp',
				text: 'PHP'
			}
		]
	},
	{
		title: 'Frontend:',
		card: [
			{
				img: '/images/HTML5.webp',
				text: 'HTML5'
			},
			{
				img: '/images/css.webp',
				text: 'CSS3'
			},
			{
				img: '/images/React.webp',
				text: 'React.js'
			},
			{
				img: '/images/Next.js.webp',
				text: 'Next.js'
			},
			{
				img: '/images/vite.webp',
				text: 'Vite'
			}
		]
	},
	{
		title: 'Backend:',
		card: [
			{
				img: '/images/Nest.js.webp',
				text: 'NestJS'
			},
			{
				img: '/images/API-REST.webp',
				text: 'API REST'
			},
			{
				img: '/images/Prisma.webp',
				text: 'Prisma'
			},
			{
				img: '/images/TypeORM.webp',
				text: 'TypeORM'
			}
		]
	},
	{
		title: 'Bases de datos:',
		card: [
			{
				img: '/images/MySql.webp',
				text: 'MySQL'
			},
			{
				img: '/images/Supabase.webp',
				text: 'Supabase'
			}
		]
	},
	{
		title: 'Control de versiones:',
		card: [
			{
				img: '/images/Git.webp',
				text: 'Git'
			},
			{
				img: '/images/GitHub.webp',
				text: 'GitHub'
			}
		]
	}
];

export default function MySkills() {
	return (
		<section className={styles.container}>
			<div className={styles.spacing} id='myskills'></div>
			<MarginContainer>
				<Titles title={'Mis habilidades'} />
				<div className={styles.container__center}>
					<div className={styles.container__center__div1}>
						<div className={styles.skills}>
							<h3>{data[0].title}</h3>
							<div className={styles.skills__contentL}>
								{data[0].card.map(({ img, text }, index: number) => (
									<SkillCard key={index} img={img} text={text} />
								))}
							</div>
						</div>
					</div>
					<div className={styles.container__center__div2}>
						<div className={styles.skills}>
							<h3>{data[1].title}</h3>
							<div className={styles.skills__contentF}>
								{data[1].card.map(({ img, text }, index: number) => (
									<SkillCard key={index} img={img} text={text} />
								))}
							</div>
						</div>
					</div>
					<div className={styles.container__center__div3}>
						<div className={styles.skills}>
							<h3>{data[2].title}</h3>
							<div className={styles.skills__contentBack}>
								{data[2].card.map(({ img, text }, index: number) => (
									<SkillCard key={index} img={img} text={text} />
								))}
							</div>
						</div>
					</div>
					<div className={styles.container__center__div4}>
						<div className={styles.skills}>
							<h3>{data[3].title}</h3>
							<div className={styles.skills__content}>
								{data[3].card.map(({ img, text }, index: number) => (
									<SkillCard key={index} img={img} text={text} />
								))}
							</div>
						</div>
					</div>
					<div className={styles.container__center__div5}>
						<div className={styles.skills}>
							<h3>{data[4].title}</h3>
							<div className={styles.skills__content}>
								{data[4].card.map(({ img, text }, index: number) => (
									<SkillCard key={index} img={img} text={text} />
								))}
							</div>
						</div>
					</div>
				</div>
			</MarginContainer>
		</section>
	);
}
