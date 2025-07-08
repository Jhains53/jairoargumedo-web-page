import { MarginContainer, ButtonCustom } from '@/components';

import styles from './Article-one.module.scss';

export default function ArticleOne() {
	const infoButtons: Array<{
		title: string;
		url: string;
		icon: string;
		color?: string;
		blank?: boolean;
	}> = [
		{
			title: 'Ver proyectos',
			url: '/#myprojects',
			icon: '/images/curriculum-vitae 1.png'
		},
		{
			title: 'Descargar CV',
			url: 'https://umiqvfzaykwktvrpgvmt.supabase.co/storage/v1/object/public/images/Web-personal/documents/CV-Jairo-Argumedo%201.pdf',
			icon: '/images/curriculum-vitae 1.png',
			color: '#000000',
			blank: true
		}
	];

	return (
		<div className={styles.container}>
			<div className={styles.shsdow}></div>
			<MarginContainer>
				<div className={styles.container__info}>
					<div className={styles.container__info__text}>
						<div className={styles.container__info__text__one}>
							<h1>
								{'Hola, soy'}
								<br />
								<span className={styles.typewriter}>{'Jairo Argumedo...'}</span>
							</h1>
							<strong>
								{'Ingeniero de software y Desarrollador Full Stack'}
							</strong>
						</div>
						<p>
							{
								'Apasionado por crear y desarrollar soluciones eficientes y funcionales.'
							}
						</p>
					</div>
					<div className={styles.container__info__bottons}>
						{infoButtons &&
							infoButtons.map(({ title, url, icon, color, blank }, index) => (
								<ButtonCustom
									key={index}
									title={title}
									url={url}
									icon={icon}
									colorBackground={color}
									isBorder={true}
									onTarget={blank}
								/>
							))}
					</div>
				</div>
			</MarginContainer>
		</div>
	);
}
