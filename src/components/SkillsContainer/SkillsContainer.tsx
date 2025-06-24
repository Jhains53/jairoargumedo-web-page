import SkillCard from './SkillCard/SkillCard';

import styles from './Skills-container.module.scss';

interface ISkillsContainer {
	title: string;
	card: Array<{ img: string; text: string }>;
}

export default function SkillsContainer({ title, card }: ISkillsContainer) {
	return (
		<div className={styles.container}>
			<h3>{title}</h3>
			<div className={styles.container__content}>
				{card.map(({ img, text }, index: number) => (
					<SkillCard key={index} img={img} text={text} />
				))}
			</div>
		</div>
	);
}
