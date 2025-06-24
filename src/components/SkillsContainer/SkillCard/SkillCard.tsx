import Image from 'next/image';

import styles from './skill-card.module.scss';

interface ISkillCard {
	img: string;
	text: string;
}

export default function SkillCard({ img, text }: ISkillCard) {
	return (
		<div className={styles.container}>
			<Image width={50} height={50} src={img} alt={text} />
			<p>{text}</p>
		</div>
	);
}
